import React, { useRef, useState } from 'react';

export const FloatingAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const startSacredDrone = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Master Gain Node
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 2.0); // Gentle 2s fade in
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Indian Classical Tanpura Harmonics (Key of C# / G# - 138.59 Hz Sa, 207.65 Hz Pa)
      const frequencies = [138.59, 207.65, 277.18, 415.3, 554.37];
      const oscs: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        // Warm sine and subtle triangle for tanpura resonance
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Low pass filter for gentle warmth
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);

        const individualVolume = 0.25 / (idx + 1);
        oscGain.gain.setValueAtTime(individualVolume, ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (e) {
      console.warn('Web Audio playback error:', e);
    }
  };

  const stopSacredDrone = () => {
    if (audioCtxRef.current && gainNodeRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.0); // 1s fade out

      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // Already stopped
          }
        });
        oscillatorsRef.current = [];
        if (audioCtxRef.current) {
          audioCtxRef.current.close();
          audioCtxRef.current = null;
        }
        setIsPlaying(false);
      }, 1000);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopSacredDrone();
    } else {
      startSacredDrone();
    }
  };

  return (
    <div
      onClick={toggleAudio}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        background: 'rgba(26, 49, 39, 0.92)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${isPlaying ? 'var(--color-gold-bright)' : 'rgba(185, 154, 98, 0.45)'}`,
        borderRadius: '30px',
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
      role="button"
      tabIndex={0}
      aria-label={isPlaying ? 'Pause background music' : 'Play sacred wedding music'}
    >
      <span style={{ fontSize: '1.1rem' }}>
        {isPlaying ? '🎵' : '🔇'}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          color: 'var(--color-gold-champagne)',
          textTransform: 'uppercase',
        }}
      >
        {isPlaying ? 'Playing Shehnai' : 'Play Sacred Music'}
      </span>
    </div>
  );
};
