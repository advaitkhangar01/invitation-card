import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  delay = 0,
  duration = 0.9,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (prefersReduced) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y: 16 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: 'power3.out',
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, duration, prefersReduced]);

  return (
    <div ref={containerRef} className={className} style={{ willChange: 'opacity, transform' }}>
      {children}
    </div>
  );
};
