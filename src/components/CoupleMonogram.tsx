import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const CoupleMonogram: React.FC = () => {
  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        padding: '16px 0',
      }}
      aria-label="The Union of Isha and Ashish"
    >
      {/* Royal Crest Monogram */}
      <img
        src="/assets/frames/crest-royal.webp"
        alt="Royal Heritage Crest"
        className="reveal delay-1"
        style={{
          width: '78px',
          height: 'auto',
          margin: '0 auto 12px',
          opacity: 0.95,
          filter: 'drop-shadow(0 4px 12px rgba(185, 154, 98, 0.3))',
          display: 'block',
        }}
      />

      {/* Monumental Couple Names */}
      <div className="reveal delay-2">
        <h1
          className="couple-name-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem',
            lineHeight: 1.15,
            color: 'var(--color-forest-deep)',
            fontWeight: 700,
            letterSpacing: '0.02em',
          }}
        >
          {WEDDING_DATA.bride.name}
        </h1>

        <span
          className="couple-ampersand-text"
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '3.2rem',
            lineHeight: '0.85',
            color: 'var(--color-gold-antique)',
            display: 'block',
            margin: '6px 0',
          }}
        >
          &amp;
        </span>

        <h1
          className="couple-name-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem',
            lineHeight: 1.15,
            color: 'var(--color-forest-deep)',
            fontWeight: 700,
            letterSpacing: '0.02em',
          }}
        >
          {WEDDING_DATA.groom.name}
        </h1>
      </div>

      <p
        className="reveal delay-3"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          color: 'var(--color-ink-muted)',
          marginTop: '16px',
          fontStyle: 'italic',
        }}
      >
        As they unite their lives in sacred matrimony
      </p>

      {/* Gold Botanical Garland */}
      <div className="reveal delay-4" style={{ marginTop: '20px' }}>
        <img
          src="/assets/frames/garland-gold.webp"
          alt="Traditional Royal Garland"
          style={{
            width: '100%',
            maxWidth: '360px',
            height: '42px',
            objectFit: 'contain',
            margin: '0 auto',
            opacity: 0.92,
            display: 'block',
            filter: 'drop-shadow(0 2px 6px rgba(185, 154, 98, 0.25))',
          }}
        />
      </div>
    </section>
  );
};
