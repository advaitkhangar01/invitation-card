import React from 'react';

export const CoupleMonogram: React.FC = () => {
  return (
    <section
      className="scene-block reveal couple-monogram-section"
      aria-label="The Union of Isha and Ashish"
      style={{
        textAlign: 'center',
        padding: '24px 0',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Royal Crest Monogram with Hot-Stamping Metallic Vector */}
      <div
        className="reveal delay-1"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '14px',
        }}
      >
        <svg
          viewBox="0 0 100 80"
          width="74"
          height="60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 3px 8px rgba(179, 145, 85, 0.4))',
            display: 'block',
          }}
          aria-label="Royal Heritage Crest"
        >
          <defs>
            <linearGradient id="crestGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B8" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#966F23" />
              <stop offset="100%" stopColor="#E2BE66" />
            </linearGradient>
          </defs>
          {/* Royal Crown / Crest Finial */}
          <path
            d="M 50 8 L 56 22 L 72 24 L 60 36 L 64 52 L 50 44 L 36 52 L 40 36 L 28 24 L 44 22 Z"
            fill="url(#crestGoldGrad)"
          />
          {/* Symmetrical Kasavu / Filigree Swirls */}
          <path
            d="M 18 46 C 30 36, 42 54, 50 64 C 58 54, 70 36, 82 46"
            stroke="url(#crestGoldGrad)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 26 56 C 36 50, 44 60, 50 68 C 56 60, 64 50, 74 56"
            stroke="url(#crestGoldGrad)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="50" cy="30" r="3.5" fill="#881C22" />
          <circle cx="50" cy="72" r="2.5" fill="url(#crestGoldGrad)" />
          <circle cx="16" cy="46" r="2" fill="url(#crestGoldGrad)" />
          <circle cx="84" cy="46" r="2" fill="url(#crestGoldGrad)" />
        </svg>
      </div>

      {/* Monumental Couple Names — Responsive Editorial Layout with Zero Clipping */}
      <div
        className="reveal delay-2"
        style={{
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          padding: '0 8px',
        }}
      >
        {/* Bride's Name */}
        <h1
          className="couple-person-heading"
          style={{
            margin: '0',
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          <span
            className="couple-first-name"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 8.8vw, 5.4rem)',
              lineHeight: 1.05,
              color: 'var(--color-forest-deep)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textShadow: '0 1px 2px rgba(179, 145, 85, 0.25)',
              display: 'block',
              maxWidth: '100%',
            }}
          >
            Isha
          </span>
          <span
            className="couple-last-name"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 5.2vw, 2.8rem)',
              lineHeight: 1.2,
              color: 'var(--color-ink-espresso)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'block',
              maxWidth: '100%',
              marginTop: '2px',
            }}
          >
            Bawankule
          </span>
        </h1>

        {/* Ampersand Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '4px 0',
          }}
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(2.8rem, 8.5vw, 5.8rem)',
              lineHeight: 0.85,
              color: 'var(--color-gold-antique)',
              display: 'inline-block',
            }}
          >
            &amp;
          </span>
        </div>

        {/* Groom's Name */}
        <h1
          className="couple-person-heading"
          style={{
            margin: '0',
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          <span
            className="couple-first-name"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 8.8vw, 5.4rem)',
              lineHeight: 1.05,
              color: 'var(--color-forest-deep)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textShadow: '0 1px 2px rgba(179, 145, 85, 0.25)',
              display: 'block',
              maxWidth: '100%',
            }}
          >
            Ashish
          </span>
          <span
            className="couple-last-name"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 5.2vw, 2.8rem)',
              lineHeight: 1.2,
              color: 'var(--color-ink-espresso)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'block',
              maxWidth: '100%',
              marginTop: '2px',
            }}
          >
            Deshmukh
          </span>
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
          lineHeight: 1.45,
          padding: '0 14px',
        }}
      >
        As they unite their lives in sacred matrimony
      </p>

      {/* Gold Botanical Garland (Pure Vector SVG for 100% Reliability) */}
      <div className="reveal delay-4" style={{ marginTop: '18px' }}>
        <svg
          viewBox="0 0 320 36"
          width="100%"
          height="32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            maxWidth: '360px',
            margin: '0 auto',
            display: 'block',
            filter: 'drop-shadow(0 2px 4px rgba(179, 145, 85, 0.3))',
          }}
        >
          <path
            d="M 20 18 Q 80 8 160 18 Q 240 28 300 18"
            stroke="url(#garlandGold)"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Leaves along garland */}
          <path d="M 60 14 C 65 8, 75 10, 72 16 C 68 15, 63 15, 60 14 Z" fill="url(#garlandGold)" />
          <path d="M 100 16 C 105 10, 115 12, 112 18 C 108 17, 103 17, 100 16 Z" fill="url(#garlandGold)" />
          <path d="M 140 17 C 145 11, 155 13, 152 19 C 148 18, 143 18, 140 17 Z" fill="url(#garlandGold)" />
          <path d="M 180 19 C 185 25, 175 27, 172 21 C 176 22, 181 22, 180 19 Z" fill="url(#garlandGold)" />
          <path d="M 220 20 C 225 26, 215 28, 212 22 C 216 23, 221 23, 220 20 Z" fill="url(#garlandGold)" />
          <path d="M 260 18 C 265 24, 255 26, 252 20 C 256 21, 261 21, 260 18 Z" fill="url(#garlandGold)" />
          {/* Central Floret */}
          <circle cx="160" cy="18" r="3.5" fill="url(#garlandGold)" />
          <circle cx="152" cy="18" r="2" fill="url(#garlandGold)" />
          <circle cx="168" cy="18" r="2" fill="url(#garlandGold)" />
          <defs>
            <linearGradient id="garlandGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B8" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8F6A1A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
