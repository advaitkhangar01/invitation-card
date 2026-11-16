import React from 'react';

interface OrnamentalFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const OrnamentalFrame: React.FC<OrnamentalFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`invitation-card ${className}`}>
      {/* Inner border line */}
      <div className="invitation-card-inner-border" />

      {/* Four ornate botanical corners */}
      <div className="card-corner card-corner-tl">
        <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" aria-hidden="true">
          <path d="M4 60 L4 4 L60 4" stroke="#B69A69" strokeWidth="0.8" strokeOpacity="0.45" />
          <path d="M6 6 C18 16, 32 18, 54 14" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M6 6 C16 18, 18 32, 14 54" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M25 15 C28 9, 36 8, 38 15 C34 18, 28 19, 25 15Z" fill="#879487" opacity="0.85" />
          <path d="M15 25 C9 28, 8 36, 15 38 C18 34, 19 28, 15 25Z" fill="#879487" opacity="0.85" />
          <circle cx="18" cy="18" r="3" fill="#D9BDB3" />
          <circle cx="18" cy="18" r="1.2" fill="#B69A69" />
        </svg>
      </div>

      <div className="card-corner card-corner-tr">
        <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" aria-hidden="true">
          <path d="M4 60 L4 4 L60 4" stroke="#B69A69" strokeWidth="0.8" strokeOpacity="0.45" />
          <path d="M6 6 C18 16, 32 18, 54 14" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M6 6 C16 18, 18 32, 14 54" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M25 15 C28 9, 36 8, 38 15 C34 18, 28 19, 25 15Z" fill="#879487" opacity="0.85" />
          <path d="M15 25 C9 28, 8 36, 15 38 C18 34, 19 28, 15 25Z" fill="#879487" opacity="0.85" />
          <circle cx="18" cy="18" r="3" fill="#D9BDB3" />
          <circle cx="18" cy="18" r="1.2" fill="#B69A69" />
        </svg>
      </div>

      <div className="card-corner card-corner-bl">
        <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" aria-hidden="true">
          <path d="M4 60 L4 4 L60 4" stroke="#B69A69" strokeWidth="0.8" strokeOpacity="0.45" />
          <path d="M6 6 C18 16, 32 18, 54 14" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M6 6 C16 18, 18 32, 14 54" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M25 15 C28 9, 36 8, 38 15 C34 18, 28 19, 25 15Z" fill="#879487" opacity="0.85" />
          <path d="M15 25 C9 28, 8 36, 15 38 C18 34, 19 28, 15 25Z" fill="#879487" opacity="0.85" />
          <circle cx="18" cy="18" r="3" fill="#D9BDB3" />
          <circle cx="18" cy="18" r="1.2" fill="#B69A69" />
        </svg>
      </div>

      <div className="card-corner card-corner-br">
        <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none" aria-hidden="true">
          <path d="M4 60 L4 4 L60 4" stroke="#B69A69" strokeWidth="0.8" strokeOpacity="0.45" />
          <path d="M6 6 C18 16, 32 18, 54 14" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M6 6 C16 18, 18 32, 14 54" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M25 15 C28 9, 36 8, 38 15 C34 18, 28 19, 25 15Z" fill="#879487" opacity="0.85" />
          <path d="M15 25 C9 28, 8 36, 15 38 C18 34, 19 28, 15 25Z" fill="#879487" opacity="0.85" />
          <circle cx="18" cy="18" r="3" fill="#D9BDB3" />
          <circle cx="18" cy="18" r="1.2" fill="#B69A69" />
        </svg>
      </div>

      {children}
    </div>
  );
};
