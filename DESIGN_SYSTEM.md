# ROYAL INDIAN BOTANICAL DESIGN SYSTEM (RIB-DS)
## Specification & Design Tokens — Isha Bawankule & Ashish Deshmukh Wedding Invitation
**Codename:** The Royal Indian Botanical Experience  
**Version:** 2.0.0 (Production Master)  
**Author:** Senior Design Systems Architect & Art Direction Team  

---

## 1. Design Philosophy: Royal Indian Elegance × Botanical Richness

The design language marries the tactile grace of bespoke letterpress royal stationery with modern, cinematic digital performance:
1. **Sacred Geometry & Architectural Harmony:** Proportions inspired by classical Mughal and Rajasthani pavilion arches (`Jharokhas`), delicate filigree crests, and natural botanical symmetry.
2. **Fine-Art Editorial Typography:** High-contrast Didone serifs for monumental regal presence paired with warm humanist serifs for heartfelt narrative, grounded by crisp geometric sans-serifs for effortless legibility.
3. **Tactile Materiality:** Handmade cream plaster surfaces, layered watercolor botanicals, brushed brass ornaments, and warm antique gold foil debossing.
4. **Cinematic Pacing:** Smooth, unhurried reveals that respect the viewer's attention and evoke emotional reverence rather than noisy UI disruption.

---

## 2. Color System & Design Tokens

### 2.1 Primary & Atmospheric Palette
```css
:root {
  /* Surfaces & Paper Tactility */
  --color-paper-ivory: #FDFBF7;        /* Pure handmade wedding paper base */
  --color-paper-warm: #F8F4EC;         /* Warm archival deckled parchment */
  --color-paper-cream: #F3ECE0;        /* Subtle shaded card surface */
  --color-paper-sand: #EAE1D2;         /* Accent card outline & border */

  /* Royal Indian Botanical Greens */
  --color-forest-deep: #1A3127;        /* Sovereign imperial deep forest green */
  --color-forest-rich: #233B32;        /* Primary heading & luxury background tone */
  --color-forest-medium: #315144;      /* Secondary botanical tint */
  --color-sage-soft: #8C9A82;          /* Muted eucalyptus sage foliage */
  --color-sage-light: #C4CDBF;         /* Ambient botanical glow */

  /* Metallic Royal Gold */
  --color-gold-deep: #8E7341;          /* Dark burnished antique gold (for readable text) */
  --color-gold-antique: #B99A62;       /* Classic royal antique gold foil */
  --color-gold-bright: #D8BD8A;        /* Highlight gold glint */
  --color-gold-champagne: #F2E8D5;     /* Softest gold satin shimmer */

  /* Typography & Readability */
  --color-ink-espresso: #241E1B;       /* Deep rich umber ink (Primary text, high contrast) */
  --color-ink-charcoal: #3D3531;       /* Secondary text */
  --color-ink-muted: #6E645D;          /* Tertiary / metadata / dates */
  --color-ink-light: #9B9189;          /* Subtle captions */

  /* Sacred Accents */
  --color-sacred-kumkum: #8F2228;      /* Deep ritual vermilion red */
  --color-sacred-marigold: #D47A22;    /* Auspicious golden saffron marigold */
}
```

### 2.2 Contrast & Accessibility Compliance (WCAG 2.1 AA)
- Primary Ink (`#241E1B`) on Paper Ivory (`#FDFBF7`): **Contrast Ratio 15.2:1** (Exceeds AAA requirement of 7.0:1).
- Deep Forest (`#233B32`) on Paper Ivory (`#FDFBF7`): **Contrast Ratio 10.4:1** (AAA Compliant).
- Gold Deep (`#8E7341`) on Paper Ivory (`#FDFBF7`): **Contrast Ratio 4.6:1** (Passes AA for text ≥ 18px / bold ≥ 14px).
- Light text (`#FDFBF7`) on Deep Forest background (`#1A3127`): **Contrast Ratio 13.8:1** (AAA Compliant).

---

## 3. Typography Hierarchy & Font Scales

### 3.1 Font Stack Definitions
```css
:root {
  --font-display: "Bodoni Moda", "Didot", "Playfair Display", Georgia, serif;
  --font-heading: "Cormorant Garamond", "Garamond", "Times New Roman", serif;
  --font-body: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-accent: "Pinyon Script", "Alex Brush", "Great Vibes", cursive;
}
```

### 3.2 Responsive Type Scale
| Token | Mobile (< 768px) | Desktop (≥ 768px) | Font Family | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `type-hero-monumental` | 3rem (48px) | 4.75rem (76px) | Bodoni Moda | 700 / 900 | 1.1 | Couple Names (`Isha & Ashish`) |
| `type-display-lg` | 2.25rem (36px) | 3.25rem (52px) | Bodoni Moda | 600 | 1.2 | Scene Main Titles |
| `type-heading-1` | 1.75rem (28px) | 2.5rem (40px) | Cormorant Garamond | 600 | 1.25 | Section Headings ("The Auspicious Muhurat") |
| `type-heading-2` | 1.35rem (21.6px) | 1.75rem (28px) | Cormorant Garamond | 600 | 1.3 | Sub-headings, Venue Name ("Amrit Farms") |
| `type-heading-3` | 1.15rem (18.4px) | 1.35rem (21.6px) | Cormorant Garamond | 500 italic | 1.4 | Parents' Blessings, Sanskrit Invocations |
| `type-body-lg` | 1rem (16px) | 1.125rem (18px) | DM Sans | 400 | 1.65 | Opening Invitation statement, Narrative |
| `type-body` | 0.9375rem (15px) | 1rem (16px) | DM Sans | 400 | 1.6 | General descriptions, Venue Address |
| `type-body-sm` | 0.8125rem (13px) | 0.875rem (14px) | DM Sans | 500 | 1.5 | Metadata, Button labels, Badges |
| `type-accent-script`| 1.75rem (28px) | 2.5rem (40px) | Pinyon Script | 400 | 1.0 | Monograms, Ornamental Ampersands ("&") |

