# REFINEMENT AUDIT REPORT
## Isha & Ashish — Premium Digital Wedding Invitation Microsite
**Audit Date:** 17 November 2026  
**Auditor:** Senior Lead UI/UX Engineer & Creative Art Director  
**Status:** Defect Analysis & Systematic Correction Plan  

---

## 1. Existing Component & Style Architecture

```
src/
├── App.tsx                          # Root container, scroll-reveal observer, corner flourishes
├── components/
│   ├── CardOpeningPreloader.tsx     # Current opening screen (Defect: Dark green gatefold treatment)
│   ├── AuspiciousShloka.tsx         # Sanskrit shloka + Brass Diya (Defect: text overflow, fake egg flame)
│   ├── ThreeRingsCanvas.tsx         # Real-time Three.js 3D interlocking gold & diamond rings
│   ├── FormalInvitation.tsx         # Parents' blessing & "We are Inviting you " statement
│   ├── CoupleMonogram.tsx           # Names (Defect: timid 40px type, lacks monumental authority)
│   ├── MuhuratCountdown.tsx         # Auspicious muhurat & countdown timer
│   ├── SanctuaryVenue.tsx           # Amrit Farms venue card + Google Maps CTA
│   ├── TraditionalBlessings.tsx     # Wax seal & hosts signature
│   └── FloatingAudio.tsx            # Web Audio API synthesizer
├── styles/
│   ├── fonts.css                    # Self-hosted WOFF2 font declarations
│   └── index.css                    # CSS tokens, mobile padding, card sizing
└── data/weddingData.ts              # Verified single source of truth
```

---

## 2. Identified Visual Defects & Root Cause Analysis

### Defect 1: Timid Typography & Lack of Visual Authority
- **Symptom:** Couple names (*Isha Bawankule & Ashish Deshmukh*) are rendered at `2.5rem` (40px), feeling secondary rather than dominating the luxury stationery composition.
- **Root Cause:** Sizing used fixed `rem` values rather than expressive responsive `clamp()` scales. Section titles are at `1.625rem` (26px) and body text at `0.8125rem` (13px), which diminishes the regal editorial hierarchy.
- **Correction:** Implement responsive `clamp()` typography:
  - Couple Names: `clamp(3rem, 8.5vw, 6.5rem)` (48px–104px).
  - Headings: `clamp(2.1rem, 5.5vw, 3.8rem)` (34px–60px).
  - Important Date: `clamp(2rem, 5vw, 3.5rem)` (32px–56px).
  - Body Text: `clamp(1.05rem, 2.8vw, 1.25rem)` (17px–20px).
  - Use high-contrast deep umber ink (`#1E1815`) for maximum crisp letterpress presence.

### Defect 2: Inappropriate Green Opening Card Screen
- **Symptom:** `CardOpeningPreloader.tsx` uses a dark forest-green `#15241C` gatefold card cover.
- **Root Cause:** Green was chosen to match the outer background theme, but real luxury Indian wedding invitations use warm ivory, heavy handmade cotton rag, or champagne gold paper with gold debossing as the first touchpoint.
- **Correction:** Redesign the opening screen to represent an authentic physical wedding envelope/invitation card made of warm ivory handmade paper (`#FDFBF7`), subtle gold-deckled borders, realistic contact shadows, embossed royal monogram crest, and an authentic gold wax seal.

### Defect 3: Mobile Card Fails Edge-to-Edge Connection
- **Symptom:** On mobile portrait, there are noticeable green bands/margins at the top (32px), bottom (80px), and sides (16px).
- **Root Cause:** `body` in `index.css` has `padding: 32px 16px 80px`, and `.app-container` has margins.
- **Correction:**
  - For mobile viewports (`@media (max-width: 600px)`):
    - `body` padding set to `0`.
    - `.app-container` set to `width: 100%; max-width: 100%`.
    - `.royal-invitation-card` set to `min-height: 100svh; border-radius: 0; padding: env(safe-area-inset-top, 24px) 20px env(safe-area-inset-bottom, 32px);`.
    - Card extends 100% edge-to-edge seamlessly from top to bottom of the mobile viewport, with the inner gold ornamental frame neatly inset by 12px.
  - For desktop viewports (`≥ 601px`), retain a majestic centered stationery card with balanced margins and ambient backdrop.

