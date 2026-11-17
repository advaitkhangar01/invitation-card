import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const AuspiciousShloka: React.FC = () => {
  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        paddingTop: '6px',
        paddingBottom: '16px',
      }}
      aria-label="Auspicious Invocation"
    >
      {/* Traditional Sanskrit Shloka */}
      <div style={{ marginBottom: '14px' }}>
        <p
          className="shloka-text"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            letterSpacing: '0.05em',
            color: 'var(--color-sacred-kumkum)',
            fontWeight: 700,
            lineHeight: 1.3,
            margin: '0 auto 4px',
          }}
        >
          {WEDDING_DATA.shloka.sanskrit}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--color-ink-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          {WEDDING_DATA.shloka.english}
        </p>
      </div>

      {/* Ceremonial Brass Deepam / Diya Lamp */}
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          margin: '4px auto 0',
        }}
      >
        {/* Animated Sacred Flame Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-6px',
            width: '18px',
            height: '24px',
            borderRadius: '50% 50% 35% 35%',
            background: 'radial-gradient(ellipse at 50% 60%, #FFFFFF 10%, #FFDF73 40%, #E86518 80%, transparent 100%)',
            filter: 'drop-shadow(0 0 10px #FF9E2C)',
            animation: 'flameFlicker 2s infinite ease-in-out',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        {/* Brass Lamp Image */}
        <img
          src="/assets/ornaments/wed-lamp.webp"
          alt="Auspicious Brass Diya"
          style={{
            width: '56px',
            height: 'auto',
            filter: 'drop-shadow(0 6px 14px rgba(185, 154, 98, 0.4))',
            display: 'block',
          }}
        />
      </div>
    </section>
  );
};
