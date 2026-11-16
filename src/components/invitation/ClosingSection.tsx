import React from 'react';
import { weddingData } from '../../data/wedding';
import { Reveal } from '../motion/Reveal';
import { Divider } from '../ui/Divider';

export const ClosingSection: React.FC = () => {
  return (
    <section
      className="section-padding section-ivory text-center relative"
      style={{ paddingBottom: 'var(--space-6xl)' }}
      aria-label="Closing Blessing"
    >
      {/* Decorative Wreath Header */}
      <Reveal delay={0.1}>
        <div style={{ width: '90px', height: '90px', margin: '0 auto 20px', opacity: 0.8 }} aria-hidden="true">
          <svg viewBox="0 0 240 240" width="100%" height="100%" fill="none">
            <circle cx="120" cy="120" r="95" stroke="#B69A69" strokeWidth="0.8" strokeOpacity="0.4" />
            <path d="M120 22 C64 22, 22 64, 22 120 C22 176, 64 218, 120 218" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M120 22 C176 22, 218 64, 218 120 C218 176, 176 218, 120 218" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="120" cy="22" r="3" fill="#D9BDB3" />
            <circle cx="120" cy="218" r="3" fill="#D9BDB3" />
            <text x="120" y="132" fontFamily="'Allura', cursive, serif" fontSize="42" fill="#B69A69" textAnchor="middle">&amp;</text>
          </svg>
        </div>
      </Reveal>

      {/* Main Closing Line */}
      <Reveal delay={0.2}>
        <h2
          className="font-serif-playfair"
          style={{
            fontSize: 'clamp(1.15rem, 3.6vw, 1.45rem)',
            fontWeight: 600,
            color: 'var(--color-deep-sage)',
            lineHeight: 1.4,
            letterSpacing: '0.06em',
            maxWidth: '320px',
            margin: '0 auto 16px',
            textTransform: 'uppercase',
          }}
        >
          {weddingData.closing.mainLine}
        </h2>
      </Reveal>

      {/* Couple Names */}
      <Reveal delay={0.3}>
        <div
          className="font-serif-cormorant"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.4rem)',
            fontStyle: 'italic',
            color: 'var(--color-antique-gold)',
            lineHeight: 1.1,
            margin: '12px 0',
          }}
        >
          {weddingData.closing.names}
        </div>
      </Reveal>

      {/* Date */}
      <Reveal delay={0.35}>
        <div
          className="font-sans-dm"
          style={{
            fontSize: '0.86rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-ink-muted)',
            marginBottom: '16px',
          }}
        >
          {weddingData.closing.dateString}
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <Divider />
      </Reveal>

      {/* Closing Line */}
      <Reveal delay={0.45}>
        <p
          className="font-serif-cormorant"
          style={{
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: 'var(--color-soft-ink)',
            maxWidth: '280px',
            margin: '0 auto 12px',
          }}
        >
          {weddingData.closing.closingLine}
        </p>
      </Reveal>

      {/* Final Microcopy */}
      <Reveal delay={0.5}>
        <p
          className="font-script-allura"
          style={{
            fontSize: '1.45rem',
            color: 'var(--color-antique-gold)',
            marginTop: '8px',
          }}
        >
          {weddingData.closing.microcopy}
        </p>
      </Reveal>
    </section>
  );
};
