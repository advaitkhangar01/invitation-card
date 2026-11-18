import React, { useState } from 'react';

export const ThreeRingsCanvas: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="scene-block reveal"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        margin: '4px auto 14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
      aria-label="Hot-Stamped Gold Foil Interlocking Wedding Bands and Solitaire Diamond"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Warm Golden Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(190px, 45vw, 260px)',
          height: 'clamp(190px, 45vw, 260px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(229, 195, 104, 0.16) 0%, rgba(197, 160, 89, 0.05) 50%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      {/* Bespoke Hot-Stamped Gold Foil Wedding Bands Emblem in Realistic Perspective */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '300px',
          aspectRatio: '340 / 210',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'drop-shadow(0 6px 16px rgba(140, 111, 50, 0.22))',
          transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: isHovered ? 'scale(1.025) translateY(-2px)' : 'scale(1)',
          boxSizing: 'border-box',
        }}
      >
        <svg
          viewBox="0 0 340 210"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
        >
          <defs>
            {/* 24K Hot-Stamped Antique Gold Metallic Foil */}
            <linearGradient id="ringGold24K" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF9E6" />
              <stop offset="20%" stopColor="#E5C368" />
              <stop offset="45%" stopColor="#FFF5D6" />
              <stop offset="70%" stopColor="#967733" />
              <stop offset="90%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#7A5D20" />
            </linearGradient>

            {/* Inner Ring Surface Shading */}
            <linearGradient id="ringInnerShade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6E521D" />
              <stop offset="50%" stopColor="#4A3611" />
              <stop offset="100%" stopColor="#8C6A28" />
            </linearGradient>

            {/* Solitaire Platinum / White Gold Crown */}
            <linearGradient id="ringPlatinum" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#E8EEF5" />
              <stop offset="70%" stopColor="#B4C2D0" />
              <stop offset="100%" stopColor="#DDE5EE" />
            </linearGradient>

            {/* Brilliant Diamond Facets (Crystal Pure White & Subtle Ice Reflections) */}
            <linearGradient id="diaTableFacet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#FBFDFF" />
              <stop offset="100%" stopColor="#F0F4F8" />
            </linearGradient>

            <linearGradient id="diaUpperFacet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#EEF4F9" />
              <stop offset="100%" stopColor="#D9E4EE" />
            </linearGradient>

            <linearGradient id="diaLowerFacet" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E6F0F8" />
              <stop offset="50%" stopColor="#C4D6E6" />
              <stop offset="100%" stopColor="#9FBAD2" />
            </linearGradient>

            {/* Letterpress Paper Indentation Filter */}
            <filter id="letterpressEmboss" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#3A280D" floodOpacity="0.28" />
              <feDropShadow dx="0" dy="-0.6" stdDeviation="0.5" floodColor="#FFFFFF" floodOpacity="0.85" />
            </filter>

            {/* Star Sparkle Glow */}
            <filter id="diamondGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Base Botanical Laurel & Jasmine Crescent Garland */}
          <g opacity="0.8" stroke="url(#ringGold24K)" strokeWidth="1.2" strokeLinecap="round">
            {/* Left Botanical Vine */}
            <path d="M 170 172 C 120 172, 65 155, 48 118 C 42 104, 46 88, 56 76" fill="none" strokeWidth="1.4" />
            {/* Left Leaf Clusters */}
            <path d="M 52 82 C 40 76, 38 64, 48 62 C 55 60, 56 72, 52 82 Z" fill="url(#ringGold24K)" stroke="none" />
            <path d="M 46 102 C 32 100, 30 88, 40 84 C 47 82, 49 94, 46 102 Z" fill="url(#ringGold24K)" stroke="none" />
            <path d="M 54 124 C 42 126, 38 114, 47 108 C 55 106, 58 116, 54 124 Z" fill="url(#ringGold24K)" stroke="none" />
            <path d="M 76 146 C 64 152, 58 140, 66 132 C 73 130, 78 138, 76 146 Z" fill="url(#ringGold24K)" stroke="none" />
            <path d="M 108 164 C 96 172, 90 160, 98 152 C 105 149, 110 156, 108 164 Z" fill="url(#ringGold24K)" stroke="none" />

            {/* Right Botanical Vine */}
            <path d="M 170 172 C 220 172, 275 155, 292 118 C 298 104, 294 88, 284 76" fill="none" strokeWidth="1.4" />
            {/* Right Leaf Clusters */}
            <path d="M 288 82 C 300 76, 302 64, 292 62 C 285 60, 284 72, 288 82 Z" fill="url(#ringGold24K)" stroke="none" />
            <path d="M 294 102 C 308 100, 310 88, 300 84 C 293 82, 291 94, 294 102 Z" fill="url(#ringGold24K)" stroke="none" />
            <path d="M 286 124 C 298 126, 302 114, 293 108 C 285 106, 282 116, 286 124 Z" fill="url(#ringGold24K)" stroke="none" />
            <path d="M 264 146 C 276 152, 282 140, 274 132 C 267 130, 262 138, 264 146 Z" fill="url(#ringGold24K)" stroke="none" />
            <path d="M 232 164 C 244 172, 250 160, 242 152 C 235 149, 230 156, 232 164 Z" fill="url(#ringGold24K)" stroke="none" />

            {/* Delicately Placed Sacred Buds */}
            <circle cx="68" cy="92" r="2.2" fill="url(#ringGold24K)" stroke="none" />
            <circle cx="90" cy="132" r="2.2" fill="url(#ringGold24K)" stroke="none" />
            <circle cx="272" cy="92" r="2.2" fill="url(#ringGold24K)" stroke="none" />
            <circle cx="250" cy="132" r="2.2" fill="url(#ringGold24K)" stroke="none" />
          </g>

          {/* 2. Soft Contact Drop Shadow on Cotton Paper */}
          <ellipse cx="132" cy="148" rx="42" ry="14" fill="#3D2B10" opacity="0.22" filter="blur(4px)" />
          <ellipse cx="204" cy="146" rx="40" ry="13" fill="#3D2B10" opacity="0.22" filter="blur(4px)" />

          {/* 3. Groom's Comfort-Fit Gold Wedding Band (Left, 3D Perspective Tilt) */}
          <g filter="url(#letterpressEmboss)">
            {/* Inner Back Wall of Groom's Ring */}
            <path
              d="M 94 116 C 94 92, 114 74, 138 74 C 160 74, 178 90, 180 112 C 172 98, 156 86, 138 86 C 118 86, 102 98, 102 114 Z"
              fill="url(#ringInnerShade)"
            />

            {/* Main Outer Torus of Groom's Ring */}
            <path
              d="M 88 118 C 88 88, 110 66, 138 66 C 166 66, 188 88, 188 118 C 188 144, 166 164, 138 164 C 110 164, 88 144, 88 118 Z"
              fill="none"
              stroke="url(#ringGold24K)"
              strokeWidth="11"
            />

            {/* Inner Chamfer Bevel Highlight */}
            <path
              d="M 94 118 C 94 92, 114 72, 138 72 C 162 72, 182 92, 182 118 C 182 140, 162 158, 138 158 C 114 158, 94 140, 94 118 Z"
              fill="none"
              stroke="#FFF9E6"
              strokeWidth="1.2"
              opacity="0.85"
            />

            {/* Outer Precision Chamfer Rim */}
            <path
              d="M 82 118 C 82 84, 107 60, 138 60 C 169 60, 194 84, 194 118 C 194 148, 169 170, 138 170 C 107 170, 82 148, 82 118 Z"
              fill="none"
              stroke="#7A5D20"
              strokeWidth="0.8"
              opacity="0.65"
            />
          </g>

          {/* 4. Bride's Solitaire Diamond Engagement Ring (Right, Interlocking in Perspective) */}
          <g filter="url(#letterpressEmboss)">
            {/* Inner Back Wall of Bride's Ring */}
            <path
              d="M 166 114 C 166 94, 184 78, 206 78 C 226 78, 242 92, 244 110 C 238 98, 224 88, 206 88 C 188 88, 174 98, 174 112 Z"
              fill="url(#ringInnerShade)"
            />

            {/* Main Outer Band of Bride's Ring */}
            <path
              d="M 160 116 C 160 90, 181 68, 206 68 C 232 68, 252 90, 252 116 C 252 140, 232 160, 206 160 C 181 160, 160 140, 160 116 Z"
              fill="none"
              stroke="url(#ringGold24K)"
              strokeWidth="9.5"
            />

            {/* Inner Chamfer Bevel Highlight */}
            <path
              d="M 165 116 C 165 93, 183 73, 206 73 C 229 73, 247 93, 247 116 C 247 136, 229 155, 206 155 C 183 155, 165 136, 165 116 Z"
              fill="none"
              stroke="#FFF9E6"
              strokeWidth="1.1"
              opacity="0.85"
            />

            {/* Outer Precision Chamfer Rim */}
            <path
              d="M 155 116 C 155 86, 178 63, 206 63 C 235 63, 257 86, 257 116 C 257 144, 235 165, 206 165 C 178 165, 155 144, 155 116 Z"
              fill="none"
              stroke="#7A5D20"
              strokeWidth="0.8"
              opacity="0.65"
            />

            {/* Authentic 3D Physical Interlock: Front portion of Groom's Ring overlaps over Bride's Ring */}
            <path
              d="M 152 74 C 166 84, 178 98, 184 116"
              fill="none"
              stroke="url(#ringGold24K)"
              strokeWidth="11"
              strokeLinecap="round"
            />
            <path
              d="M 152 74 C 166 84, 178 98, 184 116"
              fill="none"
              stroke="#FFF9E6"
              strokeWidth="1.2"
              opacity="0.9"
              strokeLinecap="round"
            />

            {/* 5. 6-Prong Royal Solitaire Platinum Setting & Brilliant-Cut Diamond */}
            <g transform="translate(196, 48)">
              {/* Platinum Gallery Ring Basket */}
              <ellipse cx="10" cy="19" rx="10" ry="3" fill="url(#ringPlatinum)" stroke="#7A8B9C" strokeWidth="0.7" />
              {/* Crown Prongs */}
              <path d="M 1 19 L 2.5 5" stroke="url(#ringPlatinum)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M 19 19 L 17.5 5" stroke="url(#ringPlatinum)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M 6 20 L 7 6" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M 14 20 L 13 6" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />

              {/* Brilliant Round-Cut Diamond (Authentic Crystal/Diamond Facets) */}
              <g filter="url(#diamondGlow)">
                {/* Lower Pavilion V-Facets */}
                <polygon points="2,6 18,6 10,19" fill="url(#diaLowerFacet)" stroke="#D0DFEC" strokeWidth="0.5" />
                <polygon points="5,6 15,6 10,19" fill="#B0C8DC" opacity="0.75" />
                <polygon points="8,6 12,6 10,19" fill="#90B0CC" opacity="0.6" />

                {/* Crown Kite & Girdle Facets */}
                <polygon points="2,6 6,-3 14,-3 18,6" fill="url(#diaUpperFacet)" stroke="#E5F0F8" strokeWidth="0.5" />
                <polygon points="6,-3 10,-6 14,-3" fill="url(#diaTableFacet)" stroke="#FFFFFF" strokeWidth="0.5" />
                <polygon points="2,6 6,-3 10,6" fill="url(#diaUpperFacet)" stroke="#DAE7F2" strokeWidth="0.4" />
                <polygon points="18,6 14,-3 10,6" fill="url(#diaUpperFacet)" stroke="#C6D8E8" strokeWidth="0.4" />

                {/* Flat Table Facet (Highest Light Reflectance) */}
                <polygon points="6,-3 10,-6 14,-3 10, -1" fill="#FFFFFF" />

                {/* Scintillation Star Sparkle Burst */}
                <g transform="translate(14, -2)">
                  <line x1="-7" y1="0" x2="7" y2="0" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
                  <line x1="0" y1="-7" x2="0" y2="7" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
                  <line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" stroke="#FFFBF0" strokeWidth="0.8" strokeLinecap="round" />
                  <line x1="3.5" y1="-3.5" x2="-3.5" y2="3.5" stroke="#FFFBF0" strokeWidth="0.8" strokeLinecap="round" />
                  <circle cx="0" cy="0" r="1.6" fill="#FFFFFF" />
                </g>
              </g>
            </g>
          </g>

          {/* Sacred Royal Bindus (Auspicious Gold Accent Points) */}
          <circle cx="170" cy="192" r="2.2" fill="url(#ringGold24K)" />
          <circle cx="158" cy="192" r="1.4" fill="url(#ringGold24K)" opacity="0.8" />
          <circle cx="182" cy="192" r="1.4" fill="url(#ringGold24K)" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
};
