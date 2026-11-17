import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const AuspiciousShloka: React.FC = () => {
  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        paddingTop: '6px',
        paddingBottom: '20px',
      }}
      aria-label="Auspicious Invocation"
    >
      {/* Traditional Sanskrit Shloka */}
      <div style={{ marginBottom: '18px', padding: '0 8px' }}>
        <p
          className="shloka-text"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.45rem, 4.5vw, 2.35rem)',
            letterSpacing: '0.04em',
            color: 'var(--color-sacred-kumkum)',
            fontWeight: 700,
            lineHeight: 1.25,
            margin: '0 auto 6px',
          }}
        >
          {WEDDING_DATA.shloka.sanskrit}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.75rem, 2.1vw, 0.9375rem)',
            color: 'var(--color-ink-muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
            maxWidth: '380px',
            margin: '0 auto',
            lineHeight: 1.5,
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
          margin: '2px auto 0',
        }}
      >
        {/* Subtle Warm Sacred Flame Aura */}
        <div
          style={{
            position: 'absolute',
            top: '2px',
            width: '14px',
            height: '20px',
            borderRadius: '50% 50% 35% 35%',
            background: 'radial-gradient(ellipse at 50% 65%, #FFF6D6 15%, #FFA726 65%, transparent 100%)',
            animation: 'flameOrganic 2.4s infinite ease-in-out',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        {/* Brass Lamp Image */}
        <img
          src="/assets/ornaments/wed-lamp.webp"
          alt="Auspicious Brass Diya"
          style={{
            width: 'clamp(52px, 12vw, 68px)',
            height: 'auto',
            filter: 'drop-shadow(0 6px 14px rgba(179, 145, 85, 0.35))',
            display: 'block',
          }}
        />
      </div>
    </section>
  );
};
