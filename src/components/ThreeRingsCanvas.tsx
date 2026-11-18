import React, { useState } from 'react';

export const ThreeRingsCanvas: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="scene-block reveal"
      style={{
        position: 'relative',
        width: '100%',
        margin: '8px auto 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Hot-Stamped Gold Foil Wedding Bands and Solitaire Diamond Emblem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Warm Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(200px, 45vw, 260px)',
          height: 'clamp(200px, 45vw, 260px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 182, 126, 0.22) 0%, rgba(179, 145, 85, 0.08) 50%, transparent 72%)',
          pointerEvents: 'none',
          animation: 'pulseGlow 5s infinite ease-in-out',
        }}
      />

      {/* Handcrafted Hot-Stamped Gold Foil Interlocking Rings & Solitaire Diamond Artwork */}
      <div
        style={{
          position: 'relative',
          width: 'clamp(220px, 48vw, 290px)',
          height: 'clamp(170px, 36vw, 210px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'drop-shadow(0 10px 22px rgba(138, 108, 52, 0.22))',
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: isHovered ? 'scale(1.03) translateY(-2px)' : 'scale(1)',
        }}
      >
        <svg
          viewBox="0 0 320 230"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Rich 24K Hot-Stamping Metallic Gold Gradients */}
            <linearGradient id="goldSheenPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9E8B2" />
              <stop offset="25%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFF3C4" />
              <stop offset="75%" stopColor="#9E7628" />
              <stop offset="100%" stopColor="#DFBC5E" />
            </linearGradient>

            <linearGradient id="goldSheenSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF4D0" />
              <stop offset="30%" stopColor="#C99F3B" />
              <stop offset="60%" stopColor="#ECCB77" />
              <stop offset="85%" stopColor="#8A641B" />
              <stop offset="100%" stopColor="#F2D789" />
            </linearGradient>

            {/* Solitaire Diamond Prismatic Facet Gradients */}
            <linearGradient id="diamondTable" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#EAF6FF" />
              <stop offset="100%" stopColor="#D2E8F8" />
            </linearGradient>

            <linearGradient id="diamondFacetLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E3F0FC" />
              <stop offset="50%" stopColor="#C2DFF7" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>

            <linearGradient id="diamondFacetRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#B3D7F5" />
              <stop offset="100%" stopColor="#9AC5EB" />
            </linearGradient>

            <linearGradient id="diamondPavilion" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DDF0FF" />
              <stop offset="60%" stopColor="#B0D5F7" />
              <stop offset="100%" stopColor="#7DAFE0" />
            </linearGradient>

            {/* Paper Deboss Filter Simulation */}
            <filter id="letterpressIndent" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#3A280D" floodOpacity="0.45" />
              <feDropShadow dx="0" dy="-1" stdDeviation="0.8" floodColor="#FFF9E6" floodOpacity="0.85" />
            </filter>

            <filter id="diamondSparkleGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Botanical Laurel Garland (Delicate Royal Wreath) */}
          <g opacity="0.65" stroke="url(#goldSheenSecondary)" strokeWidth="1.2" strokeLinecap="round">
            {/* Left Laurel Sprig */}
            <path d="M 92 145 C 72 135, 58 110, 62 82 C 65 62, 78 44, 98 34" fill="none" />
            <path d="M 66 116 C 54 112, 50 102, 58 98 C 65 94, 68 106, 66 116 Z" fill="url(#goldSheenPrimary)" />
            <path d="M 61 90 C 49 84, 46 74, 55 71 C 62 68, 64 80, 61 90 Z" fill="url(#goldSheenPrimary)" />
            <path d="M 68 64 C 58 56, 58 46, 67 44 C 74 43, 74 54, 68 64 Z" fill="url(#goldSheenPrimary)" />
            <path d="M 84 43 C 76 34, 79 24, 88 24 C 95 24, 92 34, 84 43 Z" fill="url(#goldSheenPrimary)" />

            {/* Right Laurel Sprig */}
            <path d="M 228 145 C 248 135, 262 110, 258 82 C 255 62, 242 44, 222 34" fill="none" />
            <path d="M 254 116 C 266 112, 270 102, 262 98 C 255 94, 252 106, 254 116 Z" fill="url(#goldSheenSecondary)" />
            <path d="M 259 90 C 271 84, 274 74, 265 71 C 258 68, 256 80, 259 90 Z" fill="url(#goldSheenSecondary)" />
            <path d="M 252 64 C 262 56, 262 46, 253 44 C 246 43, 246 54, 252 64 Z" fill="url(#goldSheenSecondary)" />
            <path d="M 236 43 C 244 34, 241 24, 232 24 C 225 24, 228 34, 236 43 Z" fill="url(#goldSheenSecondary)" />
          </g>

          {/* Interlocking Wedding Ring 1: Groom's Polished Gold Band (Left, Angled) */}
          <g filter="url(#letterpressIndent)">
            {/* Shadow under intersection */}
            <ellipse cx="128" cy="118" rx="46" ry="62" stroke="#523910" strokeWidth="15" opacity="0.3" transform="rotate(-18 128 118)" />
            {/* Outer Band */}
            <ellipse
              cx="128"
              cy="118"
              rx="46"
              ry="62"
              fill="none"
              stroke="url(#goldSheenPrimary)"
              strokeWidth="12"
              transform="rotate(-18 128 118)"
            />
            {/* Inner Chamfer Bevel Highlight */}
            <ellipse
              cx="128"
              cy="118"
              rx="40.5"
              ry="56.5"
              fill="none"
              stroke="#FFF9E6"
              strokeWidth="1.2"
              opacity="0.85"
              transform="rotate(-18 128 118)"
            />
            {/* Outer Chamfer Rim */}
            <ellipse
              cx="128"
              cy="118"
              rx="51.5"
              ry="67.5"
              fill="none"
              stroke="#7A5618"
              strokeWidth="1"
              opacity="0.75"
              transform="rotate(-18 128 118)"
            />
          </g>

          {/* Interlocking Wedding Ring 2: Bride's Royal Solitaire Diamond Ring (Right, Overlapping) */}
          <g filter="url(#letterpressIndent)">
            {/* Outer Band */}
            <ellipse
              cx="192"
              cy="120"
              rx="44"
              ry="60"
              fill="none"
              stroke="url(#goldSheenSecondary)"
              strokeWidth="10.5"
              transform="rotate(18 192 120)"
            />
            {/* Inner Chamfer Bevel Highlight */}
            <ellipse
              cx="192"
              cy="120"
              rx="39"
              ry="55"
              fill="none"
              stroke="#FFF9E6"
              strokeWidth="1.2"
              opacity="0.8"
              transform="rotate(18 192 120)"
            />
            {/* Outer Chamfer Rim */}
            <ellipse
              cx="192"
              cy="120"
              rx="49"
              ry="65"
              fill="none"
              stroke="#7A5618"
              strokeWidth="1"
              opacity="0.7"
              transform="rotate(18 192 120)"
            />

            {/* Overlap Interlock Mask: Re-draw the front portion of Ring 1 over Ring 2 for authentic 3D interlock */}
            <path
              d="M 148 64 C 158 76, 164 92, 166 110"
              fill="none"
              stroke="url(#goldSheenPrimary)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 148 64 C 158 76, 164 92, 166 110"
              fill="none"
              stroke="#FFF9E6"
              strokeWidth="1.2"
              opacity="0.85"
              strokeLinecap="round"
            />

            {/* 4-Prong Royal Solitaire Setting */}
            <g transform="translate(182, 54)">
              {/* Crown Base Gallery */}
              <ellipse cx="14" cy="18" rx="14" ry="4" fill="url(#goldSheenSecondary)" stroke="#7A5618" strokeWidth="0.8" />
              {/* Prongs */}
              <path d="M 2 18 L 4 4" stroke="url(#goldSheenSecondary)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 26 18 L 24 4" stroke="url(#goldSheenSecondary)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 10 20 L 10 5" stroke="url(#goldSheenPrimary)" strokeWidth="2" strokeLinecap="round" />
              <path d="M 18 20 L 18 5" stroke="url(#goldSheenPrimary)" strokeWidth="2" strokeLinecap="round" />

              {/* Brilliant Multi-Faceted Solitaire Diamond */}
              <g filter="url(#diamondSparkleGlow)">
                {/* Lower Pavilion V-cut */}
                <polygon points="4,5 24,5 14,19" fill="url(#diamondPavilion)" stroke="#B3D7F5" strokeWidth="0.6" />
                <polygon points="8,5 20,5 14,19" fill="#9AC5EB" opacity="0.6" />
                {/* Crown Upper Facets */}
                <polygon points="4,5 8,-4 20,-4 24,5" fill="url(#diamondFacetLeft)" stroke="#E1EFFF" strokeWidth="0.6" />
                <polygon points="8,-4 14,-8 20,-4" fill="url(#diamondTable)" stroke="#FFFFFF" strokeWidth="0.6" />
                <polygon points="4,5 8,-4 14,5" fill="url(#diamondFacetLeft)" stroke="#C6E2F7" strokeWidth="0.5" />
                <polygon points="24,5 20,-4 14,5" fill="url(#diamondFacetRight)" stroke="#B0D5F7" strokeWidth="0.5" />
                {/* Top Flat Table */}
                <polygon points="8,-4 14,-7 20,-4 14, -2" fill="#FFFFFF" />

                {/* Spectacular Light Burst Star */}
                <g transform="translate(18, -3)">
                  <line x1="-8" y1="0" x2="8" y2="0" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="0" y1="-8" x2="0" y2="8" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="-4" y1="-4" x2="4" y2="4" stroke="#FFF7D6" strokeWidth="0.8" strokeLinecap="round" />
                  <line x1="4" y1="-4" x2="-4" y2="4" stroke="#FFF7D6" strokeWidth="0.8" strokeLinecap="round" />
                  <circle cx="0" cy="0" r="1.8" fill="#FFFFFF" />
                </g>
              </g>
            </g>
          </g>

          {/* Sacred Bindus & Accent Dots */}
          <circle cx="160" cy="202" r="2.5" fill="url(#goldSheenPrimary)" />
          <circle cx="148" cy="202" r="1.5" fill="url(#goldSheenSecondary)" opacity="0.8" />
          <circle cx="172" cy="202" r="1.5" fill="url(#goldSheenSecondary)" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
};
