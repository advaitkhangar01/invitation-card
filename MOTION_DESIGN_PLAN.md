# Master Motion Design & Choreography Plan
## Isha Bawankule & Ashish Deshmukh — Premium Wedding Invitation Experience

**Document Reference:** `MDP-2026-ISHA-ASHISH-01`  
**Choreographer:** Senior Motion Graphics Researcher & Interaction Designer  
**Date:** 17 November 2026  
**Status:** Motion Choreography Specifications Completed  

---

## 1. Creative Motion Philosophy: "Liquid Silk & Atmospheric Physics"

Digital invitations often fall victim to jarring scroll-jacking, cheap bouncing buttons, spinning flower GIFs, or predictable envelope-opening animations. 

For Isha & Ashish, our motion language is founded on **restraint, physical weight, and optical elegance**:
- **Continuous Scrubbing over Autoplay:** Animations are mapped directly to the visitor's scroll progression using GSAP ScrollTrigger, ensuring guests control their own reading pace.
- **Natural Fluid Easing:** Key transitions utilize bespoke exponential cubic-bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)` and `cubic-bezier(0.25, 0.1, 0.25, 1)`), avoiding robotic linear motion.
- **Micro-Interaction Polish:** Gentle tactile feedback on touch devices, subtle 3D lighting glints upon orientation changes, and velvet-smooth button states.

---

## 2. Stage-by-Stage Motion Sequence

### Stage 1: The Opening & 3D Interactive Rings (0vh – 100vh)
- **Scene State:** Initial viewport landing.
- **Action Sequence:**
  1. **T+0.0s to T+0.8s:** The fine stucco background texture (`white_wall.jpg`) fades in from 0 to 12% opacity with a soft warm ambient radial light glow.
  2. **T+0.4s to T+1.2s:** The introductory phrase *"We are Inviting you"* reveals via letter-spacing expansion (starting at `0.1em`, relaxing to `0.25em`) and gentle upward drift.
  3. **T+0.6s to T+1.8s:** The Three.js 3D viewport activates. The dual gold & diamond rings (`Angel_Ring_Gold.glb` and `Bijith_Ring.glb`) ascend gently into the center with a subtle rotating tumble, glinting in the virtual studio environment light (`skybox.jpg`).
  4. **User Scroll / Touch Interaction:** When the visitor begins to scroll or touches the screen, the two rings smoothly rotate toward each other, aligning into an interlocking infinity/wedding knot composition.
  5. **T+2.0s onwards:** A tiny, elegant scroll prompt chevron (`angle-down.svg`) pulses with a soft vertical oscillation (±6px over 2.4s).

---

### Stage 2: Hero Reveal & Couple Names (100vh – 180vh)
- **Scene State:** The visitor scrolls into the main announcement.
- **Action Sequence:**
  1. **Scrub 100vh – 130vh:** The 3D canvas gently eases up and scales from `1.0` to `0.75` scale, decreasing in opacity as the gold architectural crest (`arch-gold.webp` / `header-motif.webp`) scales down from `1.05` to `1.0`.
  2. **Scrub 120vh – 150vh:** Editorial headline reveal. The names **Isha Bawankule** and **Ashish Deshmukh** emerge from behind vertical clip-path masks:
     - `clip-path: inset(0 0 100% 0)` transition to `clip-path: inset(0 0 0% 0)`.
     - The ampersand (`&`) in `Pinyon Script` performs a subtle ink-flow scale reveal in antique gold (`#C5A059`).
  3. **Background Parallax:** The subtle rose-sage watercolor texture (`bg-rose-sage.webp`) drifts upward at 0.2x scroll velocity, creating authentic camera depth.

---

### Stage 3: Family Blessings & Spiritual Anchor (180vh – 260vh)
- **Scene State:** Honouring parents and cultural lineage.
- **Action Sequence:**
  1. **Card Entrance (Scrub 180vh – 210vh):** The handmade paper container card (`handmade-paper.png`) elevates with a soft multi-stage box shadow bloom (`0 10px 30px rgba(0,0,0,0.04)`).
  2. **Diya Lamp Bloom:** The traditional ceremonial brass lamp (`wed-lamp.webp`) reveals along the central axis with a soft golden glow pulsation around its flame tip (simulated via radial CSS drop-shadow filter).
  3. **Corner Alpona Unveiling:** The four traditional Indian corner motifs (`deco-alpona-corner.webp`) draw inward with staggered delays (top-left, top-right, bottom-left, bottom-right).
  4. **Parent Names Reveal:** Symmetrical parent headings glide inward with 15px horizontal translations into balanced alignment.

