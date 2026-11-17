import React, { useState } from 'react';
import { WEDDING_DATA } from '../data/weddingData';

interface CardOpeningPreloaderProps {
  onOpen?: (withSound: boolean) => void;
}

export const CardOpeningPreloader: React.FC<CardOpeningPreloaderProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  const handleOpen = (withSound: boolean) => {
    if (isOpening) return;
    setIsOpening(true);

    if (withSound) {
      window.dispatchEvent(new Event('start-wedding-audio'));
    }
    if (onOpen) onOpen(withSound);

    setTimeout(() => {
      setIsClosed(false);
    }, 1300);
  };

  if (!isClosed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#0E1713',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1600px',
        overflow: 'hidden',
        padding: '0',
        opacity: isOpening ? 0 : 1,
        transition: 'opacity 0.6s ease 0.75s',
        pointerEvents: isOpening ? 'none' : 'auto',
      }}
    >
      {/* Background Ambient Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(179, 145, 85, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Royal Card Envelope Container
          Mobile: Full Edge-to-Edge 100vw, 100svh/100dvh, 0 margins
          Desktop: Max-width 480px, 680px height, centered with luxury shadow
      */}
      <div
        className="preloader-envelope"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          height: '100svh',
          maxHeight: '100dvh',
          transformStyle: 'preserve-3d',
          userSelect: 'none',
        }}
      >
        <style>{`
          @media (min-width: 601px) {
            .preloader-envelope {
              height: 680px !important;
              max-height: 92vh !important;
              border-radius: 20px !important;
              box-shadow: 0 35px 90px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(179, 145, 85, 0.5) !important;
            }
            .preloader-flap-left {
              border-top-left-radius: 20px !important;
              border-bottom-left-radius: 20px !important;
            }
            .preloader-flap-right {
              border-top-right-radius: 20px !important;
              border-bottom-right-radius: 20px !important;
            }
          }
          @media (max-width: 600px) {
            .preloader-envelope {
              border-radius: 0 !important;
              box-shadow: none !important;
              border: none !important;
            }
            .preloader-flap-left, .preloader-flap-right {
              border-radius: 0 !important;
            }
          }
        `}</style>

        {/* Left Gatefold Flap (Warm Ivory Handmade Paper with Gold Inset) */}
        <div
          className="preloader-flap-left"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50.5%',
            height: '100%',
            background: 'var(--color-paper-ivory)',
            backgroundImage:
              'radial-gradient(circle at 100% 50%, rgba(179, 145, 85, 0.12) 0%, transparent 65%), url("/assets/textures/white_wall.jpg")',
            backgroundSize: 'cover',
            border: '1px solid rgba(179, 145, 85, 0.45)',
            borderRight: '1px solid rgba(179, 145, 85, 0.75)',
            transformOrigin: 'left center',
            transform: isOpening ? 'rotateY(-125deg)' : 'rotateY(0deg)',
            transition: 'transform 1.1s cubic-bezier(0.25, 1, 0.5, 1)',
            boxShadow: isOpening ? 'none' : '6px 0 24px rgba(0, 0, 0, 0.25)',
            zIndex: 10,
            overflow: 'hidden',
          }}
        >
          {/* Inner gold frame on left flap */}
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              right: '6px',
              bottom: '14px',
              border: '1px solid rgba(179, 145, 85, 0.4)',
              borderRight: 'none',
              pointerEvents: 'none',
            }}
          />
          {/* Left Corner Alpona Flourishes */}
          <img
            src="/assets/frames/deco-alpona-corner.webp"
            alt="flourish"
            style={{ position: 'absolute', top: '18px', left: '18px', width: '42px', height: '42px', opacity: 0.85 }}
          />
          <img
            src="/assets/frames/deco-alpona-corner.webp"
            alt="flourish"
            style={{ position: 'absolute', bottom: '18px', left: '18px', width: '42px', height: '42px', transform: 'scaleY(-1)', opacity: 0.85 }}
          />
        </div>

        {/* Right Gatefold Flap (Warm Ivory Handmade Paper with Gold Inset) */}
        <div
          className="preloader-flap-right"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50.5%',
            height: '100%',
            background: 'var(--color-paper-ivory)',
            backgroundImage:
              'radial-gradient(circle at 0% 50%, rgba(179, 145, 85, 0.12) 0%, transparent 65%), url("/assets/textures/white_wall.jpg")',
            backgroundSize: 'cover',
            border: '1px solid rgba(179, 145, 85, 0.45)',
            borderLeft: 'none',
            transformOrigin: 'right center',
            transform: isOpening ? 'rotateY(125deg)' : 'rotateY(0deg)',
            transition: 'transform 1.1s cubic-bezier(0.25, 1, 0.5, 1)',
            boxShadow: isOpening ? 'none' : '-6px 0 24px rgba(0, 0, 0, 0.25)',
            zIndex: 10,
            overflow: 'hidden',
          }}
        >
          {/* Inner gold frame on right flap */}
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '6px',
              right: '14px',
              bottom: '14px',
              border: '1px solid rgba(179, 145, 85, 0.4)',
              borderLeft: 'none',
              pointerEvents: 'none',
            }}
          />
          {/* Right Corner Alpona Flourishes */}
          <img
            src="/assets/frames/deco-alpona-corner.webp"
            alt="flourish"
            style={{ position: 'absolute', top: '18px', right: '18px', width: '42px', height: '42px', transform: 'scaleX(-1)', opacity: 0.85 }}
          />
          <img
            src="/assets/frames/deco-alpona-corner.webp"
            alt="flourish"
            style={{ position: 'absolute', bottom: '18px', right: '18px', width: '42px', height: '42px', transform: 'scale(-1)', opacity: 0.85 }}
          />
        </div>

        {/* Front Presentation (Typography rendered directly as authentic letterpress text on warm paper) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'calc(env(safe-area-inset-top, 20px) + 20px) 24px calc(env(safe-area-inset-bottom, 20px) + 24px)',
            textAlign: 'center',
            opacity: isOpening ? 0 : 1,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
          }}
        >
          {/* Sanskrit Invocation */}
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.15rem, 3.2vw, 1.45rem)',
              color: 'var(--color-sacred-kumkum)',
              fontWeight: 700,
              letterSpacing: '0.06em',
              marginBottom: '8px',
            }}
          >
            {WEDDING_DATA.shloka.sanskrit}
          </p>

          {/* Royal Crest */}
          <img
            src="/assets/frames/crest-royal.webp"
            alt="Royal Crest"
            style={{
              width: 'clamp(58px, 12vw, 76px)',
              height: 'auto',
              marginBottom: '10px',
              filter: 'drop-shadow(0 3px 8px rgba(179, 145, 85, 0.35))',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-deep)',
              fontWeight: 700,
              marginBottom: '4px',
            }}
          >
            Royal Wedding Invitation
          </p>

          {/* Monumental Names */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 7.5vw, 3.6rem)',
              lineHeight: 1.1,
              color: 'var(--color-forest-deep)',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            {WEDDING_DATA.bride.name.split(' ')[0]}
          </h2>

          <span
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(2.5rem, 7vw, 3.8rem)',
              color: 'var(--color-gold-antique)',
              lineHeight: 0.85,
              margin: '2px 0',
            }}
          >
            &amp;
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 7.5vw, 3.6rem)',
              lineHeight: 1.1,
              color: 'var(--color-forest-deep)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              marginBottom: '10px',
            }}
          >
            {WEDDING_DATA.groom.name.split(' ')[0]}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.1rem, 2.8vw, 1.35rem)',
              color: 'var(--color-ink-charcoal)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              marginBottom: '18px',
            }}
          >
            {WEDDING_DATA.date.fullFormatted}
          </p>

          {/* Royal Gold Wax Seal */}
          <div
            style={{
              position: 'relative',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '88px',
                height: '88px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(179, 145, 85, 0.4) 0%, transparent 70%)',
                animation: 'pulseGlow 2.5s infinite ease-in-out',
              }}
            />
            <img
              src="/assets/ornaments/seal.png"
              alt="Royal Wax Seal"
              style={{
                width: '72px',
                height: 'auto',
                filter: 'drop-shadow(0 6px 16px rgba(0, 0, 0, 0.25))',
              }}
            />
          </div>

          {/* User Choice CTAs: Enter with Sound or Enter Silently */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              width: '100%',
              maxWidth: '300px',
              pointerEvents: 'auto',
            }}
          >
            <button
              onClick={() => handleOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'var(--color-forest-rich)',
                color: 'var(--color-paper-ivory)',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.8125rem, 2.2vw, 0.9375rem)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '14px 22px',
                borderRadius: '30px',
                border: '1px solid var(--color-gold-antique)',
                boxShadow: '0 6px 20px rgba(22, 41, 32, 0.35)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <span>✉️</span>
              <span>Open with Sacred Music 🎵</span>
            </button>

            <button
              onClick={() => handleOpen(false)}
              style={{
                background: 'transparent',
                color: 'var(--color-ink-muted)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                padding: '8px 16px',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                transition: 'color 0.2s ease',
              }}
            >
              Open Silently 🔇
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
