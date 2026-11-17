import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const CoupleMonogram: React.FC = () => {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '16px 0',
      }}
      aria-label="The Union of Isha and Ashish"
    >
      {/* Royal Crest Monogram */}
      <img
        src="/assets/frames/royal_filigree_crest.png"
        alt="Royal Heritage Crest"
        style={{
          width: '72px',
          height: 'auto',
          margin: '0 auto 12px',
          opacity: 0.9,
          filter: 'drop-shadow(0 4px 10px rgba(185, 154, 98, 0.25))',
        }}
      />

      {/* Monumental Couple Names */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.45rem',
          lineHeight: 1.15,
          color: 'var(--color-forest-deep)',
          fontWeight: 700,
          letterSpacing: '0.02em',
        }}
      >
        {WEDDING_DATA.bride.name}
      </h1>

      <span
        style={{
          fontFamily: 'var(--font-accent)',
          fontSize: '3rem',
          lineHeight: '0.85',
          color: 'var(--color-gold-antique)',
          display: 'block',
          margin: '6px 0',
        }}
      >
        &amp;
      </span>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.45rem',
          lineHeight: 1.15,
          color: 'var(--color-forest-deep)',
          fontWeight: 700,
          letterSpacing: '0.02em',
        }}
      >
        {WEDDING_DATA.groom.name}
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.2rem',
          color: 'var(--color-ink-muted)',
          marginTop: '16px',
          fontStyle: 'italic',
        }}
      >
        As they unite their lives in sacred matrimony
      </p>

      {/* Jasmine & Marigold Welcome Garland */}
      <img
        src="/assets/botanical/garland-jasmine-marigold.png"
        alt="Traditional Jasmine and Marigold Garland"
        style={{
          width: '100%',
          maxWidth: '420px',
          height: '38px',
          objectFit: 'contain',
          margin: '20px auto 0',
          opacity: 0.88,
        }}
      />
    </section>
  );
};
