import React, { useEffect } from 'react';
import { CardOpeningPreloader } from './components/CardOpeningPreloader';
import { AuspiciousShloka } from './components/AuspiciousShloka';
import { ThreeRingsCanvas } from './components/ThreeRingsCanvas';
import { FormalInvitation } from './components/FormalInvitation';
import { CoupleMonogram } from './components/CoupleMonogram';
import { MuhuratCountdown } from './components/MuhuratCountdown';
import { SanctuaryVenue } from './components/SanctuaryVenue';
import { TraditionalBlessings } from './components/TraditionalBlessings';
import { FloatingAudio } from './components/FloatingAudio';

export const App: React.FC = () => {
  // IntersectionObserver for cinematic scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12,
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Force top elements to be visible immediately on load
    const topElements = document.querySelectorAll('#main-invitation > section:first-of-type .reveal, #main-invitation > .scene-block:first-of-type');
    topElements.forEach((el) => el.classList.add('is-visible'));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      {/* Royal Gatefold Card Opening Preloading Screen */}
      <CardOpeningPreloader />

      <main className="royal-invitation-card" id="main-invitation">
        {/* 4 Sacred Alpona Gold Corner Flourishes */}
        <img
          src="/assets/frames/deco-alpona-corner.webp"
          alt="Alpona flourish"
          className="corner-flourish top-left"
          aria-hidden="true"
        />
        <img
          src="/assets/frames/deco-alpona-corner.webp"
          alt="Alpona flourish"
          className="corner-flourish top-right"
          aria-hidden="true"
        />
        <img
          src="/assets/frames/deco-alpona-corner.webp"
          alt="Alpona flourish"
          className="corner-flourish bottom-left"
          aria-hidden="true"
        />
        <img
          src="/assets/frames/deco-alpona-corner.webp"
          alt="Alpona flourish"
          className="corner-flourish bottom-right"
          aria-hidden="true"
        />

        {/* =================================================================
            SCENE 1: THE ROYAL PRELUDE & 3D RINGS SHOWCASE
        ================================================================== */}
        <AuspiciousShloka />
        <ThreeRingsCanvas />

        <hr className="scene-divider" />

        {/* =================================================================
            SCENE 2: THE FORMAL INVITATION
        ================================================================== */}
        <FormalInvitation />

        <hr className="scene-divider" />

        {/* =================================================================
            SCENE 3: THE COUPLE MONOGRAM & SACRED UNION
        ================================================================== */}
        <CoupleMonogram />

        <hr className="scene-divider" />

        {/* =================================================================
            SCENE 4: AUSPICIOUS MUHURAT & LIVE COUNTDOWN
        ================================================================== */}
        <MuhuratCountdown />

        <hr className="scene-divider" />

        {/* =================================================================
            SCENE 5: THE SACRED SANCTUARY (AMRIT FARMS)
        ================================================================== */}
        <SanctuaryVenue />

        <hr className="scene-divider" />

        {/* =================================================================
            SCENE 6: TRADITIONAL BLESSINGS & HOSPITALITY
        ================================================================== */}
        <TraditionalBlessings />
      </main>

      {/* Floating Sacred Audio Ambient Player (Autoplay with gesture fallback) */}
      <FloatingAudio />
    </div>
  );
};

export default App;
