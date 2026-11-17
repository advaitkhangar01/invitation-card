import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const TraditionalBlessings: React.FC = () => {
  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        padding: '20px 0 10px',
      }}
      aria-label="Traditional Blessings and Hospitality"
    >
      {/* Royal Gold Wax Seal */}
      <img
        src="/assets/ornaments/seal.png"
        alt="Royal Wax Seal"
        className="reveal delay-1"
        style={{
          width: '68px',
          height: 'auto',
          margin: '0 auto 16px',
          filter: 'drop-shadow(0 6px 14px rgba(185, 154, 98, 0.4))',
          display: 'block',
        }}
      />

      <p
        className="reveal delay-2"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          fontStyle: 'italic',
          color: 'var(--color-forest-deep)',
          lineHeight: 1.6,
          maxWidth: '440px',
          margin: '0 auto 20px',
        }}
      >
        “{WEDDING_DATA.blessing.quote}”
      </p>

      <p
        className="reveal delay-3"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-ink-muted)',
          fontWeight: 600,
        }}
      >
        Warmly Welcomed by
      </p>

      {/* Verified Hosts Signature */}
      <div className="reveal delay-4">
        <p
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '3rem',
            lineHeight: 1,
            color: 'var(--color-gold-antique)',
            marginTop: '6px',
          }}
        >
          {WEDDING_DATA.hosts}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.1rem',
            color: 'var(--color-ink-charcoal)',
            marginTop: '6px',
          }}
        >
          {WEDDING_DATA.blessing.signOff}
        </p>
      </div>
    </section>
  );
};
