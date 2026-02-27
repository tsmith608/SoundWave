"use client";

import React, { useState } from 'react';
import AudioRecorder from './AudioRecorder';
import WaveformCanvas from './WaveformCanvas';
import styles from './PortraitBuilder.module.css';

const PALETTES = [
    { name: 'Midnight Gold', bg: '#0c0c0c', wave: '#d4af37' },
    { name: 'Everest Silver', bg: '#fdfdfd', wave: '#c0c0c0' },
    { name: 'Nordic Slate', bg: '#1a1a1a', wave: '#fdfdfd' },
    { name: 'Rose Petal', bg: '#fff5f5', wave: '#ff9999' }
];

const SIZES = [
    { id: 'sm', label: '8" x 10"', price: 49 },
    { id: 'md', label: '12" x 18"', price: 89 },
    { id: 'lg', label: '24" x 36"', price: 149 }
];

export default function PortraitBuilder() {
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [palette, setPalette] = useState(PALETTES[0]);
    const [size, setSize] = useState(SIZES[1]);
    const [scale, setScale] = useState(1);
    const [text, setText] = useState('');

    return (
        <div className={styles.builder}>
            <div className={styles.previewSection}>
                <div
                    className={styles.frame}
                    style={{
                        backgroundColor: palette.bg,
                        transform: `scale(${0.8 + (SIZES.indexOf(size) * 0.1)})`
                    }}
                >
                    <div className={styles.artContent} style={{ transform: `scale(${scale})` }}>
                        <WaveformCanvas audioBlob={audioBlob} color={palette.wave} />
                        {text && <p className={styles.artText} style={{ color: palette.wave }}>{text}</p>}
                    </div>
                </div>
            </div>

            <div className={styles.controlsSection}>
                <h2 className={styles.title}>Customize your art</h2>

                <div className={styles.group}>
                    <label>1. Capture your sound</label>
                    <AudioRecorder onAudioReady={setAudioBlob} />
                </div>

                <div className={styles.gridGroup}>
                    <div className={styles.group}>
                        <label>2. Choose Palette</label>
                        <div className={styles.paletteGrid}>
                            {PALETTES.map((p) => (
                                <button
                                    key={p.name}
                                    className={`${styles.paletteBtn} ${palette.name === p.name ? styles.active : ''}`}
                                    onClick={() => setPalette(p)}
                                    title={p.name}
                                >
                                    <div className={styles.paletteCircle} style={{ background: p.wave, borderColor: p.bg }} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.group}>
                        <label>3. Select Size</label>
                        <div className={styles.sizeToggle}>
                            {SIZES.map((s) => (
                                <button
                                    key={s.id}
                                    className={`${styles.sizeBtn} ${size.id === s.id ? styles.active : ''}`}
                                    onClick={() => setSize(s)}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.group}>
                    <label>4. Personalize</label>
                    <input
                        type="text"
                        placeholder="Add a message (e.g. Happy Birthday)"
                        className={styles.textInput}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <div className={styles.group}>
                    <label>Waveform Elevation: {Math.round(scale * 100)}%</label>
                    <input
                        type="range"
                        min="0.5"
                        max="1.5"
                        step="0.01"
                        value={scale}
                        onChange={(e) => setScale(parseFloat(e.target.value))}
                        className={styles.slider}
                    />
                </div>

                <button className={styles.checkoutBtn} disabled={!audioBlob}>
                    {audioBlob ? `Add to Bag — $${size.price}` : 'Capture sound to continue'}
                </button>
            </div>
        </div>
    );
}
