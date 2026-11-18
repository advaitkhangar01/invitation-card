import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const AuspiciousShloka: React.FC = () => {
  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        paddingTop: '4px',
        paddingBottom: '16px',
        width: '100%',
        boxSizing: 'border-box',
      }}
      aria-label="Auspicious Invocation"
    >
      {/* Traditional Sanskrit Shloka & Unclipped English Subtitle */}
      <div
        style={{
          marginBottom: '16px',
          padding: '0 16px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <p
          className="shloka-text"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 4.6vw, 2.4rem)',
            letterSpacing: '0.04em',
            color: 'var(--color-sacred-kumkum)',
            fontWeight: 700,
            lineHeight: 1.25,
            margin: '0 auto 6px',
            textShadow: '0 1px 2px rgba(136, 28, 34, 0.15)',
          }}
        >
          {WEDDING_DATA.shloka.sanskrit}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.72rem, 1.9vw, 0.875rem)',
            color: 'var(--color-ink-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 600,
            maxWidth: '420px',
            margin: '0 auto',
            lineHeight: 1.45,
            padding: '0 8px',
            boxSizing: 'border-box',
            wordBreak: 'normal',
            overflowWrap: 'break-word',
          }}
        >
          {WEDDING_DATA.shloka.english}
        </p>
      </div>

      {/* Ceremonial Brass Deepam / Diya Lamp (Self-Contained Vector Artwork) */}
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          margin: '0 auto',
        }}
      >
        {/* Living Sacred Flame & Aura Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-2px',
            width: '16px',
            height: '24px',
            borderRadius: '50% 50% 35% 35%',
            background: 'radial-gradient(ellipse at 50% 70%, #FFFFFF 0%, #FFF5CC 25%, #FFA726 65%, rgba(255, 112, 67, 0) 100%)',
            animation: 'flameOrganic 2.2s infinite ease-in-out',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Warm Golden Aura */}
        <div
          style={{
            position: 'absolute',
            top: '-8px',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 183, 77, 0.45) 0%, rgba(255, 152, 0, 0.15) 50%, transparent 75%)',
            animation: 'pulseGlow 3s infinite ease-in-out',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Authentic Handcrafted Royal Brass Diya SVG */}
        <svg
          viewBox="0 0 100 125"
          width="56"
          height="70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 6px 12px rgba(179, 145, 85, 0.35))',
            display: 'block',
            position: 'relative',
            zIndex: 2,
          }}
          aria-label="Ceremonial Brass Diya"
        >
          <defs>
            <linearGradient id="brassMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B8" />
              <stop offset="25%" stopColor="#D4A738" />
              <stop offset="50%" stopColor="#FDEAA8" />
              <stop offset="75%" stopColor="#8F6A1A" />
              <stop offset="100%" stopColor="#C99B2A" />
            </linearGradient>

            <linearGradient id="brassDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A87F25" />
              <stop offset="100%" stopColor="#5E430F" />
            </linearGradient>

            <linearGradient id="oilPool" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
          </defs>

          {/* Wick Spout */}
          <path d="M 48 24 Q 50 16 52 24 Z" fill="#451A03" />

          {/* Diya Bowl Top Lip */}
          <ellipse cx="50" cy="28" rx="28" ry="8" fill="url(#brassMetallic)" stroke="#7A5618" strokeWidth="1" />
          {/* Inner Oil Basin */}
          <ellipse cx="50" cy="27" rx="23" ry="5.5" fill="url(#oilPool)" />
          {/* Oil Surface Shimmer */}
          <ellipse cx="50" cy="26" rx="15" ry="3" fill="#FDE68A" opacity="0.6" />

          {/* Diya Bowl Body with Ornate Engraving */}
          <path
            d="M 22 28 C 22 42, 34 50, 44 52 L 44 60 L 38 64 L 38 68 L 62 68 L 62 64 L 56 60 L 56 52 C 66 50, 78 42, 78 28 Z"
            fill="url(#brassMetallic)"
            stroke="#7A5618"
            strokeWidth="0.8"
          />

          {/* Traditional Carved Fluting Accents */}
          <path d="M 32 34 Q 50 48 68 34" fill="none" stroke="url(#brassDark)" strokeWidth="1.2" />
          <path d="M 37 40 Q 50 50 63 40" fill="none" stroke="url(#brassDark)" strokeWidth="1" />

          {/* Pedestal Central Baluster Ring */}
          <rect x="42" y="58" width="16" height="4" rx="2" fill="#FFE8A3" stroke="#8F6A1A" strokeWidth="0.8" />

          {/* Pedestal Stem */}
          <path d="M 46 68 L 44 88 L 56 88 L 54 68 Z" fill="url(#brassMetallic)" stroke="#7A5618" strokeWidth="0.8" />
          {/* Mid-stem Ornate Bead */}
          <ellipse cx="50" cy="78" rx="7" ry="3.5" fill="#FFF2B8" stroke="#8F6A1A" strokeWidth="0.8" />

          {/* Multi-Tiered Ceremonial Base */}
          <path d="M 36 88 L 30 102 L 70 102 L 64 88 Z" fill="url(#brassMetallic)" stroke="#7A5618" strokeWidth="0.8" />
          {/* Base Stepped Foot */}
          <rect x="24" y="102" width="52" height="6" rx="2" fill="url(#brassMetallic)" stroke="#7A5618" strokeWidth="0.8" />
          <rect x="20" y="108" width="60" height="4" rx="1.5" fill="url(#brassDark)" />

          {/* Decorative Relief Dots on Base */}
          <circle cx="36" cy="98" r="1.5" fill="#FFE8A3" />
          <circle cx="43" cy="98" r="1.5" fill="#FFE8A3" />
          <circle cx="50" cy="98" r="1.5" fill="#FFE8A3" />
          <circle cx="57" cy="98" r="1.5" fill="#FFE8A3" />
          <circle cx="64" cy="98" r="1.5" fill="#FFE8A3" />
        </svg>
      </div>
    </section>
  );
};
