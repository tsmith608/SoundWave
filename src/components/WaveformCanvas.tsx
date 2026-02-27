"use client";

import React, { useEffect, useRef } from 'react';
import styles from './WaveformCanvas.module.css';

interface WaveformCanvasProps {
    audioBlob: Blob | null;
    color?: string;
    bars?: number;
}

export default function WaveformCanvas({ audioBlob, color = '#d4af37', bars = 60 }: WaveformCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!audioBlob || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const processAudio = async () => {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            const arrayBuffer = await audioBlob.arrayBuffer();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

            const channelData = audioBuffer.getChannelData(0);
            const step = Math.ceil(channelData.length / bars);
            const peaks = [];

            for (let i = 0; i < bars; i++) {
                let max = 0;
                for (let j = 0; j < step; j++) {
                    const val = Math.abs(channelData[i * step + j]);
                    if (val > max) max = val;
                }
                peaks.push(max);
            }

            draw(peaks);
        };

        const draw = (peaks: number[]) => {
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);

            const barWidth = (width / peaks.length) * 0.8;
            const barGap = (width / peaks.length) * 0.2;

            ctx.fillStyle = color;

            peaks.forEach((peak, i) => {
                const barHeight = peak * height * 0.8;
                const x = i * (barWidth + barGap);
                const y = (height - barHeight) / 2;

                // Draw rounded rectangles
                ctx.beginPath();
                const radius = barWidth / 2;
                ctx.roundRect(x, y, barWidth, barHeight, radius);
                ctx.fill();
            });
        };

        processAudio();
    }, [audioBlob, color, bars]);

    return (
        <div className={styles.canvasWrapper}>
            <canvas
                ref={canvasRef}
                width={1200}
                height={400}
                className={styles.canvas}
            />
            {!audioBlob && (
                <div className={styles.placeholder}>
                    <p>Soundwave preview will appear here</p>
                </div>
            )}
        </div>
    );
}
