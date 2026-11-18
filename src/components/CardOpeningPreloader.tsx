import React, { useEffect, useState } from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const CardOpeningPreloader: React.FC = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    // 1. Initial stable render of closed luxury invitation cover
    // 2. Automatically initiate the smooth physical card opening after 850ms
    const timerOpen = setTimeout(() => {
      setIsOpening(true);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 850);

    // 3. Complete transition and unmount preloader overlay
    const timerComplete = setTimeout(() => {
      setIsClosed(false);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 2100);

    return () => {
      clearTimeout(timerOpen);
      clearTimeout(timerComplete);
    };
  }, []);

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
        transition: 'opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1) 0.55s',
        pointerEvents: isOpening ? 'none' : 'auto',
      }}
      aria-hidden={!isClosed}
    >
      {/* Ambient Warm Golden Aura */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(179, 145, 85, 0.16) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Royal Card Envelope Container (Mobile-first edge-to-edge, Desktop framed) */}
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
              'radial-gradient(circle at 100% 50%, rgba(179, 145, 85, 0.12) 0%, transparent 65%), linear-gradient(135deg, rgba(255,255,255,0.7), rgba(243,236,224,0.7))',
            border: '1px solid rgba(179, 145, 85, 0.45)',
            borderRight: '1px solid rgba(179, 145, 85, 0.75)',
            transformOrigin: 'left center',
            transform: isOpening ? 'rotateY(-125deg)' : 'rotateY(0deg)',
            transition: 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
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
          {/* Corner gold vector marks */}
          <svg style={{ position: 'absolute', top: '18px', left: '18px', width: '38px', height: '38px' }} viewBox="0 0 50 50">
            <path d="M 4 28 L 4 6 C 4 4.9, 4.9 4, 6 4 L 28 4" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <circle cx="8" cy="8" r="2" fill="#D4AF37" />
          </svg>
          <svg style={{ position: 'absolute', bottom: '18px', left: '18px', width: '38px', height: '38px' }} viewBox="0 0 50 50">
            <path d="M 4 22 L 4 44 C 4 45.1, 4.9 46, 6 46 L 28 46" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <circle cx="8" cy="42" r="2" fill="#D4AF37" />
          </svg>
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
              'radial-gradient(circle at 0% 50%, rgba(179, 145, 85, 0.12) 0%, transparent 65%), linear-gradient(135deg, rgba(255,255,255,0.7), rgba(243,236,224,0.7))',
            border: '1px solid rgba(179, 145, 85, 0.45)',
            borderLeft: 'none',
            transformOrigin: 'right center',
            transform: isOpening ? 'rotateY(125deg)' : 'rotateY(0deg)',
            transition: 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
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
          {/* Corner gold vector marks */}
          <svg style={{ position: 'absolute', top: '18px', right: '18px', width: '38px', height: '38px' }} viewBox="0 0 50 50">
            <path d="M 46 28 L 46 6 C 46 4.9, 45.1 4, 44 4 L 22 4" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <circle cx="42" cy="8" r="2" fill="#D4AF37" />
          </svg>
          <svg style={{ position: 'absolute', bottom: '18px', right: '18px', width: '38px', height: '38px' }} viewBox="0 0 50 50">
            <path d="M 46 22 L 46 44 C 46 45.1, 45.1 46, 44 46 L 22 46" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <circle cx="42" cy="42" r="2" fill="#D4AF37" />
          </svg>
        </div>

        {/* Front Presentation (Automatic, Elegant Letterpress Stationery Display) */}
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
              fontSize: 'clamp(1.2rem, 3.4vw, 1.55rem)',
              color: 'var(--color-sacred-kumkum)',
              fontWeight: 700,
              letterSpacing: '0.06em',
              marginBottom: '8px',
            }}
          >
            {WEDDING_DATA.shloka.sanskrit}
          </p>

          {/* Royal Crest Vector Emblem */}
          <svg
            viewBox="0 0 100 80"
            width="64"
            height="52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginBottom: '10px', filter: 'drop-shadow(0 3px 6px rgba(179,145,85,0.4))' }}
          >
            <path d="M 50 6 L 56 22 L 72 24 L 60 36 L 64 52 L 50 44 L 36 52 L 40 36 L 28 24 L 44 22 Z" fill="url(#crestGold)" />
            <path d="M 20 45 C 32 35, 42 55, 50 66 C 58 55, 68 35, 80 45" stroke="#B39155" strokeWidth="1.8" fill="none" />
            <circle cx="50" cy="30" r="4" fill="#881C22" />
            <defs>
              <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B8" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#966F23" />
              </linearGradient>
            </defs>
          </svg>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.72rem, 1.8vw, 0.85rem)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-deep)',
              fontWeight: 700,
              marginBottom: '6px',
            }}
          >
            Royal Wedding Invitation
          </p>

          {/* Couple Names on Cover */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 7.5vw, 3.6rem)',
              lineHeight: 1.1,
              color: 'var(--color-forest-deep)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              margin: 0,
            }}
          >
            Isha
          </h2>

          <span
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(2.4rem, 7vw, 3.6rem)',
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
            Ashish
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.05rem, 2.8vw, 1.3rem)',
              color: 'var(--color-ink-charcoal)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              marginBottom: '20px',
            }}
          >
            {WEDDING_DATA.date.fullFormatted}
          </p>

          {/* Royal Hot-Stamped Gold Foil Wax Seal */}
          <div
            style={{
              position: 'relative',
              width: '82px',
              height: '82px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(179, 145, 85, 0.4) 0%, transparent 70%)',
                animation: 'pulseGlow 2.5s infinite ease-in-out',
              }}
            />
            {/* Handcrafted Royal Wax Seal Vector Artwork */}
            <svg
              viewBox="0 0 100 100"
              width="78"
              height="78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.3))' }}
            >
              <defs>
                <linearGradient id="sealGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF2B8" />
                  <stop offset="35%" stopColor="#D4AF37" />
                  <stop offset="70%" stopColor="#966F23" />
                  <stop offset="100%" stopColor="#E2BE66" />
                </linearGradient>
                <linearGradient id="sealInner" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B38728" />
                  <stop offset="100%" stopColor="#7A5618" />
                </linearGradient>
              </defs>
              {/* Organic Wax Edge Scallops */}
              <circle cx="50" cy="50" r="44" fill="url(#sealGold)" />
              <path
                d="M 50 4 C 62 3, 74 12, 85 20 C 95 30, 97 44, 94 58 C 91 72, 80 84, 68 91 C 54 98, 38 95, 26 89 C 14 82, 4 69, 5 54 C 6 40, 14 26, 26 16 C 36 8, 42 4, 50 4 Z"
                fill="url(#sealGold)"
              />
              <circle cx="50" cy="50" r="34" fill="url(#sealInner)" stroke="#FFF2B8" strokeWidth="1" />
              <circle cx="50" cy="50" r="30" stroke="#FFF2B8" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />
              {/* Couple Monogram IA */}
              <text
                x="50"
                y="58"
                textAnchor="middle"
                fill="#FFF4D0"
                fontFamily="var(--font-display)"
                fontSize="24"
                fontWeight="700"
                letterSpacing="1"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
              >
                I&amp;A
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