---

## 4. Spacing System & Responsive Layout Grid

### 4.1 Base 8-Point Spatial System
All margins, paddings, and component dimensions adhere strictly to the 8pt rhythm:
```css
:root {
  --space-2xs: 4px;    /* 0.5 unit */
  --space-xs:  8px;    /* 1 unit */
  --space-sm:  16px;   /* 2 units */
  --space-md:  24px;   /* 3 units */
  --space-lg:  32px;   /* 4 units */
  --space-xl:  48px;   /* 6 units */
  --space-2xl: 64px;   /* 8 units */
  --space-3xl: 96px;   /* 12 units */
  --space-4xl: 128px;  /* 16 units */
}
```

### 4.2 Breakpoints & Containers
- `xs`: 320px–374px (Compact smartphones: iPhone SE, older Androids)
- `sm`: 375px–429px (Standard modern smartphones: iPhone 13/14/15, Pixel, Galaxy S)
- `md`: 430px–767px (Large phones & phablets)
- `lg`: 768px–1023px (iPads, tablets, foldables)
- `xl`: 1024px–1439px (Laptops, desktop browsers)
- `2xl`: ≥ 1440px (Ultra-wide screens, 4K displays)

**Invitation Max Container Width:** `max-width: 720px` (Optimized for mobile-first editorial reading. On widescreen desktops, it centers majestically inside an ambient royal architectural background with ornamental border framing).

---

## 5. Component Design Rules

### 5.1 The Royal Invitation Card Container
- Background: Ivory Paper (`#FDFBF7`) layered with seamless handmade paper texture.
- Border: 1px solid `rgba(185, 154, 98, 0.4)` (Antique Gold) with double-line inner gold inset (4px inset border).
- Corner Accents: Gold Alpona flourishes (`alpona_corner_gold.png`) at all 4 internal corners.
- Box Shadow: Subtle deep ambient shadow `0 20px 60px -15px rgba(35, 59, 50, 0.12), 0 0 1px rgba(185, 154, 98, 0.3)`.

### 5.2 Interactive 3D Rings Hero Canvas
- Viewport: Full hero aperture (340px–480px height on mobile, 520px on desktop).
- Lighting: 3-point studio lighting (Key Warm White, Fill Soft Gold, Rim Champagne) + Equirectangular reflection environment map (`skybox.jpg`).
- Interaction: Smooth orbit dragging via touch/mouse, gentle auto-rotation (0.005 rad/frame) when idle.
- Fallback: Crisp SVG / high-res composite ring layer with shimmering gold particle aura if WebGL is unsupported or reduced-motion is requested.

### 5.3 Auspicious Muhurat Countdown Timer
- Grid: 4-column balanced card cluster (Days, Hours, Minutes, Seconds).
- Surface: Deep Forest tint (`rgba(35, 59, 50, 0.04)`) enclosed by delicate gold hairline border (`rgba(185, 154, 98, 0.35)`).
- Typography: Monumental serif numbers (`Bodoni Moda`, 28px–36px) with small uppercase sans-serif labels (`DM Sans`, 11px, letter-spacing: 0.15em).
- Timezone: Hard-coded IST (`Asia/Kolkata`, UTC+05:30) calculated to 17 December 2026, 17:40:00 IST.

### 5.4 Primary & Secondary Action Buttons
- **Primary CTA ("Get Directions / Open Google Maps"):**
  - Background: Deep Forest (`#233B32`) with gold foil border (`#B99A62`).
  - Text: Ivory (`#FDFBF7`), uppercase DM Sans, 13px, weight 600, letter-spacing 0.1em.
  - Micro-interaction: Subtle elevation on hover/active, gold border sheen transition.
- **Secondary Action ("Add to Calendar / Copy Address"):**
  - Background: Transparent with 1px solid Antique Gold (`#B99A62`).
  - Text: Deep Forest (`#233B32`).

### 5.5 Ambient Audio Player
- Floating, non-intrusive luxury badge pinned subtly at bottom-right or top-right.
- States: Muted by default (compliance with modern browser autoplay policies), with inviting pulsating music note / speaker icon and "Play Sacred Shehnai" hint.
- Audio: Seamless looping Indian classical wedding instrumental (Shehnai & Sitar raga).

---

## 6. Motion & Animation Tokens

```css
:root {
  --ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);   /* Smooth deceleration */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Subtle celebratory rebound */
  --duration-fast: 250ms;
  --duration-normal: 500ms;
  --duration-slow: 900ms;
  --duration-cinematic: 1400ms;
}
```

### Reduced-Motion Fallback (`@media (prefers-reduced-motion: reduce)`)
- All translateY transitions reset to 0.
- All fade animations set to instant opacity toggles (0ms).
- 3D models pause auto-rotation and remain in fixed artistic perspective.

---

## 7. Z-Index Layering Architecture
```css
:root {
  --z-background-texture: 0;
  --z-botanical-overlays: 5;
  --z-card-surface: 10;
  --z-card-ornaments: 15;
  --z-content: 20;
  --z-3d-canvas: 25;
  --z-floating-controls: 50;  /* Audio player, back to top */
  --z-modal-overlay: 100;
}
```

This design system ensures strict visual and technical consistency across all components and viewports.
