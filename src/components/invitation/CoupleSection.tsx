import React from 'react';
import { weddingData } from '../../data/wedding';
import { Reveal } from '../motion/Reveal';
import { ParallaxLayer } from '../motion/ParallaxLayer';

export const CoupleSection: React.FC = () => {
  return (
    <section
      className="section-padding section-ivory text-center relative"
      aria-label="Couple Introduction"
    >
      {/* Decorative Botanical Branch Backdrop */}
      <ParallaxLayer speed={0.06} className="gold-divider-wrap" style={{ maxWidth: '180px', marginBottom: '24px' }}>
        <svg viewBox="0 0 240 60" width="100%" height="40" fill="none" aria-hidden="true">
          <path d="M10 32 C50 18, 90 42, 130 26 C170 12, 205 38, 230 28" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M38 27 C42 16, 52 18, 50 26 C45 30, 40 29, 38 27Z" fill="#879487" opacity="0.85" />
          <path d="M78 30 C82 18, 94 22, 90 30 C85 33, 80 32, 78 30Z" fill="#B69A69" opacity="0.75" />
          <path d="M122 25 C125 14, 137 15, 135 24 C130 28, 124 27, 122 25Z" fill="#4A6359" opacity="0.9" />
          <path d="M165 20 C170 10, 180 12, 178 20 C173 24, 168 23, 165 20Z" fill="#879487" opacity="0.85" />
          <circle cx="110" cy="38" r="2.5" fill="#B69A69" />
        </svg>
      </ParallaxLayer>

      <Reveal delay={0.1}>
        <span className="text-micro-label" style={{ display: 'block', marginBottom: '12px' }}>
          {weddingData.coupleSection.smallHeading}
        </span>
      </Reveal>

      {/* Decorative Floral Wreath Framing the Monogram */}
      <Reveal delay={0.2}>
        <div style={{ position: 'relative', width: '130px', height: '130px', margin: '0 auto 20px' }}>
          <svg viewBox="0 0 240 240" width="100%" height="100%" fill="none" aria-hidden="true">
            <circle cx="120" cy="120" r="95" stroke="#B69A69" strokeWidth="0.8" strokeOpacity="0.4" />
            <circle cx="120" cy="120" r="98" stroke="#B69A69" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.3" />
            <path d="M120 22 C64 22, 22 64, 22 120 C22 176, 64 218, 120 218" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M120 22 C176 22, 218 64, 218 120 C218 176, 176 218, 120 218" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M72 42 C60 38, 55 48, 62 54 C70 54, 72 46, 72 42Z" fill="#4A6359" opacity="0.9" />
            <path d="M168 42 C180 38, 185 48, 178 54 C170 54, 168 46, 168 42Z" fill="#4A6359" opacity="0.9" />
            <path d="M44 72 C32 72, 34 86, 42 88 C48 84, 48 76, 44 72Z" fill="#B69A69" opacity="0.8" />
            <path d="M196 72 C208 72, 206 86, 198 88 C192 84, 192 76, 196 72Z" fill="#B69A69" opacity="0.8" />
            <circle cx="120" cy="22" r="3" fill="#D9BDB3" />
            <circle cx="120" cy="218" r="3" fill="#D9BDB3" />
          </svg>
          {/* Centered Monogram */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '74px',
              height: '74px',
            }}
          >
            <svg viewBox="0 0 160 160" width="100%" height="100%" fill="none" aria-hidden="true">
              <text x="56" y="96" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="56" fontStyle="italic" fill="#263D35" textAnchor="middle">I</text>
              <text x="80" y="86" fontFamily="'Allura', cursive, serif" fontSize="38" fill="#B69A69" textAnchor="middle">&amp;</text>
              <text x="105" y="96" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="56" fill="#263D35" textAnchor="middle">A</text>
            </svg>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <h2
          className="font-serif-cormorant text-couple-names"
          style={{
            fontSize: 'clamp(2.4rem, 7.5vw, 3.2rem)',
            marginBottom: '16px',
            color: 'var(--color-deep-sage)',
          }}
        >
          {weddingData.coupleSection.mainTitle}
        </h2>
      </Reveal>

      <Reveal delay={0.4}>
        <p
          className="font-serif-cormorant"
          style={{
            fontSize: 'clamp(1.1rem, 3.4vw, 1.25rem)',
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: 'var(--color-soft-ink)',
            maxWidth: '320px',
            margin: '0 auto',
          }}
        >
          {weddingData.coupleSection.supportingCopy}
        </p>
      </Reveal>
    </section>
  );
};
