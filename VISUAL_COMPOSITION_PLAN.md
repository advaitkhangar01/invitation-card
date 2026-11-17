# Detailed Visual Composition & Art Direction Plan
## Isha Bawankule & Ashish Deshmukh — Premium Wedding Invitation Experience

**Document Reference:** `VCP-2026-ISHA-ASHISH-01`  
**Art Director:** Senior Experience Designer & Editorial Director  
**Date:** 17 November 2026  
**Status:** Architecture Finalized for Design Review  

---

## 1. Composition Philosophy: Continuous Editorial Canvas

The experience is deliberately engineered as a **seamless vertical editorial canvas**, not a disjointed deck of cards. The tactile plaster/handmade paper background (`white_wall.jpg` + subtle warmth) extends uninterrupted from viewport start to finish. Depth is achieved through layered z-indices:

```text
Layer 4 [Foreground Particles / Sparkles]: z-index 40 (Fast Parallax 1.35x)
Layer 3 [Content & Editorial Typography]: z-index 30 (Natural Scroll 1.0x)
Layer 2 [Botanical Plates, Garlands, 3D Canvas]: z-index 20 (Medium Parallax 0.4x)
Layer 1 [Architectural Frames & Watercolor Wash]: z-index 10 (Slow Parallax 0.15x)
Layer 0 [Base Fine Stucco / Handmade Paper Texture]: z-index 0 (Fixed Base)
```

---

## 2. Section-by-Section Composition Specifications

### 2.1 Section 1: Opening / 3D Interactive Prelude
- **Intended Visual Objective:** Create an immediate sense of wonder and royal intimacy. Hook the guest with an interactive 3D centerpiece rather than a generic flat loader or cheesy envelope flap.
- **Background Treatment:** Fixed cream ivory base (`#FAF7F2`) with the fine plaster texture overlay (`white_wall.jpg`) at 12% opacity, complemented by a soft radial golden light glow (`rgba(212, 175, 55, 0.08)`).
- **Main Asset:** Dual 3D Wedding Rings (`Angel_Ring_Gold.glb` + `Bijith_Ring.glb`) floating within a Three.js WebGL canvas.
- **Supporting Assets:** Subtle ambient sparkle points (`deco-sparkles.webp` and `partyyy.json` particles).
- **Typography:**
  - *"We are Inviting you"* in `Cormorant Garamond` (Small Caps, tracking +0.25em, size 16px/18px, `#7A6855`).
- **Asset Positioning & Alignment:** Centered horizontally (`50%` viewport width) and placed in the upper-middle third (`40%` viewport height).
- **Relative Scale:** 3D rings occupy ~280px x 280px viewport bounding box on mobile (350px on desktop).
- **Negative Space:** 45% of viewport remains empty to give the 3D jewelry room to breathe and rotate.
- **Text Positioning:** Sub-heading placed 40px above the rings; a delicate scroll indicator chevron (`angle-down.svg`) sits 40px from bottom.
- **Animation Behaviour:** Rings gently oscillate on an organic sine wave (±3° tilt, slow 360° yaw). On initial touch/scroll, the rings smoothly interlock with a golden specular glint.
- **Transition to Next Section:** As the user scrolls down, the 3D rings scale gently down to 0.7x and dissolve upward as the Hero section ascends.

---

### 2.2 Section 2: Main Hero & Couple Presentation
- **Intended Visual Objective:** Establish the monumental grandeur of the couple's union. Editorial high-fashion presentation.
- **Background Treatment:** Seamless cream textured canvas with a soft rose-sage watercolor wash (`bg-rose-sage.webp`) masked into an organic cloud shape at 25% opacity.
- **Main Asset:** Royal architectural gold arch (`arch-gold.webp`) or gold filigree header crest (`header-motif.webp`).
- **Supporting Assets:** Symmetrical native Indian botanical accents (*Amaltas* golden blossoms and *Bougainvillea* sprigs) flanking the top arch.
- **Typography:**
  - Couple Names: **Isha Bawankule & Ashish Deshmukh** in `Bodoni Moda` (Weight 600, 48px on mobile, 76px on desktop, `#2A241F`).
  - Ampersand (`&`): Rendered in `Pinyon Script` Italic at 1.3x size, positioned centered between names in antique gold (`#C5A059`).
- **Asset Positioning & Alignment:** Perfectly centered vertical column. Content constrained to max-width 680px.
- **Relative Scale:** Names dominate the visual field with authoritative high-contrast editorial serifs.
- **Negative Space:** Generous 80px vertical margins top and bottom.
- **Text Positioning:** Centered beneath the royal gold crest, leading the viewer's eye naturally downward.
- **Animation Behaviour:** Letters reveal sequentially from bottom to top via CSS/GSAP clip-path masks with staggered 40ms delays.
- **Transition to Next Section:** Symmetrical golden divider line (`garland-gold.webp`) scrolls into view to separate the hero from family honors.

---

### 2.3 Section 3: Family Blessings & Heritage
- **Intended Visual Objective:** Express deep familial reverence and cultural authenticity without feeling cluttered.
- **Background Treatment:** Subtle handmade paper border container (`handmade-paper.png` texture backing with soft 1px gold border).
- **Main Asset:** Traditional Indian ceremonial brass Diya lamp (`wed-lamp.webp`) placed as a spiritual anchor, balanced with ceremonial Conch (`wed-conch.webp`).
- **Supporting Assets:** Delicate Alpona flourishes (`deco-alpona-corner.webp`) in each of the four card corners at 35% opacity.
- **Typography:**
  - Section Header: *"With the Blessings of Our Beloved Parents"* in `Cormorant Garamond` (Italic 500, 22px, `#5A4838`).
  - Bride's Parents: *"Bhudeo Bawankule & Rekha Bawankle"* in `Bodoni Moda` (Weight 500, 20px, `#2A241F`).
  - Groom's Parents: *"Manikrao Deshmukh & Nirmala Deshmukh"* in `Bodoni Moda` (Weight 500, 20px, `#2A241F`).
  - Hosting Note: *"Cordially hosted by Isha & Ashish"* in `DM Sans` (Weight 500, letterspaced 13px, `#8C7764`).
