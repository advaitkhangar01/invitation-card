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
      width: 'clamp(46px, 11vw, 62px)',
      height: 'clamp(46px, 11vw, 62px)',
      pointerEvents: 'none',
      zIndex: 4,
      transform: getTransform(),
      filter: 'drop-shadow(0 1.5px 3px rgba(140, 111, 50, 0.35))',
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
        viewBox="0 0 90 90"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`goldCornerGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8DF" />
            <stop offset="30%" stopColor="#E5C368" />
            <stop offset="65%" stopColor="#C5A059" />
            <stop offset="90%" stopColor="#8C6F32" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>

        {/* Outer Corner L-Frame Bracket */}
        <path
          d="M 6 54 L 6 12 C 6 8.7, 8.7 6, 12 6 L 54 6"
          stroke={`url(#goldCornerGrad-${position})`}
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Delicate Inner Inset Hairline */}
        <path
          d="M 14 44 L 14 16 C 14 14.9, 14.9 14, 16 14 L 44 14"
          stroke={`url(#goldCornerGrad-${position})`}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Royal Indian Lotus & Paisley Filigree */}
        <path
          d="M 16 16 C 28 16, 42 28, 42 46 C 42 56, 30 64, 22 58 C 16 54, 18 42, 28 38 C 34 35, 42 40, 44 46"
          stroke={`url(#goldCornerGrad-${position})`}
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Delicate Acanthus Foliage Petals */}
        <path
          d="M 24 20 C 32 18, 38 24, 36 30 C 32 28, 28 24, 24 20 Z"
          fill={`url(#goldCornerGrad-${position})`}
          opacity="0.9"
        />
        <path
          d="M 20 24 C 18 32, 24 38, 30 36 C 28 32, 24 28, 20 24 Z"
          fill={`url(#goldCornerGrad-${position})`}
          opacity="0.9"
        />
        <path
          d="M 32 32 C 40 32, 48 38, 46 44 C 42 42, 36 38, 32 32 Z"
          fill={`url(#goldCornerGrad-${position})`}
          opacity="0.85"
        />

        {/* Sacred Alpona Bindus (Fine Stamped Accent Dots) */}
        <circle cx="10" cy="10" r="2.2" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="22" cy="6" r="1.3" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="34" cy="6" r="1.3" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="6" cy="22" r="1.3" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="6" cy="34" r="1.3" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="58" cy="6" r="1.8" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="6" cy="58" r="1.8" fill={`url(#goldCornerGrad-${position})`} />
        <circle cx="48" cy="48" r="1.8" fill={`url(#goldCornerGrad-${position})`} />
      </svg>
    </div>
  );
};
