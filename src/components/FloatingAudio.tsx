import React, { useEffect, useRef, useState } from 'react';

export const FloatingAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);

  const startSacredMusic = () => {
    try {
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        setIsPlaying(true);
        return;
      }

      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioContextClass();
      audioCtxRef.current = ctx;

      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }

      // Master Gain Node with 2s smooth cinematic fade in
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.22, ctx.currentTime + 2.0);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // 1. Classical Indian Tanpura Harmonics (Raga Bhairav / Bilawal in C# / G#)
      // Fundamental frequencies: 69.3Hz (Kharaj), 138.59Hz (Sa), 207.65Hz (Pa), 277.18Hz (High Sa)
      const droneFreqs = [69.3, 138.59, 207.65, 277.18, 415.3];
      const oscs: OscillatorNode[] = [];

      droneFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx === 0 ? 'sine' : idx % 2 === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Low-pass filter for velvety warmth
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(750, ctx.currentTime);

        const vol = 0.28 / (idx + 1);
        oscGain.gain.setValueAtTime(vol, ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        oscs.push(osc);
      });

      // 2. Shehnai Vibrato Melodic Overtone (Gentle spiritual auspicious melody)
      const shehnaiOsc = ctx.createOscillator();
      const shehnaiGain = ctx.createGain();
      shehnaiOsc.type = 'triangle';
      shehnaiOsc.frequency.setValueAtTime(554.37, ctx.currentTime); // High C# (Sa)

      // Vibrato LFO for Shehnai breath
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(4.5, ctx.currentTime); // 4.5 Hz vocal tremolo
      lfoGain.gain.setValueAtTime(3.5, ctx.currentTime); // subtle pitch bend
      lfo.connect(shehnaiOsc.frequency);
      lfo.start();
      lfoRef.current = lfo;

      shehnaiGain.gain.setValueAtTime(0.045, ctx.currentTime);
      shehnaiOsc.connect(shehnaiGain);
      shehnaiGain.connect(masterGain);
      shehnaiOsc.start();
      oscs.push(shehnaiOsc);

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (e) {
      console.warn('Audio autoplay requires gesture:', e);
    }
  };

  const stopSacredMusic = () => {
    if (audioCtxRef.current && masterGainRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, ctx.currentTime);
      masterGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);

      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // Already stopped
          }
        });
        if (lfoRef.current) {
          try {
            lfoRef.current.stop();
            lfoRef.current.disconnect();
          } catch {
            // Already stopped
          }
          lfoRef.current = null;
        }
        oscillatorsRef.current = [];
        if (audioCtxRef.current) {
          audioCtxRef.current.close();
          audioCtxRef.current = null;
        }
        setIsPlaying(false);
      }, 800);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopSacredMusic();
    } else {
      startSacredMusic();
    }
  };

  // Auto-play by default on mount & automatically resume on first interaction
  useEffect(() => {
    // Attempt instant autoplay
    startSacredMusic();

    // Universal gesture handler to satisfy strict browser autoplay policies
    const handleFirstGesture = () => {
      startSacredMusic();
      ['touchstart', 'scroll', 'pointerdown', 'click', 'keydown'].forEach((evt) => {
        window.removeEventListener(evt, handleFirstGesture);
      });
    };

    ['touchstart', 'scroll', 'pointerdown', 'click', 'keydown'].forEach((evt) => {
      window.addEventListener(evt, handleFirstGesture, { passive: true });
    });

    return () => {
      ['touchstart', 'scroll', 'pointerdown', 'click', 'keydown'].forEach((evt) => {
        window.removeEventListener(evt, handleFirstGesture);
      });
    };
  }, []);

  return (
    <aside
      onClick={toggleMusic}
      style={{
        position: 'fixed',
        bottom: '22px',
        right: '20px',
        background: 'rgba(26, 49, 39, 0.94)',
        backdropFilter: 'blur(14px)',
        border: `1px solid ${isPlaying ? 'var(--color-gold-bright)' : 'rgba(185, 154, 98, 0.45)'}`,
        borderRadius: '30px',
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: isPlaying
          ? '0 12px 32px rgba(0, 0, 0, 0.45), 0 0 15px rgba(216, 189, 138, 0.35)'
          : '0 10px 24px rgba(0, 0, 0, 0.35)',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'all 0.35s ease',
        userSelect: 'none',
      }}
      role="button"
      tabIndex={0}
      aria-label={isPlaying ? 'Mute Sacred Shehnai Music' : 'Play Sacred Shehnai Music'}
    >
      <span
        style={{
          fontSize: '1.15rem',
          display: 'inline-block',
          animation: isPlaying ? 'musicPulse 1.8s infinite ease-in-out' : 'none',
        }}
      >
        {isPlaying ? '🎵' : '🔇'}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.07em',
            color: 'var(--color-gold-champagne)',
            textTransform: 'uppercase',
            lineHeight: 1.2,
          }}
        >
          {isPlaying ? 'Sacred Shehnai' : 'Play Music'}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.625rem',
            color: isPlaying ? 'var(--color-gold-bright)' : 'var(--color-sage-light)',
            letterSpacing: '0.04em',
          }}
        >
          {isPlaying ? 'Playing • Tap to Mute' : 'Tap to Play'}
        </span>
      </div>
    </aside>
  );
};
