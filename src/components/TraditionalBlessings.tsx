import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const TraditionalBlessings: React.FC = () => {
  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        padding: '24px 0 16px',
      }}
      aria-label="Traditional Blessings and Hospitality"
    >
      {/* Royal Gold Wax Seal */}
      <img
        src="/assets/ornaments/seal.png"
        alt="Royal Wax Seal"
        className="reveal delay-1"
        style={{
          width: 'clamp(64px, 14vw, 84px)',
          height: 'auto',
          margin: '0 auto 18px',
          filter: 'drop-shadow(0 6px 16px rgba(179, 145, 85, 0.4))',
          display: 'block',
        }}
      />

      <p
        className="reveal delay-2"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.25rem, 3.6vw, 1.75rem)',
          fontStyle: 'italic',
          color: 'var(--color-forest-deep)',
          lineHeight: 1.55,
          maxWidth: '480px',
          margin: '0 auto 24px',
          padding: '0 8px',
        }}
      >
        “{WEDDING_DATA.blessing.quote}”
      </p>

      <p
        className="reveal delay-3"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.8125rem, 2.2vw, 0.95rem)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--color-ink-muted)',
          fontWeight: 700,
        }}
      >
        Warmly Welcomed by
      </p>

      {/* Verified Hosts Signature — Expressive Monumental Calligraphy */}
      <div className="reveal delay-4">
        <p
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(3.2rem, 9.5vw, 6.2rem)',
            lineHeight: 0.95,
            color: 'var(--color-gold-antique)',
            marginTop: '8px',
          }}
        >
          {WEDDING_DATA.hosts}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.15rem, 3vw, 1.45rem)',
            color: 'var(--color-ink-charcoal)',
            marginTop: '8px',
            fontWeight: 600,
          }}
        >
          {WEDDING_DATA.blessing.signOff}
        </p>
      </div>
    </section>
  );
};
