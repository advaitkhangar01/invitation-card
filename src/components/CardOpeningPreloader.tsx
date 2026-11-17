import React, { useState } from 'react';
import { WEDDING_DATA } from '../data/weddingData';

interface CardOpeningPreloaderProps {
  onOpen?: () => void;
}

export const CardOpeningPreloader: React.FC<CardOpeningPreloaderProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger sacred audio playback immediately via custom event
    window.dispatchEvent(new Event('start-wedding-audio'));
    if (onOpen) onOpen();

    // After animation completes, remove overlay from view
    setTimeout(() => {
      setIsClosed(false);
    }, 1400);
  };

  if (!isClosed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#0B1410',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1400px',
        overflow: 'hidden',
        padding: '16px',
        opacity: isOpening ? 0 : 1,
        transition: 'opacity 0.6s ease 0.8s',
        pointerEvents: isOpening ? 'none' : 'auto',
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(185, 154, 98, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Royal Card Envelope Container (Mobile-first ratio: 380px max width, ~560px height) */}
      <div
        onClick={handleOpen}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
          height: '580px',
          maxHeight: '90vh',
          borderRadius: '16px',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(185, 154, 98, 0.45)',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
          userSelect: 'none',
        }}
      >
        {/* Left Gatefold Flap */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50.5%',
            height: '100%',
            background: '#15241C',
            backgroundImage:
              'radial-gradient(circle at 100% 50%, rgba(185, 154, 98, 0.15) 0%, transparent 70%), url("/assets/textures/white_wall.jpg")',
            backgroundSize: 'cover',
            borderTopLeftRadius: '16px',
            borderBottomLeftRadius: '16px',
            border: '1px solid rgba(185, 154, 98, 0.45)',
            borderRight: '1px solid rgba(185, 154, 98, 0.7)',
            transformOrigin: 'left center',
            transform: isOpening ? 'rotateY(-125deg)' : 'rotateY(0deg)',
            transition: 'transform 1.1s cubic-bezier(0.25, 1, 0.5, 1)',
            boxShadow: isOpening ? 'none' : '5px 0 25px rgba(0, 0, 0, 0.5)',
            zIndex: 10,
            overflow: 'hidden',
          }}
        >
          {/* Inner gold frame on left flap */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              right: '6px',
              bottom: '12px',
              border: '1px solid rgba(185, 154, 98, 0.3)',
              borderRadius: '8px 0 0 8px',
              pointerEvents: 'none',
            }}
          />
          {/* Left corner alpona */}
          <img
            src="/assets/frames/deco-alpona-corner.webp"
            alt="flourish"
            style={{ position: 'absolute', top: '16px', left: '16px', width: '36px', height: '36px', opacity: 0.8 }}
          />
          <img
            src="/assets/frames/deco-alpona-corner.webp"
            alt="flourish"
            style={{ position: 'absolute', bottom: '16px', left: '16px', width: '36px', height: '36px', transform: 'scaleY(-1)', opacity: 0.8 }}
          />
        </div>

        {/* Right Gatefold Flap */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50.5%',
            height: '100%',
            background: '#15241C',
            backgroundImage:
              'radial-gradient(circle at 0% 50%, rgba(185, 154, 98, 0.15) 0%, transparent 70%), url("/assets/textures/white_wall.jpg")',
            backgroundSize: 'cover',
            borderTopRightRadius: '16px',
            borderBottomRightRadius: '16px',
            border: '1px solid rgba(185, 154, 98, 0.45)',
            borderLeft: 'none',
            transformOrigin: 'right center',
            transform: isOpening ? 'rotateY(125deg)' : 'rotateY(0deg)',
            transition: 'transform 1.1s cubic-bezier(0.25, 1, 0.5, 1)',
            boxShadow: isOpening ? 'none' : '-5px 0 25px rgba(0, 0, 0, 0.5)',
            zIndex: 10,
            overflow: 'hidden',
          }}
        >
          {/* Inner gold frame on right flap */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '6px',
              right: '12px',
              bottom: '12px',
              border: '1px solid rgba(185, 154, 98, 0.3)',
              borderRadius: '0 8px 8px 0',
              pointerEvents: 'none',
            }}
          />
          {/* Right corner alpona */}
          <img
            src="/assets/frames/deco-alpona-corner.webp"
            alt="flourish"
            style={{ position: 'absolute', top: '16px', right: '16px', width: '36px', height: '36px', transform: 'scaleX(-1)', opacity: 0.8 }}
          />
          <img
            src="/assets/frames/deco-alpona-corner.webp"
            alt="flourish"
            style={{ position: 'absolute', bottom: '16px', right: '16px', width: '36px', height: '36px', transform: 'scale(-1)', opacity: 0.8 }}
          />
        </div>

        {/* Center Card Presentation (Content on front of gatefold) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
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
              fontSize: '1.15rem',
              color: '#E0B970',
              fontWeight: 700,
              letterSpacing: '0.06em',
              marginBottom: '10px',
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>

          {/* Royal Crest */}
          <img
            src="/assets/frames/crest-royal.webp"
            alt="Royal Crest"
            style={{
              width: '64px',
              height: 'auto',
              marginBottom: '14px',
              filter: 'drop-shadow(0 4px 10px rgba(216, 189, 138, 0.35))',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-bright)',
              fontWeight: 600,
              marginBottom: '6px',
            }}
          >
            Wedding Invitation
          </p>

          {/* Monogram Names */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              lineHeight: 1.1,
              color: '#FDFBF7',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            Isha
          </h2>

          <span
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '2.4rem',
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
              fontSize: '2rem',
              lineHeight: 1.1,
              color: '#FDFBF7',
              fontWeight: 700,
              letterSpacing: '0.02em',
              marginBottom: '12px',
            }}
          >
            Ashish
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              color: '#D8BD8A',
              letterSpacing: '0.05em',
              marginBottom: '24px',
            }}
          >
            {WEDDING_DATA.date.fullFormatted}
          </p>

          {/* Royal Gold Wax Seal with Pulsing Invitation Cue */}
          <div
            style={{
              position: 'relative',
              width: '84px',
              height: '84px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(216, 189, 138, 0.4) 0%, transparent 70%)',
                animation: 'pulseGlow 2.5s infinite ease-in-out',
              }}
            />
            <img
              src="/assets/ornaments/seal.png"
              alt="Royal Wax Seal"
              style={{
                width: '74px',
                height: 'auto',
                filter: 'drop-shadow(0 6px 16px rgba(0, 0, 0, 0.6))',
              }}
            />
          </div>

          {/* Tap to Open Prompt Button */}
          <button
            onClick={handleOpen}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #B99A62 0%, #E8D3A7 50%, #B99A62 100%)',
              color: '#1A3127',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              borderRadius: '30px',
              border: '1px solid #FFE6B0',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(216, 189, 138, 0.4)',
              cursor: 'pointer',
              pointerEvents: 'auto',
              transition: 'transform 0.25s ease',
            }}
          >
            <span>✉️</span>
            <span>Tap to Open Invitation</span>
          </button>
        </div>
      </div>
    </div>
  );
};
