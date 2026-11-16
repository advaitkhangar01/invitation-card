import React from 'react';
import { weddingData } from '../../data/wedding';
import { OrnamentalFrame } from '../ui/OrnamentalFrame';
import { Divider } from '../ui/Divider';
import { Reveal } from '../motion/Reveal';

export const InvitationCard: React.FC = () => {
  return (
    <section className="section-padding flex-col-center" aria-label="Wedding Invitation Card">
      <Reveal delay={0.1} yOffset={28}>
        <OrnamentalFrame>
          {/* Small Top Monogram */}
          <div style={{ width: '48px', height: '48px', margin: '0 auto 16px' }} aria-hidden="true">
            <svg viewBox="0 0 160 160" width="100%" height="100%" fill="none">
              <circle cx="80" cy="80" r="74" stroke="#B69A69" strokeWidth="1" strokeOpacity="0.75" />
              <circle cx="80" cy="80" r="70" stroke="#B69A69" strokeWidth="0.6" strokeDasharray="2 2" strokeOpacity="0.5" />
              <text x="56" y="94" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="50" fontStyle="italic" fill="#B69A69" textAnchor="middle">I</text>
              <text x="80" y="86" fontFamily="'Allura', cursive, serif" fontSize="34" fill="#D4BE93" textAnchor="middle">&amp;</text>
              <text x="105" y="94" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="50" fill="#B69A69" textAnchor="middle">A</text>
            </svg>
          </div>

          {/* Top Label */}
          <span className="text-micro-label" style={{ display: 'block', marginBottom: '8px' }}>
            {weddingData.invitationTopLabel}
          </span>

          {/* Opening Line */}
          <h2
            className="font-serif-cormorant"
            style={{
              fontSize: 'clamp(1.2rem, 3.8vw, 1.45rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--color-ink-muted)',
              marginBottom: '16px',
            }}
          >
            {weddingData.openingLine}
          </h2>

          {/* Couple Names (Dominant Visual Element) */}
          <div style={{ margin: '8px 0 12px' }}>
            <h1
              className="text-couple-names"
              style={{
                letterSpacing: '0.03em',
              }}
            >
              {weddingData.bride.preferredName || 'Isha'}
            </h1>
            <span
              className="font-script-allura"
              style={{
                display: 'block',
                fontSize: '2rem',
                margin: '-4px 0',
                color: 'var(--color-antique-gold)',
              }}
            >
              &amp;
            </span>
            <h1
              className="text-couple-names"
              style={{
                letterSpacing: '0.03em',
              }}
            >
              {weddingData.groom.preferredName || 'Ashish'}
            </h1>
          </div>

          {/* Supporting Line */}
          <p
            className="font-serif-cormorant"
            style={{
              fontSize: '1.08rem',
              fontStyle: 'italic',
              color: 'var(--color-ink-muted)',
              maxWidth: '260px',
              margin: '0 auto 16px',
            }}
          >
            {weddingData.invitationSupportingLine}
          </p>

          <Divider />

          {/* Date & Time Grid */}
          <div style={{ marginTop: '14px', marginBottom: '14px' }}>
            <div
              className="font-sans-dm"
              style={{
                fontSize: '0.98rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: 'var(--color-deep-sage)',
                textTransform: 'uppercase',
              }}
            >
              17 DECEMBER 2026
            </div>
            <div
              className="font-sans-dm"
              style={{
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                color: 'var(--color-antique-gold)',
                marginTop: '4px',
                textTransform: 'uppercase',
              }}
            >
              THURSDAY · 5:40 PM
            </div>
          </div>

          {/* Venue & Location */}
          <div style={{ marginTop: '12px' }}>
            <div
              className="font-serif-playfair"
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--color-deep-sage)',
                textTransform: 'uppercase',
              }}
            >
              {weddingData.venue.name}
            </div>
            <div
              className="font-sans-dm"
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                color: 'var(--color-ink-muted)',
                marginTop: '4px',
                textTransform: 'uppercase',
              }}
            >
              GUMTHALA, NAGPUR
            </div>
          </div>
        </OrnamentalFrame>
      </Reveal>
    </section>
  );
};