---

### Stage 4: Date, Day & Auspicious Muhurat (260vh – 350vh)
- **Scene State:** The focal event timing announcement.
- **Action Sequence:**
  1. **Monogram & Rings Accent (Scrub 260vh – 280vh):** The royal crest (`crest-royal.webp`) and vector rings emblem (`rings.svg`) anchor the top of the date module.
  2. **Monumental Numeral Reveal:** The date numeral **"17"** in `Bodoni Moda 84pt/110pt` scales cleanly from `0.92` to `1.0` with a linear shimmer gradient sweep traversing horizontally across its gold/charcoal fill.
  3. **Muhurat Clock Pulse:** The clock icon (`clock-o.svg`) and ceremony time **"5:40 PM"** gently highlight with an amber glow as the user reaches viewport center.
  4. **Jasmine Garland Sway:** Trailing jasmine strings (`deco-jasmine-string.webp`) at the card borders exhibit a microscopic physics-based sway (period: 4.5s, amplitude: 1.5° rotation), mimicking a gentle evening breeze.

---

### Stage 5: Venue Destination & Interactive Map (350vh – 440vh)
- **Scene State:** Amrit Farms venue presentation.
- **Action Sequence:**
  1. **Palace Architectural Elevation:** The royal palace motif (`palace-gold.webp`) glides upward, unveiling the destination card.
  2. **Venue Typography Reveal:** The title **"Amrit Farms"** and address appear with crisp contrast.
  3. **CTA Button Activation:** The Google Maps button highlights with an expanding delicate gold border shimmer on touch/hover, assuring guests of instant navigation on tap.

---

### Stage 6: Concluding Warmth & Colophon (440vh – 520vh)
- **Scene State:** The emotional, dignified conclusion.
- **Action Sequence:**
  1. **Closing Blessing Reveal:** The concluding phrase in `Cormorant Garamond Italic` drifts in softly.
  2. **Sign-off Calligraphy:** *"With Love, Isha & Ashish"* renders in `Alex Brush` cursive script with an authentic penmanship stroke reveal.
  3. **Wax Seal Stamping:** The monogram wax seal (`seal.png`) settles into the base with a microscopic, satisfying scale settle (`1.08` to `1.0`).
  4. **Celebratory Sparkle Drift:** A restrained burst of ambient vector sparkles (`partyyy.json` Lottie) dissipates into the margins, leaving the guest on a calm, pristine note.

---

## 3. Technology Implementation Matrix & Performance Benchmarks

| Motion Component | Technology Stack | Hardware Target | Performance Target | Fallback Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **3D Rings Interactive Opening** | Three.js (WebGL 2.0 / WebGL 1.0) | Mobile GPU (Adreno 610+, Mali G57+, Apple A12+) | Solid 60 FPS | Static studio render of 3D rings with CSS specular sheen |
| **Scroll Choreography** | GSAP 3.x + ScrollTrigger | All browsers | Sub-16ms frame budget | Native CSS sticky / IntersectionObserver |
| **Text & Mask Reveals** | Hardware-accelerated CSS `clip-path` & `transform` | Universal | 60 FPS | Standard opacity fade |
| **Botanical Parallax** | `translate3d(x, y, 0)` with `will-change: transform` | Universal | Zero jank | Static botanical placement |
| **Celebratory Sparkles** | Lottie Web (Canvas or SVG renderer) | Universal | < 3% CPU utilization | Static sparkle sprite (`deco-sparkles.webp`) |
| **Accessibility (Reduced Motion)** | `@media (prefers-reduced-motion: reduce)` | Accessibility standard | 0 animations | All elements display immediately in final resting layout |

---

*Motion design plan formulated by Experience Choreographer. Ready for implementation.*