- **Asset Positioning & Alignment:** Two-column symmetrical layout on desktop; elegant stacked hierarchy on mobile.
- **Relative Scale:** Ceremonial diya stands 120px tall, providing an auspicious vertical axis.
- **Negative Space:** 48px padding around card borders.
- **Animation Behaviour:** Gentle opacity and y-axis translation (+25px to 0px) triggered via ScrollTrigger as the card enters the middle third of the screen.
- **Transition to Next Section:** Trailing strand of fragrant Jasmine garlands (`deco-jasmine-string.webp`) scrolls down toward the date section.

---

### 2.4 Section 4: Wedding Date, Day & Auspicious Muhurat
- **Intended Visual Objective:** Make the wedding timing feel momentous, historic, and clear.
- **Background Treatment:** Soft gold vignette with subtle warm ivory glow.
- **Main Asset:** Interlocked wedding rings vector crest (`rings.svg`) or gold monogram crest (`crest-royal.webp`).
- **Supporting Assets:** Twin Marigold floral strings (`deco-marigold-string.webp`) draped diagonally along top edges.
- **Typography:**
  - Day: *"Thursday"* in `Cormorant Garamond` (Small Caps, tracking +0.3em, 16px).
  - Date Numeral: **"17"** in `Bodoni Moda` (Weight 700, 84px on mobile, 110px on desktop, `#2A241F`).
  - Month & Year: *"December 2026"* in `Cormorant Garamond` (Weight 600, 26px, `#8B6F47`).
  - Ceremony Time: *"Wedding Ceremony at 5:40 PM"* in `DM Sans` (Medium 500, 15px, `#3C3228`).
- **Asset Positioning & Alignment:** Centered block. The large numeral "17" serves as the architectural typographic anchor.
- **Relative Scale:** The numeral "17" commands immediate visual hierarchy, flanked by delicate hairline rules.
- **Negative Space:** Clean 60px padding above and below date block.
- **Animation Behaviour:** Clock icon (`clock-o.svg`) softly pulses; numeral "17" reveals with a gold shimmer reflection mask across its face.
- **Transition to Next Section:** Trailing botanical branch guides the eye into the venue destination.

---

### 2.5 Section 5: Venue & Destination (Amrit Farms)
- **Intended Visual Objective:** Provide prestige venue presentation with intuitive, frictionless navigation for travelling guests.
- **Background Treatment:** Framed card with ornate botanical border (`border.png`) and pale ivory interior (`#FDFCF9`).
- **Main Asset:** Royal Palace motif (`palace-gold.webp`) or gold venue arch.
- **Supporting Assets:** Interactive Map Pin icon (`map-marker.svg`) in antique gold; Spider Lily botanical plate vignette.
- **Typography:**
  - Destination Title: **"Amrit Farms"** in `Bodoni Moda` (Weight 600, 32px, `#2A241F`).
  - Full Address: *"GUMTHALA NAGPUR (MH) 441111 (Near Gumthi/Koradi Road Area)"* in `DM Sans` (Regular 400, 15px, line-height 1.65, `#5E5042`).
  - Interactive Action: *"Open in Google Maps"* CTA in `DM Sans` (Medium 500, 14px, tracking +0.1em, surrounded by a delicate 1px gold border button).
- **Asset Positioning & Alignment:** Centered card with 92% mobile width (max 540px on desktop).
- **Relative Scale:** Button is generous and thumb-friendly (48px height) for effortless mobile tapping.
- **Animation Behaviour:** Card floats into view; CTA button has an elegant gold border hover/touch state that brightens on contact.
- **Transition to Next Section:** Final floral flourish vignette settles into the concluding colophon.

---

### 2.6 Section 6: Closing & Concluding Warmth
- **Intended Visual Objective:** Leave the guest with a lasting impression of royal hospitality and intimate celebration.
- **Background Treatment:** Gradual fade into soft warm parchment glow with gentle falling petal particles.
- **Main Asset:** Decorative Wax Seal (`seal.png`) with monogram detailing.
- **Supporting Assets:** Delicate paired doves with floral wreath (`heart-doves.png`) or Alpona swirl (`deco-alpona-swirl.webp`).
- **Typography:**
  - Closing Note: *"We eagerly await your presence to bless this sacred beginning"* in `Cormorant Garamond` (Italic 400, 22px, `#4A3C30`).
  - Sign-off: *"With Love, Isha & Ashish"* in `Alex Brush` (400, 36px, `#C5A059`).
- **Asset Positioning & Alignment:** Centered vertical stack terminating with the wax seal.
- **Relative Scale:** Seal is 72px x 72px, providing a tactile sign-off stamp.
- **Negative Space:** 100px bottom safe-area margin to ensure the page finishes with serene dignity.
- **Animation Behaviour:** Final soft sparkle particle burst (`partyyy.json`) settles as the page reaches its conclusion.

---

*Visual composition plan approved by Art Director for subsequent technical execution.*
