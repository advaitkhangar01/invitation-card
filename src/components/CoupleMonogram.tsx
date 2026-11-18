import React from 'react';

export const CoupleMonogram: React.FC = () => {
  return (
    <section
      className="scene-block reveal couple-monogram-section"
      aria-label="The Union of Isha and Ashish"
      style={{
        textAlign: 'center',
        padding: '24px 0 16px',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Royal Botanical Heritage Crest Monogram */}
      <div
        className="reveal delay-1"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '16px',
        }}
      >
        <svg
          viewBox="0 0 100 85"
          width="76"
          height="65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 3px 6px rgba(140, 111, 50, 0.3))',
            display: 'block',
          }}
          aria-label="Royal Heritage Monogram Crest"
        >
          <defs>
            <linearGradient id="crestGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF8DF" />
              <stop offset="30%" stopColor="#E5C368" />
              <stop offset="65%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#8C6F32" />
            </linearGradient>
          </defs>

          {/* Royal Finial Kalash */}
          <path d="M 50 6 L 53 14 L 47 14 Z" fill="url(#crestGoldGrad)" />
          <circle cx="50" cy="18" r="3.2" fill="url(#crestGoldGrad)" />

          {/* Symmetrical Kasavu / Royal Floral Arch Wings */}
          <path
            d="M 50 24 C 62 14, 82 22, 82 42 C 82 58, 64 68, 50 78 C 36 68, 18 58, 18 42 C 18 22, 38 14, 50 24 Z"
            stroke="url(#crestGoldGrad)"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M 50 30 C 58 22, 74 28, 74 44 C 74 56, 60 64, 50 72 C 40 64, 26 56, 26 44 C 26 28, 42 22, 50 30 Z"
            stroke="url(#crestGoldGrad)"
            strokeWidth="0.8"
            strokeDasharray="2.5 1.5"
            fill="none"
            opacity="0.85"
          />

          {/* Inner Monogram I & A */}
          <text
            x="50"
            y="52"
            textAnchor="middle"
            fill="url(#crestGoldGrad)"
            fontFamily="var(--font-display)"
            fontSize="18"
            fontWeight="700"
            letterSpacing="1"
          >
            I &amp; A
          </text>

          {/* Base Sacred Lotus Accent */}
          <circle cx="50" cy="80" r="2.2" fill="url(#crestGoldGrad)" />
          <circle cx="43" cy="78" r="1.3" fill="url(#crestGoldGrad)" />
          <circle cx="57" cy="78" r="1.3" fill="url(#crestGoldGrad)" />
        </svg>
      </div>

      {/* Monumental Couple Names — Refined Editorial Hierarchy */}
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
              fontSize: 'clamp(2.6rem, 8.5vw, 4.8rem)',
              lineHeight: 1.05,
              color: 'var(--color-forest-deep)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textShadow: '0 1px 2px rgba(197, 160, 89, 0.2)',
              display: 'block',
              maxWidth: '100%',
            }}
          >
            Isha
          </span>
          <span
            className="couple-last-name"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.15rem, 3.8vw, 1.95rem)',
              lineHeight: 1.25,
              color: 'var(--color-ink-primary)',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              display: 'block',
              maxWidth: '100%',
              marginTop: '4px',
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
            margin: '6px 0',
          }}
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(2.4rem, 7.5vw, 4.4rem)',
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
              fontSize: 'clamp(2.6rem, 8.5vw, 4.8rem)',
              lineHeight: 1.05,
              color: 'var(--color-forest-deep)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textShadow: '0 1px 2px rgba(197, 160, 89, 0.2)',
              display: 'block',
              maxWidth: '100%',
            }}
          >
            Ashish
          </span>
          <span
            className="couple-last-name"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.15rem, 3.8vw, 1.95rem)',
              lineHeight: 1.25,
              color: 'var(--color-ink-primary)',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              display: 'block',
              maxWidth: '100%',
              marginTop: '4px',
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
          fontSize: 'clamp(1.1rem, 3vw, 1.45rem)',
          color: 'var(--color-ink-muted)',
          marginTop: '18px',
          fontStyle: 'italic',
          lineHeight: 1.45,
          padding: '0 14px',
        }}
      >
        As they unite their lives in sacred matrimony
      </p>

      {/* Refined Gold Botanical Garland Rule */}
      <div className="reveal delay-4" style={{ marginTop: '16px' }} aria-hidden="true">
        <svg
          viewBox="0 0 320 28"
          width="100%"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            maxWidth: '320px',
            margin: '0 auto',
            display: 'block',
            filter: 'drop-shadow(0 1.5px 3px rgba(140, 111, 50, 0.25))',
          }}
        >
          <defs>
            <linearGradient id="garlandRuleGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF8DF" />
              <stop offset="50%" stopColor="#E5C368" />
              <stop offset="100%" stopColor="#8C6F32" />
            </linearGradient>
          </defs>
          <path d="M 30 14 L 140 14" stroke="url(#garlandRuleGold)" strokeWidth="0.9" strokeLinecap="round" />
          <path d="M 180 14 L 290 14" stroke="url(#garlandRuleGold)" strokeWidth="0.9" strokeLinecap="round" />
          {/* Central Sacred Floret */}
          <circle cx="160" cy="14" r="3.2" fill="url(#garlandRuleGold)" />
          <circle cx="151" cy="14" r="1.8" fill="url(#garlandRuleGold)" />
          <circle cx="169" cy="14" r="1.8" fill="url(#garlandRuleGold)" />
          <path d="M 160 8 L 163 12 L 157 12 Z" fill="url(#garlandRuleGold)" />
          <path d="M 160 20 L 163 16 L 157 16 Z" fill="url(#garlandRuleGold)" />
        </svg>
      </div>
    </section>
  );
};
