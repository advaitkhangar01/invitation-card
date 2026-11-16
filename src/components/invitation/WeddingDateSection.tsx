import React, { useState, useEffect } from 'react';
import { weddingData } from '../../data/wedding';
import { calculateTimeRemaining, TimeRemaining } from '../../utils/date';
import { Reveal } from '../motion/Reveal';

export const WeddingDateSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="section-padding section-deep-sage text-center relative"
      aria-label="Wedding Date Details"
    >
      {/* Decorative Botanical Branch Accents in Muted Sage */}
      <div style={{ maxWidth: '160px', margin: '0 auto 16px', opacity: 0.6 }} aria-hidden="true">
        <svg viewBox="0 0 240 60" width="100%" height="32" fill="none">
          <path d="M10 32 C50 18, 90 42, 130 26 C170 12, 205 38, 230 28" stroke="#879487" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M38 27 C42 16, 52 18, 50 26 C45 30, 40 29, 38 27Z" fill="#879487" opacity="0.85" />
          <path d="M78 30 C82 18, 94 22, 90 30 C85 33, 80 32, 78 30Z" fill="#D4BE93" opacity="0.75" />
          <path d="M122 25 C125 14, 137 15, 135 24 C130 28, 124 27, 122 25Z" fill="#879487" opacity="0.85" />
          <circle cx="110" cy="38" r="2.5" fill="#D4BE93" />
        </svg>
      </div>

      <Reveal delay={0.1}>
        <span
          className="text-micro-label"
          style={{ color: 'var(--color-gold-light)', display: 'block', marginBottom: '16px' }}
        >
          {weddingData.dateExperience.smallLabel}
        </span>
      </Reveal>

      {/* Date Monumental Display */}
      <Reveal delay={0.2}>
        <div className="date-highlight-box">
          <div
            className="text-date-number text-gold-gradient"
            style={{ marginBottom: '8px' }}
          >
            {weddingData.dateExperience.date}
          </div>
          <div
            className="font-serif-cormorant"
            style={{
              fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
              letterSpacing: '0.15em',
              fontWeight: 500,
              color: 'var(--color-warm-ivory)',
              lineHeight: 1,
            }}
          >
            {weddingData.dateExperience.month}
          </div>
          <div
            className="font-sans-dm"
            style={{
              fontSize: '1.15rem',
              letterSpacing: '0.3em',
              fontWeight: 300,
              color: 'var(--color-gold-light)',
              marginTop: '8px',
            }}
          >
            {weddingData.dateExperience.year}
          </div>
        </div>
      </Reveal>

      {/* Day and Ceremony Start Time */}
      <Reveal delay={0.3}>
        <div style={{ margin: 'var(--space-xl) 0' }}>
          <div
            className="font-sans-dm"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              color: 'var(--color-warm-ivory)',
              textTransform: 'uppercase',
            }}
          >
            {weddingData.dateExperience.day}
          </div>
          <div
            className="font-serif-cormorant"
            style={{
              fontSize: '1.45rem',
              fontStyle: 'italic',
              color: 'var(--color-gold-light)',
              marginTop: '6px',
            }}
          >
            Ceremony at {weddingData.dateExperience.ceremonyTime}
          </div>
        </div>
      </Reveal>

      {/* Live Countdown Display (Subtle & Dignified) */}
      {!timeLeft.isPast && (
        <Reveal delay={0.4}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              padding: '16px 12px',
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '6px',
              border: '1px solid rgba(182, 154, 105, 0.25)',
              maxWidth: '300px',
              margin: '0 auto 24px',
            }}
          >
            <div style={{ flex: 1 }}>
              <div className="font-serif-cormorant" style={{ fontSize: '1.8rem', color: '#FAF5EE', lineHeight: 1 }}>
                {timeLeft.days}
              </div>
              <div className="font-sans-dm text-micro-label" style={{ fontSize: '0.62rem', color: '#D4BE93', marginTop: '4px' }}>
                Days
              </div>
            </div>
            <div style={{ width: '1px', background: 'rgba(182, 154, 105, 0.25)' }} />
            <div style={{ flex: 1 }}>
              <div className="font-serif-cormorant" style={{ fontSize: '1.8rem', color: '#FAF5EE', lineHeight: 1 }}>
                {timeLeft.hours}
              </div>
              <div className="font-sans-dm text-micro-label" style={{ fontSize: '0.62rem', color: '#D4BE93', marginTop: '4px' }}>
                Hours
              </div>
            </div>
            <div style={{ width: '1px', background: 'rgba(182, 154, 105, 0.25)' }} />
            <div style={{ flex: 1 }}>
              <div className="font-serif-cormorant" style={{ fontSize: '1.8rem', color: '#FAF5EE', lineHeight: 1 }}>
                {timeLeft.minutes}
              </div>
              <div className="font-sans-dm text-micro-label" style={{ fontSize: '0.62rem', color: '#D4BE93', marginTop: '4px' }}>
                Mins
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* Supporting Line */}
      <Reveal delay={0.5}>
        <p
          className="font-serif-cormorant"
          style={{
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: 'var(--color-warm-ivory)',
            opacity: 0.9,
          }}
        >
          {weddingData.dateExperience.supportingLine}
        </p>
      </Reveal>
    </section>
  );
};
