import React from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator: React.FC = () => {
  return (
    <div
      className="scroll-indicator-bounce flex-col-center"
      style={{
        margin: 'var(--space-lg) auto 0',
        color: 'var(--color-antique-gold)',
        opacity: 0.8,
      }}
      aria-hidden="true"
    >
      <span
        className="font-sans-dm"
        style={{
          fontSize: '0.68rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '4px',
        }}
      >
        Scroll to explore
      </span>
      <ChevronDown size={18} strokeWidth={1.8} />
    </div>
  );
};
