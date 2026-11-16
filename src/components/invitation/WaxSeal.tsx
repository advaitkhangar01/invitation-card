import React from 'react';

interface WaxSealProps {
  isBroken: boolean;
  onClick: () => void;
  className?: string;
}

export const WaxSeal: React.FC<WaxSealProps> = ({ isBroken, onClick, className = '' }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Wax Seal - Click to open the wedding invitation"
      className={`wax-seal-wrapper ${isBroken ? 'seal-broken' : 'seal-interactive'} ${className}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <filter id="sealShadowDef" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#38070A" floodOpacity="0.45" />
          </filter>
          <radialGradient id="waxGradDef" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#9E2A34" />
            <stop offset="65%" stopColor="#731921" />
            <stop offset="85%" stopColor="#5A1218" />
            <stop offset="100%" stopColor="#3F0A0F" />
          </radialGradient>
          <radialGradient id="innerCavityDef" cx="48%" cy="46%" r="50%">
            <stop offset="0%" stopColor="#69161E" />
            <stop offset="70%" stopColor="#551117" />
            <stop offset="100%" stopColor="#400A0E" />
          </radialGradient>
          <linearGradient id="embossedGoldDef" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F2DFB8" />
            <stop offset="50%" stopColor="#D4BE93" />
            <stop offset="100%" stopColor="#9E7E4D" />
          </linearGradient>
        </defs>

        <g filter="url(#sealShadowDef)">
          {/* Organic Wax Outer Edge */}
          <path
            d="M100 12 C128 10, 154 22, 172 44 C188 64, 194 92, 186 118 C179 143, 168 166, 144 179 C122 191, 92 192, 68 184 C44 175, 23 158, 14 134 C6 112, 8 84, 22 62 C37 38, 68 14, 100 12Z"
            fill="url(#waxGradDef)"
          />
          {/* Subtle Outer Wax Melt Rim */}
          <path
            d="M100 24 C124 23, 145 33, 160 52 C174 69, 179 92, 172 113 C165 134, 154 152, 134 163 C115 173, 90 173, 71 166 C51 159, 34 144, 26 124 C19 105, 21 82, 33 64 C46 44, 73 25, 100 24Z"
            fill="none"
            stroke="#A8323D"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* Stamped Center Dish */}
          <circle cx="100" cy="102" r="54" fill="url(#innerCavityDef)" stroke="#38070A" strokeWidth="2" />
          <circle cx="100" cy="102" r="50" fill="none" stroke="url(#embossedGoldDef)" strokeWidth="1" strokeDasharray="3 2" opacity="0.65" />

          {/* Stamped Relief Monogram */}
          <text
            x="78"
            y="114"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="36"
            fontWeight="600"
            fontStyle="italic"
            fill="url(#embossedGoldDef)"
            textAnchor="middle"
          >
            I
          </text>
          <text
            x="100"
            y="106"
            fontFamily="'Allura', cursive, serif"
            fontSize="26"
            fontWeight="400"
            fill="#E6D3AF"
            textAnchor="middle"
          >
            &amp;
          </text>
          <text
            x="122"
            y="114"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="36"
            fontWeight="600"
            fill="url(#embossedGoldDef)"
            textAnchor="middle"
          >
            A
          </text>
        </g>
      </svg>
    </div>
  );
};
