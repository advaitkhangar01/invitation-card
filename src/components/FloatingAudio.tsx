import React, { useEffect, useRef, useState } from 'react';

export const FloatingAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);

  // Play delicate ceremonial temple chime
  const playSacredChime = (ctx: AudioContext, destination: AudioNode) => {
    try {
      const chimeFreqs = [1108.73, 1479.98, 2217.46]; // C#6, F#6, C#7 harmonics
      chimeFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const startTime = ctx.currentTime + idx * 0.08;
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.12 / (idx + 1), startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.5);

        osc.connect(gain);
        gain.connect(destination);
        osc.start(startTime);
        osc.stop(startTime + 2.6);
      });
    } catch {
      // Non-blocking
    }
  };

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
      masterGain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 2.2);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Play soft entrance chime
      playSacredChime(ctx, ctx.destination);

      // Classical Indian Tanpura Harmonics (Raga in C# / G#)
      const droneFreqs = [69.3, 138.59, 207.65, 277.18, 415.3];
      const oscs: OscillatorNode[] = [];

      droneFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx === 0 ? 'sine' : idx % 2 === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(720, ctx.currentTime);

        const vol = 0.25 / (idx + 1);
        oscGain.gain.setValueAtTime(vol, ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        oscs.push(osc);
      });

      // Shehnai Vibrato Flute Overtone (Gentle spiritual auspicious melody)
      const shehnaiOsc = ctx.createOscillator();
      const shehnaiGain = ctx.createGain();
      shehnaiOsc.type = 'triangle';
      shehnaiOsc.frequency.setValueAtTime(554.37, ctx.currentTime); // High C# (Sa)

      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(4.5, ctx.currentTime);
      lfoGain.gain.setValueAtTime(3.2, ctx.currentTime);
      lfo.connect(shehnaiOsc.frequency);
      lfo.start();
      lfoRef.current = lfo;

      shehnaiGain.gain.setValueAtTime(0.04, ctx.currentTime);
      shehnaiOsc.connect(shehnaiGain);
      shehnaiGain.connect(masterGain);
      shehnaiOsc.start();
      oscs.push(shehnaiOsc);

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (e) {
      console.warn('Audio playback initialization:', e);
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

  useEffect(() => {
    // Listen for custom trigger from card opening button
    const handleCustomAudioStart = () => {
      startSacredMusic();
    };
    window.addEventListener('start-wedding-audio', handleCustomAudioStart);

    return () => {
      window.removeEventListener('start-wedding-audio', handleCustomAudioStart);
    };
  }, []);

  return (
    <aside
      onClick={toggleMusic}
      style={{
        position: 'fixed',
        bottom: '22px',
        right: '20px',
        background: 'rgba(22, 41, 32, 0.94)',
        backdropFilter: 'blur(14px)',
        border: `1px solid ${isPlaying ? 'var(--color-gold-bright)' : 'rgba(179, 145, 85, 0.45)'}`,
        borderRadius: '30px',
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: isPlaying
          ? '0 12px 32px rgba(0, 0, 0, 0.45), 0 0 15px rgba(212, 182, 126, 0.35)'
          : '0 10px 24px rgba(0, 0, 0, 0.35)',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'all 0.35s ease',
        userSelect: 'none',
      }}
      role="button"
      tabIndex={0}
      aria-label={isPlaying ? 'Mute Sacred Music' : 'Play Sacred Music'}
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
            letterSpacing: '0.08em',
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
          {isPlaying ? 'Playing • Tap to Mute' : 'Muted • Tap to Play'}
        </span>
      </div>
    </aside>
  );
};
