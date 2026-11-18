import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const TraditionalBlessings: React.FC = () => {
  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        padding: '20px 0 12px',
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
          width="70"
          height="70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 4px 12px rgba(140, 111, 50, 0.35))' }}
          aria-label="Royal Wax Seal"
        >
          <defs>
            <linearGradient id="blessSealGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF8DF" />
              <stop offset="35%" stopColor="#E5C368" />
              <stop offset="70%" stopColor="#8C6F32" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
            <linearGradient id="blessSealInner" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#7D5F26" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="url(#blessSealGold)" />
          <path
            d="M 50 4 C 62 3, 74 12, 85 20 C 95 30, 97 44, 94 58 C 91 72, 80 84, 68 91 C 54 98, 38 95, 26 89 C 14 82, 4 69, 5 54 C 6 40, 14 26, 26 16 C 36 8, 42 4, 50 4 Z"
            fill="url(#blessSealGold)"
          />
          <circle cx="50" cy="50" r="34" fill="url(#blessSealInner)" stroke="#FFF8DF" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" stroke="#FFF8DF" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fill="#FFFBF0"
            fontFamily="var(--font-display)"
            fontSize="24"
            fontWeight="700"
            letterSpacing="1"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.45)' }}
          >
            I&amp;A
          </text>
        </svg>
      </div>

      <p
        className="reveal delay-2"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.2rem, 3.4vw, 1.65rem)',
          fontStyle: 'italic',
          color: 'var(--color-forest-deep)',
          lineHeight: 1.5,
          maxWidth: '460px',
          margin: '0 auto 20px',
          padding: '0 8px',
        }}
      >
        “{WEDDING_DATA.blessing.quote}”
      </p>

      <p
        className="reveal delay-3"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.78rem, 2vw, 0.9rem)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--color-ink-muted)',
          fontWeight: 700,
        }}
      >
        Warmly Welcomed by
      </p>

      {/* Verified Hosts Signature */}
      <div className="reveal delay-4">
        <p
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(3rem, 9vw, 5.8rem)',
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
            fontSize: 'clamp(1.1rem, 2.8vw, 1.35rem)',
            color: 'var(--color-ink-secondary)',
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
