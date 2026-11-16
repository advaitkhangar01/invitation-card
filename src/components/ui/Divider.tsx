import React from 'react';

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return (
    <div className={`gold-divider-wrap ${className}`} role="separator" aria-hidden="true">
      <svg viewBox="0 0 300 24" width="100%" height="24" fill="none">
        <line x1="20" y1="12" x2="115" y2="12" stroke="#B69A69" strokeWidth="0.8" strokeOpacity="0.65" />
        <circle cx="118" cy="12" r="1.5" fill="#B69A69" opacity="0.8" />
        <g transform="translate(150, 12)">
          <polygon points="0,-4.5 4.5,0 0,4.5 -4.5,0" fill="#B69A69" opacity="0.9" />
          <circle cx="0" cy="0" r="1" fill="#FBF8F2" />
          <path d="M-7 0 C-12 -3.5, -16 0, -18 -0.8 C-16 2.5, -11 1.8, -7 0Z" fill="#879487" opacity="0.85" />
          <path d="M7 0 C12 -3.5, 16 0, 18 -0.8 C16 2.5, 11 1.8, 7 0Z" fill="#879487" opacity="0.85" />
        </g>
        <circle cx="182" cy="12" r="1.5" fill="#B69A69" opacity="0.8" />
        <line x1="185" y1="12" x2="280" y2="12" stroke="#B69A69" strokeWidth="0.8" strokeOpacity="0.65" />
      </svg>
    </div>
  );
};
