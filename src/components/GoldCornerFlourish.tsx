import React from 'react';

interface GoldCornerFlourishProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const GoldCornerFlourish: React.FC<GoldCornerFlourishProps> = ({ position }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return 'none';
      case 'top-right':
        return 'scaleX(-1)';
      case 'bottom-left':
        return 'scaleY(-1)';
      case 'bottom-right':
        return 'scale(-1)';
    }
  };

  const getPositionStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      width: 'clamp(44px, 10vw, 56px)',
      height: 'clamp(44px, 10vw, 56px)',
      pointerEvents: 'none',
      zIndex: 4,
      transform: getTransform(),
      filter: 'drop-shadow(0 2px 5px rgba(179, 145, 85, 0.45))',
    };

    switch (position) {
      case 'top-left':
        return { ...base, top: '16px', left: '16px' };
      case 'top-right':
        return { ...base, top: '16px', right: '16px' };
      case 'bottom-left':
        return { ...base, bottom: '16px', left: '16px' };
      case 'bottom-right':
        return { ...base, bottom: '16px', right: '16px' };
    }
  };

  return (
    <div style={getPositionStyles()} aria-hidden="true">
      <svg
        viewBox="0 0 80 80"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`goldCornerGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#9E7628" />
            <stop offset="100%" stopColor="#E5C368" />
          </linearGradient>
        </defs>

        {/* Outer Corner Frame Bracket */}
        <path
          d="M 6 42 L 6 10 C 6 7.8, 7.8 6, 10 6 L 42 6"
          stroke={`url(#goldCornerGrad-${position})`}
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Secondary Delicate Inset Hairline */}
        <path
          d="M 12 36 L 12 14 C 12 12.9, 12.9 12, 14 12 L 36 12"
          stroke={`url(#goldCornerGrad-${position})`}
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Royal Alpona Paisley Swirl */}
        <path
          d="M 14 14 C 24 14, 38 24, 38 42 C 38 52, 28 60, 20 54 C 14 50, 16 38, 26 34 C 32 32, 38 36, 40 42"
          stroke={`url(#goldCornerGrad-${position})`}
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Botanical Filigree Leaflets */}
        <path
          d="M 22 18 C 30 16, 36 22, 34 28 C 30 26, 26 22, 22 18 Z"
          fill={`url(#goldCornerGrad-${position})`}
          opacity="0.9"
        />
        <path
          d="M 18 22 C 16 30, 22 36, 28 34 C 26 30, 22 26, 18 22 Z"
          fill={`url(#goldCornerGrad-${position})`}
          opacity="0.9"
        />

        {/* Sacred Alpona Dots / Bindus */}
        <circle cx="10" cy="10" r="2.2" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="20" cy="6" r="1.4" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="30" cy="6" r="1.4" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="6" cy="20" r="1.4" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="6" cy="30" r="1.4" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="48" cy="6" r="1.8" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="6" cy="48" r="1.8" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="44" cy="44" r="2" fill={`url(#goldCornerGrad-${position})`} />
      </svg>
    </div>
  );
};
