# DESIGN SYSTEM SPECIFICATION
## "English Garden × Indian Wedding Editorial" — Isha & Ashish

### 1. Color Palette Tokens

```css
:root {
  /* Surfaces & Backgrounds */
  --color-warm-ivory: #F7F1E8;      /* Primary body background */
  --color-pale-cream: #FBF8F2;      /* Invitation card surface */
  --color-card-border: #E8DCCB;     /* Subtle paper edge */
  
  /* Primary & Accent Tones */
  --color-deep-sage: #263D35;       /* Dramatic contrast sections & primary dark text */
  --color-muted-sage: #879487;      /* Botanical accents & secondary foliage */
  --color-sage-light: #4A6359;      /* Sage highlights */
  
  /* Metallics & Warmth */
  --color-antique-gold: #B69A69;    /* Fine metallic rules & typography accents */
  --color-gold-light: #D4BE93;      /* Foil highlights */
  --color-gold-dark: #8E7343;       /* Shadowed gold etchings */
  
  /* Floral & Embellishment */
  --color-dusty-rose: #D9BDB3;      /* Soft floral shading & organic highlights */
  --color-blush-tint: #F2E8E4;      /* Delicate tint for pill badges */
  
  /* Text & Ink */
  --color-soft-ink: #39332E;        /* High-contrast body copy */
  --color-ink-muted: #6E6760;       /* Secondary notes & supporting labels */
  --color-ink-light: #9B948D;       /* Watermark & tertiary metadata */
  
  /* Tactile Details */
  --color-wax-seal: #781F26;        /* Deep royal carmine wax */
  --color-wax-highlight: #9E333C;   /* Convex seal edge lighting */
  --color-wax-shadow: #4A0E13;      /* Wax seal drop shadow */
}
```

---

### 2. Typography Hierarchy

| Role | Font Family | Weight | Size Range (`clamp`) | Letter Spacing | Line Height |
|---|---|---|---|---|---|
| **Couple Names** | Cormorant Garamond | 500 / 600 | `clamp(2.75rem, 8vw, 3.75rem)` (44–60px) | `0.02em` | `1.05` |
| **Hero Heading** | Cormorant Garamond | 400 italic | `clamp(1.75rem, 5vw, 2.25rem)` (28–36px) | `0.04em` | `1.2` |
| **Section Headings**| Playfair Display | 600 | `clamp(1.5rem, 4.5vw, 2rem)` (24–32px) | `0.05em` | `1.25` |
| **Date Numbers** | Cormorant Garamond | 600 | `clamp(4rem, 12vw, 6rem)` (64–96px) | `-0.01em` | `0.9` |
| **Script Flourish**| Allura | 400 | `clamp(1.5rem, 4vw, 2rem)` (24–32px) | `0.02em` | `1.4` |
| **Editorial Body** | DM Sans | 400 | `clamp(0.925rem, 2.5vw, 1.05rem)` (15–17px) | `0.01em` | `1.65` |
| **Micro Labels** | DM Sans | 600 uppercase | `0.75rem` (12px) | `0.18em` | `1.4` |
| **Button Text** | DM Sans | 600 uppercase | `0.85rem` (13.5px) | `0.15em` | `1.2` |

---

### 3. Spacing System (4px Base Grid)

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  --space-4xl: 64px;
  --space-5xl: 80px;
  --space-6xl: 96px;

  /* Layout Boundaries */
  --invitation-max-width: 430px;
  --invitation-side-padding: 24px;
}
```

---

### 4. Tactile & Stationery Components
- **Cardstock Surface:** Subtle warm ivory (`#FBF8F2`) with dual hairline gold borders (`border: 1px solid rgba(182, 154, 105, 0.45); outline: 1px solid rgba(182, 154, 105, 0.2); outline-offset: -6px`).
- **Antique Gold Foil Effect:** Multi-stop linear gradient (`background: linear-gradient(135deg, #A88B57 0%, #E3D1A5 45%, #B69A69 70%, #8A6E3C 100%)`) with background clipping for metallic typographic gleam.
- **Wax Seal Stamp:** Multi-layered SVG with radial lighting, concave embossing, and stamped "I&A" monogram.
- **Paper Shadows:** Soft, realistic ambient occlusion (`box-shadow: 0 12px 35px -8px rgba(38, 61, 53, 0.12), 0 4px 12px -2px rgba(38, 61, 53, 0.06)`).

---

### 5. Layout & Responsive Principles
- **Strictly Mobile-First Column:** Centered on desktop, bounded between 320px and 430px.
- **Surrounding Desktop Flank:** Deep sage background with subtle textured grain and floating ornamental leaves outside the viewport frame to provide luxury editorial framing on wide screens.
- **Touch Ergonomics:** All actionable touch points (wax seal, sound toggle, directions button) provide a minimum of 48×48px interactive target area with immediate haptic-like visual feedback.