### Defect 4: Artificial AI Appearance & Lack of Physical Material Depth
- **Symptom:** The card looks like a flat CSS box rather than a heavy physical paper sheet.
- **Root Cause:** Insufficient layered material physics: lacks directional lighting, paper luminance gradients, subtle debossed foil shadows, and tactile depth.
- **Correction:**
  - Layer fine plaster paper grain (`white_wall.jpg` with high-frequency noise blend).
  - Add multi-stage ambient contact shadows (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 45px -10px rgba(26,49,39,0.18), 0 0 0 1px rgba(185,154,98,0.4)`).
  - Add inner debossed gold foil hairline borders with 1px light highlight.
  - Replace artificial egg-shaped CSS flame with an organic multi-point SVG/flickering teardrop sacred flame.

### Defect 5: Text Clipping on Narrow Mobile Viewports
- **Symptom:** As seen in user screenshot `media_1794935300990_30252060.png`, *"WITH THE DIVINE GRACE AND BLESSINGS OF THE ALMIGHTY"* is clipped on the left and right edges.
- **Root Cause:** Excessively wide letter spacing (`letter-spacing: 0.08em`) on a single un-wrapped line on small screens.
- **Correction:** Apply `max-width: 92%`, responsive letter-spacing, and controlled wrapping so no text ever touches or clips against card borders.

### Defect 6: Sound Experience Needs Consent & Redesign
- **Symptom:** Current sound plays automatically without explicit user choice and lacks gentle acoustic warmth.
- **Root Cause:** Browser gesture workaround forced auto-play on first touch.
- **Correction:** Redesign the opening card to give the guest an explicit, elegant choice:
  - Button 1: *"Enter with Sacred Music 🎵"*
  - Button 2: *"Enter Silently 🔇"*
  - Mute/unmute floating toggle remains accessible throughout.
  - Implement gentle chime on card opening and soothing Tanpura Sa-Pa drone.

---

## 3. Files Requiring Modification

| File | Changes Required |
| :--- | :--- |
| `src/styles/index.css` | Edge-to-edge mobile card layout (`100svh`/`100dvh`), responsive typography scale tokens, high-contrast ink colors, paper texture depth. |
| `src/components/CardOpeningPreloader.tsx` | Replace green card with warm ivory luxury handmade stationery card, realistic wax seal, edge-to-edge mobile geometry, sound choice buttons. |
| `src/components/CoupleMonogram.tsx` | Increase name font size to `clamp(3rem, 8.5vw, 6.5rem)`, refined ampersand, balanced vertical hierarchy. |
| `src/components/AuspiciousShloka.tsx` | Fix horizontal text clipping, replace artificial egg flame with organic SVG sacred teardrop flame, increase shloka presence. |
| `src/components/FormalInvitation.tsx` | Increase headings and parents' blessing typography, enhanced card paper borders. |
| `src/components/MuhuratCountdown.tsx` | Increase date and number scale, responsive digit sizing. |
| `src/components/SanctuaryVenue.tsx` | Larger venue title, improved card hierarchy. |
| `src/components/TraditionalBlessings.tsx` | Enhanced hosts signature typography. |
| `src/components/FloatingAudio.tsx` | Add user-consented audio initialization, gentle chime sound on opening. |
| `DESIGN_MOCKUP.html` | Mirror all typography, edge-to-edge mobile card, and ivory preloader updates. |

---

## 4. Proposed Implementation Sequence

1. **Phase 2:** Typography Scale & Hierarchy Enhancement in `index.css` and all scene components.
2. **Phase 3:** Mobile Edge-to-Edge Card Layout (`100svh`/`100dvh`) in `index.css` and `App.tsx`.
3. **Phase 4:** Opening Screen Overhaul (Warm Ivory Stationery, Wax Seal, Sound Choice) in `CardOpeningPreloader.tsx`.
4. **Phase 5:** Material Realism & Depth (Organic Flame, Paper Grain, Multi-plane Shadows) in `AuspiciousShloka.tsx` and card styles.
5. **Phase 6:** Sound Redesign (Optional, User-consented, Chime + Drone) in `FloatingAudio.tsx`.
6. **Phase 7:** Validation & Production Compilation.
