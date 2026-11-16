import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // e.g., -0.1 to 0.1
  className?: string;
  style?: React.CSSProperties;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.05,
  className = '',
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const scrolledIntoView = window.innerHeight - rect.top;
            if (scrolledIntoView > 0 && rect.bottom > 0) {
              const yOffset = (rect.top - window.innerHeight / 2) * speed;
              ref.current.style.transform = `translate3d(0, ${yOffset}px, 0)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, prefersReduced]);

  return (
    <div ref={ref} className={className} style={{ ...style, willChange: 'transform' }}>
      {children}
    </div>
  );
};
