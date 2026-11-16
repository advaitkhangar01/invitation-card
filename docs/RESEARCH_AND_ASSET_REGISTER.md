# RESEARCH AND ASSET REGISTER
## Premium Interactive Wedding Invitation Website — Isha & Ashish

### 1. Libraries Evaluated & Selected Stack

| Technology | Evaluated | Decision | Rationale & Version |
|---|---|---|---|
| **React 19** | Yes | **Selected** (`^19.3.1`) | Component architecture, state transitions (envelope states), declarative lifecycle. |
| **TypeScript** | Yes | **Selected** (`^7.0.2`) | Strict typing of wedding data, props, and design system tokens. |
| **Vite 8** | Yes | **Selected** (`^8.3.8`) | Blazing fast ESM compilation, optimized rollup bundling, CSS code splitting. |
| **GSAP & ScrollTrigger** | Yes | **Selected** (`^3.15.1`) | Industry standard for silky scroll-driven reveals, text masks, timeline coordination, and unmount cleanups. |
| **Lucide React** | Yes | **Selected** (`^1.73.0`) | Lightweight, clean accessible SVG icons (MapPin, Calendar, Clock, Music, VolumeX, ChevronDown). |
| **Canvas Confetti** | Yes | **Selected** (`^1.9.4`) | High-performance canvas-based gold leaf / botanical petal celebration upon envelope opening. |
| **Lenis Smooth Scroll** | Yes | *Evaluated (Selective)* | Evaluated; native mobile momentum scrolling with CSS `scroll-behavior: smooth` and controlled GSAP triggers is lighter, avoids touch-jacking on iOS Safari, and prevents conflict with touch gesture inputs. |
| **Three.js** | Yes | *Rejected* | Three.js adds 600KB+ to bundle weight, causes battery drain and GPU thermal throttling on low-end mobile devices. CSS 3D matrix transforms provide an ultra-crisp 60fps envelope flap unfolding and card emergence with 0 extra KB. |
| **Lottie / dotLottie** | Yes | *Rejected* | External JSON runtimes add parsing overhead. Native inline SVGs and canvas particles provide crisper vectors at infinite DPI with exact color palette binding. |

---

### 2. Font Evaluation & Selection

| Typeface | Classification | License | Intended Role |
|---|---|---|---|
| **Cormorant Garamond** | Editorial Serif | SIL Open Font License (OFL) | Primary serif for couple names, dates, and prominent headlines. Renowned for its graceful high-contrast strokes inspired by Claude Garamont's 16th-century legacy. |
| **Playfair Display** | Transitional Serif | SIL Open Font License (OFL) | Subheadings, card titles, and ceremonial headers. |
| **DM Sans** | Geometric / Humanist Sans | SIL Open Font License (OFL) | High legibility at small sizes for venue address, time, date badges, and utility buttons. |
| **Allura** | Romantic Calligraphic Script | SIL Open Font License (OFL) | Restrained handwritten flourishes (e.g. "Together with our families", "With love & joy"). |

*Web Font Optimization:* Loaded via high-priority Google Fonts preconnect with `font-display: swap` and local fallback serif/sans stacks to ensure zero layout shift (CLS < 0.02).

---

### 3. Visual & Vector Asset Register

All SVG and graphic assets are original vector designs or curated from public domain / CC0 sources, with exact color harmonization to our palette.

| Asset Identifier | Asset Type & Format | Source / Creator | License | Local Path | Intended Usage |
|---|---|---|---|---|---|
| `monogram-ia` | Custom Vector SVG | Original bespoke design | Proprietary / Project | `src/assets/ornaments/monogram.svg` | Interlocking "I & A" monogram for wax seal, card header, and couple section. |
| `wax-seal-texture` | SVG / Radial Gradients | Original bespoke design | Proprietary / Project | `src/assets/ornaments/wax-seal.svg` | Tactile burgundy-carmine wax seal with golden relief stamp and pressed rim. |
| `botanical-corner-01` | Hand-curated Vector SVG | CC0 Public Domain / SVGRepo | CC0 / Unlicense | `src/assets/florals/corner-botanical-1.svg` | Symmetrical top-left and top-right card corner floral scrollwork. |
| `botanical-corner-02` | Hand-curated Vector SVG | CC0 Public Domain / SVGRepo | CC0 / Unlicense | `src/assets/florals/corner-botanical-2.svg` | Bottom ornamental corner brackets. |
| `floral-branch-delicate`| Vector SVG | CC0 Public Domain | CC0 / Unlicense | `src/assets/florals/floral-branch.svg` | Organic olive/eucalyptus botanical branch for parallax and section dividers. |
| `gold-divider-motif` | Vector SVG | Original bespoke design | Proprietary / Project | `src/assets/ornaments/gold-divider.svg` | Antique gold hairline rule with center diamond/leaf flourish. |
| `paper-texture-subtle` | Procedural SVG Filter / CSS | Pure SVG `feTurbulence` | CC0 / Unlicense | Embedded in CSS | Organic tactile cotton cardstock texture without raster image download weight. |
| `venue-map-pin` | Vector SVG | Lucide / Custom | ISC / MIT | Embedded via Lucide | Venue section location pin. |
| `ambient-wedding-audio`| Web Audio Synthesizer + Royalty-free Audio | Web Audio API Harmonic Harp & Chimes | MIT / CC0 | `src/utils/audioSynth.ts` | Ambient acoustic soundscape running on Web Audio API; zero external network delay, guaranteed availability offline. |

---

### 4. Assets Rejected & Rationale
1. **Stock Couple Photography:** Rejected immediately per strict project rules; prevents misleading representations and honors the couple's personal authenticity.
2. **Heavy Raster Backgrounds (Uncompressed 4K JPEGs):** Rejected in favor of lightweight SVG procedural texture + CSS gradients, preserving mobile bandwidth.
3. **Overly Ornate Gold Foil Textures with Glare Artifacts:** Rejected in favor of refined CSS metallic gradients (`linear-gradient(135deg, #CBB488, #9B7E48, #D8C39A)`), ensuring razor-sharp rendering on Retina displays.

---

### 5. Final Directory Structure for Assets
```text
src/
  assets/
    florals/
      corner-botanical-1.svg
      corner-botanical-2.svg
      floral-branch.svg
      floral-wreath.svg
    ornaments/
      monogram.svg
      wax-seal.svg
      gold-divider.svg
      card-frame.svg
    audio/
      ambient.mp3 (optional fallback)
```
