import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const CoupleMonogram: React.FC = () => {
  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        padding: '24px 0',
      }}
      aria-label="The Union of Isha and Ashish"
    >
      {/* Royal Crest Monogram */}
      <img
        src="/assets/frames/crest-royal.webp"
        alt="Royal Heritage Crest"
        className="reveal delay-1"
        style={{
          width: 'clamp(68px, 14vw, 92px)',
          height: 'auto',
          margin: '0 auto 16px',
          opacity: 0.95,
          filter: 'drop-shadow(0 4px 12px rgba(179, 145, 85, 0.35))',
          display: 'block',
        }}
      />

      {/* Monumental Couple Names — Dominant Visual Focal Point */}
      <div className="reveal delay-2" style={{ padding: '0 8px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 9.2vw, 6.2rem)',
            lineHeight: 1.05,
            color: 'var(--color-forest-deep)',
            fontWeight: 700,
            letterSpacing: '0.01em',
            margin: '0',
            textShadow: '0 1px 2px rgba(179, 145, 85, 0.25)',
          }}
        >
          {WEDDING_DATA.bride.name}
        </h1>

        <span
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(3.2rem, 9.5vw, 6.4rem)',
            lineHeight: 0.8,
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
            fontSize: 'clamp(3rem, 9.2vw, 6.2rem)',
            lineHeight: 1.05,
            color: 'var(--color-forest-deep)',
            fontWeight: 700,
            letterSpacing: '0.01em',
            margin: '0',
            textShadow: '0 1px 2px rgba(179, 145, 85, 0.25)',
          }}
        >
          {WEDDING_DATA.groom.name}
        </h1>
      </div>

      <p
        className="reveal delay-3"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.15rem, 3.2vw, 1.55rem)',
          color: 'var(--color-ink-muted)',
          marginTop: '20px',
          fontStyle: 'italic',
          lineHeight: 1.4,
          padding: '0 12px',
        }}
      >
        As they unite their lives in sacred matrimony
      </p>

      {/* Gold Botanical Garland */}
      <div className="reveal delay-4" style={{ marginTop: '24px' }}>
        <img
          src="/assets/frames/garland-gold.webp"
          alt="Royal Botanical Garland"
          style={{
            width: '100%',
            maxWidth: '380px',
            height: '46px',
            objectFit: 'contain',
            margin: '0 auto',
            opacity: 0.92,
            display: 'block',
            filter: 'drop-shadow(0 2px 8px rgba(179, 145, 85, 0.28))',
          }}
        />
      </div>
    </section>
  );
};
