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
      <div
        className="reveal delay-1"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '18px',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="72"
          height="72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 6px 16px rgba(179, 145, 85, 0.4))' }}
          aria-label="Royal Wax Seal"
        >
          <defs>
            <linearGradient id="blessSealGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B8" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#966F23" />
              <stop offset="100%" stopColor="#E2BE66" />
            </linearGradient>
            <linearGradient id="blessSealInner" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B38728" />
              <stop offset="100%" stopColor="#7A5618" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#blessSealGold)" />
          <path
            d="M 50 4 C 62 3, 74 12, 85 20 C 95 30, 97 44, 94 58 C 91 72, 80 84, 68 91 C 54 98, 38 95, 26 89 C 14 82, 4 69, 5 54 C 6 40, 14 26, 26 16 C 36 8, 42 4, 50 4 Z"
            fill="url(#blessSealGold)"
          />
          <circle cx="50" cy="50" r="34" fill="url(#blessSealInner)" stroke="#FFF2B8" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" stroke="#FFF2B8" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fill="#FFF4D0"
            fontFamily="var(--font-display)"
            fontSize="24"
            fontWeight="700"
            letterSpacing="1"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            I&amp;A
          </text>
        </svg>
      </div>

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
