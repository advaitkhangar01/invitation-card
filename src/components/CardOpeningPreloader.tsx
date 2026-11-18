import React, { useEffect, useState } from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const CardOpeningPreloader: React.FC = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    // 1. Initial stable render of closed luxury invitation cover (850ms dwell to appreciate stationery)
    // 2. Automatically initiate the smooth physical card gatefold opening
    const timerOpen = setTimeout(() => {
      setIsOpening(true);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 850);

    // 3. Complete transition and unmount preloader overlay after flaps have fully swung open
    const timerComplete = setTimeout(() => {
      setIsClosed(false);
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
      window.scrollTo(0, 0);
    }, 2250);

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
        backgroundColor: '#09140F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1800px',
        overflow: 'hidden',
        padding: '0',
        opacity: isOpening ? 0 : 1,
        transition: 'opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1) 1.25s',
        pointerEvents: isOpening ? 'none' : 'auto',
      }}
      aria-hidden={!isClosed}
    >
      {/* Ambient Warm Golden Aura */}
      <div
        style={{
          position: 'absolute',
          width: '580px',
          height: '580px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Royal Card Envelope Container (Mobile-first edge-to-edge, Desktop framed) */}
      <div
        className="preloader-envelope"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '490px',
          height: '100svh',
          maxHeight: '100dvh',
          transformStyle: 'preserve-3d',
          userSelect: 'none',
        }}
      >
        <style>{`
          @media (min-width: 601px) {
            .preloader-envelope {
              height: 690px !important;
              max-height: 92vh !important;
              border-radius: 18px !important;
              box-shadow: 0 30px 85px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(197, 160, 89, 0.45) !important;
            }
            .preloader-flap-left {
              border-top-left-radius: 18px !important;
              border-bottom-left-radius: 18px !important;
            }
            .preloader-flap-right {
              border-top-right-radius: 18px !important;
              border-bottom-right-radius: 18px !important;
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

        {/* Left Gatefold Flap (Handmade Cotton Paper with Inset Gold Foil) */}
        <div
          className="preloader-flap-left"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50.5%',
            height: '100%',
            backgroundColor: '#FAF7F2',
            backgroundImage:
              'radial-gradient(circle at 100% 50%, rgba(229, 195, 104, 0.1) 0%, transparent 65%), url(/assets/textures/luxury_cotton_paper.jpg)',
            backgroundSize: '512px 512px',
            border: '1px solid rgba(197, 160, 89, 0.45)',
            borderRight: '1.5px solid rgba(197, 160, 89, 0.75)',
            transformOrigin: 'left center',
            transform: isOpening ? 'rotateY(-124deg)' : 'rotateY(0deg)',
            transition: 'transform 1.35s cubic-bezier(0.25, 1, 0.5, 1)',
            boxShadow: isOpening ? '8px 0 32px rgba(0, 0, 0, 0.45)' : '6px 0 24px rgba(0, 0, 0, 0.28)',
            zIndex: 10,
            overflow: 'hidden',
          }}
        >
          {/* Inner Gold Foil Frame on Left Flap */}
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              right: '6px',
              bottom: '14px',
              border: '1.5px solid rgba(197, 160, 89, 0.45)',
              borderRight: 'none',
              pointerEvents: 'none',
            }}
          />
          {/* Corner Gold Foil Vector Marks */}
          <svg style={{ position: 'absolute', top: '18px', left: '18px', width: '38px', height: '38px' }} viewBox="0 0 50 50">
            <path d="M 4 28 L 4 6 C 4 4.9, 4.9 4, 6 4 L 28 4" stroke="#C5A059" strokeWidth="1.5" fill="none" />
            <circle cx="8" cy="8" r="2" fill="#E5C368" />
          </svg>
          <svg style={{ position: 'absolute', bottom: '18px', left: '18px', width: '38px', height: '38px' }} viewBox="0 0 50 50">
            <path d="M 4 22 L 4 44 C 4 45.1, 4.9 46, 6 46 L 28 46" stroke="#C5A059" strokeWidth="1.5" fill="none" />
            <circle cx="8" cy="42" r="2" fill="#E5C368" />
          </svg>
        </div>

        {/* Right Gatefold Flap (Handmade Cotton Paper with Inset Gold Foil) */}
        <div
          className="preloader-flap-right"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50.5%',
            height: '100%',
            backgroundColor: '#FAF7F2',
            backgroundImage:
              'radial-gradient(circle at 0% 50%, rgba(229, 195, 104, 0.1) 0%, transparent 65%), url(/assets/textures/luxury_cotton_paper.jpg)',
            backgroundSize: '512px 512px',
            border: '1px solid rgba(197, 160, 89, 0.45)',
            borderLeft: 'none',
            transformOrigin: 'right center',
            transform: isOpening ? 'rotateY(124deg)' : 'rotateY(0deg)',
            transition: 'transform 1.35s cubic-bezier(0.25, 1, 0.5, 1)',
            boxShadow: isOpening ? '-8px 0 32px rgba(0, 0, 0, 0.45)' : '-6px 0 24px rgba(0, 0, 0, 0.28)',
            zIndex: 10,
            overflow: 'hidden',
          }}
        >
          {/* Inner Gold Foil Frame on Right Flap */}
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '6px',
              right: '14px',
              bottom: '14px',
              border: '1.5px solid rgba(197, 160, 89, 0.45)',
              borderLeft: 'none',
              pointerEvents: 'none',
            }}
          />
          {/* Corner Gold Foil Vector Marks */}
          <svg style={{ position: 'absolute', top: '18px', right: '18px', width: '38px', height: '38px' }} viewBox="0 0 50 50">
            <path d="M 46 28 L 46 6 C 46 4.9, 45.1 4, 44 4 L 22 4" stroke="#C5A059" strokeWidth="1.5" fill="none" />
            <circle cx="42" cy="8" r="2" fill="#E5C368" />
          </svg>
          <svg style={{ position: 'absolute', bottom: '18px', right: '18px', width: '38px', height: '38px' }} viewBox="0 0 50 50">
            <path d="M 46 22 L 46 44 C 46 45.1, 45.1 46, 44 46 L 22 46" stroke="#C5A059" strokeWidth="1.5" fill="none" />
            <circle cx="42" cy="42" r="2" fill="#E5C368" />
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
              marginBottom: '10px',
            }}
          >
            {WEDDING_DATA.shloka.sanskrit}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.72rem, 1.8vw, 0.84rem)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-deep)',
              fontWeight: 700,
              marginBottom: '10px',
            }}
          >
            Wedding Invitation
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
              margin: '4px 0',
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
              fontSize: 'clamp(1.05rem, 2.8vw, 1.25rem)',
              color: 'var(--color-ink-primary)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              marginBottom: '22px',
            }}
          >
            {WEDDING_DATA.date.fullFormatted}
          </p>

          {/* Royal Hot-Stamped Gold Foil Wax Seal */}
          <div
            style={{
              position: 'relative',
              width: '84px',
              height: '84px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '92px',
                height: '92px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(229, 195, 104, 0.35) 0%, transparent 70%)',
              }}
            />
            {/* Handcrafted Royal Wax Seal Vector Artwork */}
            <svg
              viewBox="0 0 100 100"
              width="80"
              height="80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.32))' }}
            >
              <defs>
                <linearGradient id="sealGoldPreloader" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF8DF" />
                  <stop offset="35%" stopColor="#E5C368" />
                  <stop offset="70%" stopColor="#8C6F32" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
                <linearGradient id="sealInnerPreloader" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C5A059" />
                  <stop offset="100%" stopColor="#7D5F26" />
                </linearGradient>
              </defs>
              {/* Organic Wax Edge Scallops */}
              <circle cx="50" cy="50" r="44" fill="url(#sealGoldPreloader)" />
              <path
                d="M 50 4 C 62 3, 74 12, 85 20 C 95 30, 97 44, 94 58 C 91 72, 80 84, 68 91 C 54 98, 38 95, 26 89 C 14 82, 4 69, 5 54 C 6 40, 14 26, 26 16 C 36 8, 42 4, 50 4 Z"
                fill="url(#sealGoldPreloader)"
              />
              <circle cx="50" cy="50" r="34" fill="url(#sealInnerPreloader)" stroke="#FFF8DF" strokeWidth="1" />
              <circle cx="50" cy="50" r="30" stroke="#FFF8DF" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />
              {/* Couple Monogram IA */}
              <text
                x="50"
                y="58"
                textAnchor="middle"
                fill="#FFFBF0"
                fontFamily="var(--font-display)"
                fontSize="24"
                fontWeight="700"
                letterSpacing="1"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.45)' }}
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
