import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const TraditionalBlessings: React.FC = () => {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '20px 0 10px',
      }}
      aria-label="Traditional Blessings and Hospitality"
    >
      {/* Royal Gold Wax Seal */}
      <img
        src="/assets/ornaments/wax_seal_gold.png"
        alt="Royal Wax Seal"
        style={{
          width: '64px',
          height: 'auto',
          margin: '0 auto 16px',
          filter: 'drop-shadow(0 6px 12px rgba(185, 154, 98, 0.35))',
        }}
      />

      <p
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
      <p
        style={{
          fontFamily: 'var(--font-accent)',
          fontSize: '2.75rem',
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
          fontSize: '1.05rem',
          color: 'var(--color-ink-charcoal)',
          marginTop: '6px',
        }}
      >
        {WEDDING_DATA.blessing.signOff}
      </p>
    </section>
  );
};
