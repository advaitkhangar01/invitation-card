import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const AuspiciousShloka: React.FC = () => {
  return (
    <section
      style={{
        textAlign: 'center',
        paddingTop: '8px',
        paddingBottom: '20px',
      }}
      aria-label="Auspicious Invocation"
    >
      {/* Traditional Sanskrit Shloka */}
      <div style={{ marginBottom: '16px' }}>
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            letterSpacing: '0.04em',
            color: 'var(--color-sacred-kumkum)',
            fontWeight: 700,
            lineHeight: 1.4,
          }}
        >
          {WEDDING_DATA.shloka.sanskrit}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--color-ink-muted)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginTop: '4px',
          }}
        >
          {WEDDING_DATA.shloka.english}
        </p>
      </div>

      {/* Brass Ceremonial Diya Lamp */}
      <div
        style={{
          display: 'inline-block',
          position: 'relative',
        }}
      >
        <img
          src="/assets/ornaments/diya_oil_lamp_brass.png"
          alt="Auspicious Brass Diya"
          style={{
            width: '74px',
            height: 'auto',
            filter: 'drop-shadow(0 6px 14px rgba(185, 154, 98, 0.35))',
          }}
        />
      </div>
    </section>
  );
};
