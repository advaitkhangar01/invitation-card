import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const AuspiciousShloka: React.FC = () => {
  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        paddingTop: '4px',
        paddingBottom: '10px',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
      aria-label="Auspicious Invocation and Ceremonial Deepam"
    >
      {/* 1. Auspicious Sanskrit Invocation */}
      <div
        style={{
          marginBottom: '10px',
          padding: '0 8px',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}
      >
        <h2
          className="shloka-title"
          style={{
            fontSize: 'clamp(1.4rem, 4.4vw, 2.25rem)',
            lineHeight: 1.25,
            margin: '0 auto 6px',
            maxWidth: '100%',
            overflowWrap: 'break-word',
          }}
        >
          {WEDDING_DATA.shloka.sanskrit}
        </h2>
      </div>

      {/* 2. Authentic Ceremonial Brass Deepam / Diya (Handcrafted Vector Stationery Emblem) */}
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          margin: '0 auto 12px',
        }}
        aria-hidden="true"
      >
        {/* Living Incandescent Sacred Flame */}
        <div
          style={{
            position: 'absolute',
            top: '-2px',
            width: '13px',
            height: '20px',
            borderRadius: '50% 50% 35% 35%',
            background: 'radial-gradient(ellipse at 50% 75%, #FFFFFF 0%, #FFF8DF 28%, #F59E0B 70%, rgba(217, 119, 6, 0) 100%)',
            animation: 'flameLiving 2.6s infinite ease-in-out',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        {/* Restrained Warm Ambient Candlelight Aura */}
        <div
          style={{
            position: 'absolute',
            top: '4px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.32) 0%, rgba(217, 119, 6, 0.12) 50%, transparent 75%)',
            animation: 'diyaAuraRestrained 3.4s infinite ease-in-out',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Handcrafted Royal Antique Brass Diya Artwork */}
        <svg
          viewBox="0 0 80 96"
          width="44"
          height="54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 3px 6px rgba(140, 111, 50, 0.28))',
            display: 'block',
            position: 'relative',
            zIndex: 2,
          }}
          aria-label="Ceremonial Brass Diya"
        >
          <defs>
            <linearGradient id="brassMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF8DF" />
              <stop offset="25%" stopColor="#E5C368" />
              <stop offset="55%" stopColor="#C5A059" />
              <stop offset="85%" stopColor="#8C6F32" />
              <stop offset="100%" stopColor="#B38E3F" />
            </linearGradient>

            <linearGradient id="brassDarkShade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8C6F32" />
              <stop offset="100%" stopColor="#4A3B18" />
            </linearGradient>

            <linearGradient id="sacredOilPool" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>

          {/* Diya Wick Tip */}
          <path d="M 39 17 Q 40 10 41 17 Z" fill="#291807" />

          {/* Diya Upper Basin Rim */}
          <ellipse cx="40" cy="20" rx="22" ry="6.5" fill="url(#brassMetallic)" stroke="#6B5421" strokeWidth="0.8" />
          {/* Inner Sacred Oil Reservoir */}
          <ellipse cx="40" cy="19.5" rx="18" ry="4.5" fill="url(#sacredOilPool)" />
          {/* Oil Surface Specular Golden Highlight */}
          <ellipse cx="40" cy="19" rx="11" ry="2.2" fill="#FEF3C7" opacity="0.65" />

          {/* Fluted Cast Brass Bowl Body */}
          <path
            d="M 18 20 C 18 31, 28 38, 35 40 L 35 48 L 31 52 L 31 55 L 49 55 L 49 52 L 45 48 L 45 40 C 52 38, 62 31, 62 20 Z"
            fill="url(#brassMetallic)"
            stroke="#6B5421"
            strokeWidth="0.8"
          />

          {/* Traditional Engraved Band on Basin Body */}
          <path d="M 24 28 C 30 33, 50 33, 56 28" stroke="#6B5421" strokeWidth="1" fill="none" opacity="0.8" />
          <path d="M 28 33 C 34 37, 46 37, 52 33" stroke="#FFF8DF" strokeWidth="0.75" fill="none" opacity="0.7" />

          {/* Traditional Stepped Pedestal Base */}
          <rect x="33" y="55" width="14" height="6" fill="url(#brassDarkShade)" stroke="#6B5421" strokeWidth="0.6" />
          <ellipse cx="40" cy="62" rx="14" ry="3.5" fill="url(#brassMetallic)" stroke="#6B5421" strokeWidth="0.7" />
          <ellipse cx="40" cy="67" rx="19" ry="4.5" fill="url(#brassMetallic)" stroke="#52401C" strokeWidth="0.8" />
          <path d="M 21 67 C 21 73, 26 77, 40 77 C 54 77, 59 73, 59 67 Z" fill="url(#brassDarkShade)" stroke="#52401C" strokeWidth="0.8" />
          <ellipse cx="40" cy="77" rx="22" ry="5" fill="url(#brassMetallic)" stroke="#6B5421" strokeWidth="0.8" />

          {/* Base Rim Highlight */}
          <ellipse cx="40" cy="76" rx="18" ry="3.2" fill="none" stroke="#FFF8DF" strokeWidth="0.6" opacity="0.75" />
        </svg>
      </div>

      {/* 3. English Blessing Subtitle (With Clean Multi-Line Responsive Balance) */}
      <div
        style={{
          padding: '0 8px',
          maxWidth: '420px',
          margin: '0 auto',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.72rem, 1.8vw, 0.82rem)',
            color: 'var(--color-ink-muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
            lineHeight: 1.5,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          With the Divine Grace &amp; Blessings
          <br />
          of the Almighty
        </p>
      </div>
    </section>
  );
};
