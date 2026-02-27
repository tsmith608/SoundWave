"use client";

import React, { useState, useRef } from 'react';
import styles from './AudioRecorder.module.css';

interface AudioRecorderProps {
    onAudioReady: (blob: Blob) => void;
}

export default function AudioRecorder({ onAudioReady }: AudioRecorderProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [progress, setProgress] = useState(0);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                onAudioReady(blob);
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
            setIsRecording(true);

            // Visual progress fake for UI feedback
            const start = Date.now();
            const interval = setInterval(() => {
                const elapsed = (Date.now() - start) / 1000;
                if (elapsed >= 10) stopRecording(); // max 10s
                setProgress(Math.min((elapsed / 10) * 100, 100));
            }, 100);

            (mediaRecorder as any).interval = interval;

        } catch (err) {
            console.error("Error accessing microphone:", err);
            alert("Please allow microphone access to record.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            clearInterval((mediaRecorderRef.current as any).interval);
            setProgress(0);
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onAudioReady(file);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                {!isRecording ? (
                    <button className={styles.recordBtn} onClick={startRecording}>
                        <div className={styles.micIcon} />
                        Capture Moment
                    </button>
                ) : (
                    <button className={styles.stopBtn} onClick={stopRecording}>
                        <div className={styles.stopIcon} />
                        Stop ({Math.round(progress / 10)}s)
                    </button>
                )}

                <div className={styles.divider}>or</div>

                <label className={styles.uploadLabel}>
                    Upload File
                    <input type="file" accept="audio/*" onChange={handleFileUpload} className={styles.hiddenInput} />
                </label>
            </div>

            {isRecording && (
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                </div>
            )}
        </div>
    );
}
