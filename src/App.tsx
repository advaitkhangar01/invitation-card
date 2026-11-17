import React from 'react';
import { AuspiciousShloka } from './components/AuspiciousShloka';
import { ThreeRingsCanvas } from './components/ThreeRingsCanvas';
import { FormalInvitation } from './components/FormalInvitation';
import { CoupleMonogram } from './components/CoupleMonogram';
import { MuhuratCountdown } from './components/MuhuratCountdown';
import { SanctuaryVenue } from './components/SanctuaryVenue';
import { TraditionalBlessings } from './components/TraditionalBlessings';
import { FloatingAudio } from './components/FloatingAudio';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <main className="royal-invitation-card" id="main-invitation">
        {/* 4 Sacred Alpona Gold Corner Flourishes */}
        <img
          src="/assets/frames/alpona_corner_gold.png"
          alt="Alpona flourish"
          className="corner-flourish top-left"
          aria-hidden="true"
        />
        <img
          src="/assets/frames/alpona_corner_gold.png"
          alt="Alpona flourish"
          className="corner-flourish top-right"
          aria-hidden="true"
        />
        <img
          src="/assets/frames/alpona_corner_gold.png"
          alt="Alpona flourish"
          className="corner-flourish bottom-left"
          aria-hidden="true"
        />
        <img
          src="/assets/frames/alpona_corner_gold.png"
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

      {/* Floating Sacred Audio Ambient Player */}
      <FloatingAudio />
    </div>
  );
};

export default App;
