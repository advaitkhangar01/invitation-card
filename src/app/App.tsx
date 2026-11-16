import React, { useState } from 'react';
import { EnvelopeIntro } from '../components/invitation/EnvelopeIntro';
import { InvitationCard } from '../components/invitation/InvitationCard';
import { CoupleSection } from '../components/invitation/CoupleSection';
import { FamilySection } from '../components/invitation/FamilySection';
import { WeddingDateSection } from '../components/invitation/WeddingDateSection';
import { VenueSection } from '../components/invitation/VenueSection';
import { ClosingSection } from '../components/invitation/ClosingSection';
import { MusicControl } from '../components/invitation/MusicControl';
import { ScrollIndicator } from '../components/invitation/ScrollIndicator';

export const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleEnvelopeComplete = () => {
    setIsOpened(true);
    // Smooth scroll to top of card if needed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-viewport-wrapper">
      {/* Desktop Flanking Botanical Vines */}
      <div className="desktop-flank-left" aria-hidden="true">
        <svg viewBox="0 0 180 600" width="100%" height="100%" fill="none">
          <path d="M160 20 C100 120, 140 240, 80 340 C20 440, 90 520, 40 580" stroke="#879487" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M125 100 C110 90, 95 105, 110 115Z" fill="#879487" opacity="0.6" />
          <path d="M135 180 C115 170, 105 190, 125 200Z" fill="#B69A69" opacity="0.5" />
          <path d="M90 280 C70 270, 60 290, 80 300Z" fill="#879487" opacity="0.6" />
          <path d="M75 390 C55 380, 45 400, 65 410Z" fill="#B69A69" opacity="0.5" />
          <circle cx="115" cy="140" r="3" fill="#D9BDB3" opacity="0.7" />
          <circle cx="85" cy="330" r="3" fill="#D9BDB3" opacity="0.7" />
        </svg>
      </div>

      <div className="desktop-flank-right" aria-hidden="true">
        <svg viewBox="0 0 180 600" width="100%" height="100%" fill="none">
          <path d="M160 20 C100 120, 140 240, 80 340 C20 440, 90 520, 40 580" stroke="#879487" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M125 100 C110 90, 95 105, 110 115Z" fill="#879487" opacity="0.6" />
          <path d="M135 180 C115 170, 105 190, 125 200Z" fill="#B69A69" opacity="0.5" />
          <path d="M90 280 C70 270, 60 290, 80 300Z" fill="#879487" opacity="0.6" />
          <circle cx="115" cy="140" r="3" fill="#D9BDB3" opacity="0.7" />
        </svg>
      </div>

      {/* Main Centered Mobile Folio Container */}
      <main className="invitation-container" id="main-content">
        {/* Tactile Paper Texture */}
        <div className="paper-texture-overlay" aria-hidden="true" />

        {!isOpened ? (
          <EnvelopeIntro onOpenComplete={handleEnvelopeComplete} />
        ) : (
          <div className="invitation-content-unfolded animate-fade-in">
            {/* Section 02: Main Invitation Card */}
            <InvitationCard />
            <ScrollIndicator />

            {/* Section 03: Couple Introduction */}
            <CoupleSection />

            {/* Section 04: Family Acknowledgement */}
            <FamilySection />

            {/* Section 05: Save the Date Experience */}
            <WeddingDateSection />

            {/* Section 06: Venue Reveal */}
            <VenueSection />

            {/* Section 07: Final Invitation & Closing */}
            <ClosingSection />

            {/* Discreet Floating Music Control */}
            <MusicControl />
          </div>
        )}
      </main>
    </div>
  );
};
