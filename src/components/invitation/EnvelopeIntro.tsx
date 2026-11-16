import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { WaxSeal } from './WaxSeal';
import { weddingData } from '../../data/wedding';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface EnvelopeIntroProps {
  onOpenComplete: () => void;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onOpenComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleOpen = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    if (prefersReduced) {
      setIsOpen(true);
      onOpenComplete();
      return;
    }

    // Gentle gold and dusty rose petal celebration burst
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#B69A69', '#D4BE93', '#D9BDB3', '#FAF5EE', '#879487'],
      disableForReducedMotion: true,
      shapes: ['circle'],
      scalar: 0.8,
    });

    // Step 1: Flap opens
    setTimeout(() => {
      setIsOpen(true);
      // Step 2: Card emerges and screen transitions
      setTimeout(() => {
        onOpenComplete();
      }, 950);
    }, 400);
  };

  return (
    <section className="envelope-screen" aria-label="Wedding Envelope Introduction">
      {/* Botanical Corner Flourishes */}
      <div
        className="card-corner card-corner-tl"
        style={{ width: '90px', height: '90px', top: '16px', left: '16px', opacity: 0.65 }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none">
          <path d="M6 6 C24 20, 40 22, 68 18" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M6 6 C20 24, 22 40, 18 68" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M28 18 C32 10, 42 10, 44 18 C40 22, 32 23, 28 18Z" fill="#879487" opacity="0.85" />
          <path d="M18 28 C10 32, 10 42, 18 44 C22 40, 23 32, 18 28Z" fill="#879487" opacity="0.85" />
          <circle cx="20" cy="20" r="3.5" fill="#D9BDB3" />
          <circle cx="20" cy="20" r="1.5" fill="#B69A69" />
        </svg>
      </div>

      <div
        className="card-corner card-corner-br"
        style={{ width: '90px', height: '90px', bottom: '16px', right: '16px', opacity: 0.65 }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 120 120" width="100%" height="100%" fill="none">
          <path d="M6 6 C24 20, 40 22, 68 18" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M6 6 C20 24, 22 40, 18 68" stroke="#4A6359" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M28 18 C32 10, 42 10, 44 18 C40 22, 32 23, 28 18Z" fill="#879487" opacity="0.85" />
          <path d="M18 28 C10 32, 10 42, 18 44 C22 40, 23 32, 18 28Z" fill="#879487" opacity="0.85" />
          <circle cx="20" cy="20" r="3.5" fill="#D9BDB3" />
          <circle cx="20" cy="20" r="1.5" fill="#B69A69" />
        </svg>
      </div>

      {/* Header Label */}
      <span className="text-micro-label" style={{ marginBottom: '8px' }}>
        {weddingData.envelope.smallLabel}
      </span>

      {/* Main Instruction Headline */}
      <h1
        className="font-serif-cormorant"
        style={{
          fontSize: 'clamp(1.4rem, 4.5vw, 1.85rem)',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'var(--color-deep-sage)',
          textAlign: 'center',
          maxWidth: '300px',
          lineHeight: 1.3,
          marginBottom: 'var(--space-md)',
        }}
      >
        {weddingData.envelope.mainInstruction}
      </h1>

      {/* Envelope 3D Container */}
      <div
        className="envelope-wrapper perspective-1000"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label="Open the wedding invitation"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpen();
          }
        }}
      >
        <div className="envelope-box">
          {/* Inner Envelope Liner */}
          <div className="envelope-inner-liner" />

          {/* Emerging Invitation Card inside envelope */}
          <div
            className="invitation-card-emerge"
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              right: '16px',
              height: '180px',
              background: '#FBF8F2',
              border: '1px solid rgba(182, 154, 105, 0.4)',
              borderRadius: '2px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              transform: isOpen ? 'translate3d(0, -95px, 20px) scale(1.04)' : 'translate3d(0, 0, 0)',
              boxShadow: isOpen ? '0 16px 36px rgba(38, 61, 53, 0.22)' : 'none',
              zIndex: isOpen ? 6 : 2,
            }}
          >
            <span
              className="font-serif-cormorant"
              style={{
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: 'var(--color-antique-gold)',
              }}
            >
              Isha &amp; Ashish
            </span>
            <span
              className="font-sans-dm"
              style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--color-ink-muted)',
                marginTop: '4px',
              }}
            >
              17 December 2026
            </span>
          </div>

          {/* Envelope Pocket Flaps (Left, Right, Bottom) */}
          <div className="envelope-pocket">
            <div className="envelope-pocket-left" />
            <div className="envelope-pocket-right" />
            <div className="envelope-pocket-bottom" />
          </div>

          {/* 3D Top Flap */}
          <div
            className={`envelope-flap-polygon ${isOpen ? 'opened' : ''}`}
            style={{
              transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              pointerEvents: isOpen ? 'none' : 'auto',
            }}
          />
        </div>

        {/* Wax Seal on Top Center */}
        <WaxSeal isBroken={isOpen} onClick={handleOpen} />
      </div>

      {/* Tap to Open Interaction Prompt */}
      <div
        className="flex-col-center"
        style={{ marginTop: 'var(--space-md)', cursor: 'pointer' }}
        onClick={handleOpen}
      >
        <span
          className="font-sans-dm"
          style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-antique-gold)',
          }}
        >
          {weddingData.envelope.interactionInstruction}
        </span>
        <span
          className="font-script-allura"
          style={{
            fontSize: '1.25rem',
            color: 'var(--color-ink-muted)',
            marginTop: '2px',
          }}
        >
          {weddingData.envelope.microcopy}
        </span>
      </div>

      {/* Accessibility / Reduced Motion Fallback Skip Button */}
      <button
        onClick={onOpenComplete}
        style={{
          marginTop: 'var(--space-xl)',
          background: 'none',
          border: 'none',
          color: 'var(--color-ink-light)',
          fontSize: '0.78rem',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        Skip directly to invitation
      </button>
    </section>
  );
};
