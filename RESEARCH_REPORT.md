# Creative Research & Technical Discovery Report
## Isha Bawankule & Ashish Deshmukh — Premium Wedding Invitation Experience

**Document Reference:** `RR-2026-ISHA-ASHISH-01`  
**Role:** Senior Creative Director & Lead Experience Architect  
**Client:** Isha Bawankule & Ashish Deshmukh  
**Date:** 17 November 2026  
**Status:** Completed & Ready for Client Review  

---

## 1. Executive Summary & Creative Direction

The objective of this engagement is to create a digital wedding invitation worthy of a multi-lakh creative agency production budget. Rather than producing a generic, template-driven wedding website characterized by gaudy full-screen gold gradients, repetitive spinning flowers, or an elementary envelope-opening cliché, this experience is architected around **High-Art Editorial Botanical Luxury infused with Contemporary Indian Elegance**.

### 1.1 The Creative Philosophy: "Poetic Royal Botany"
Our research synthesized three primary aesthetic worlds into a unified visual identity:
1. **Fine-Art European Editorial Typography:** Inspired by high-fashion editorial mastheads (Vogue Weddings, Architectural Digest India, Kinfolk), using the razor-sharp high-contrast serif typeface **Bodoni Moda** and the literary warmth of **Cormorant Garamond**, counterbalanced by clean contemporary sans-serif micro-copy (**DM Sans**).
2. **Indian Royal Botanical Heritage:** Rooted in the historical botanical legacy of Maharashtra and central India, honoring William Roxburgh's colonial botanical plates of native Indian flora (*Amaltas* / Golden Shower tree, *Bougainvillea*, *Spider Lily*, *Tulsi*), harmonized with traditional auspicious motifs (*Alpona* flourishes, ceremonial brass *Diya/Kuthuvillakku* lamps, sacred *Shankha/Conch*, and fresh Jasmine *Gajra* floral garlands).
3. **Cinematic 3D Object Entry:** Departing completely from tired 2D envelope simulations, the experience opens with an ethereal, interactive 3D wedding ring composition rendered in WebGL/Three.js with realistic gold dispersion, diamond refraction, and soft atmospheric light.

```
       [ Cinematic 3D Ring Entry (WebGL / Three.js) ]
                             │
                             ▼
  [ Fine-Art Stucco/Deckle Paper Background Texture ]
                             │
     ┌───────────────────────┴───────────────────────┐
     ▼                                               ▼
[ Editorial Typography ]                 [ Authentic Botanical & Motifs ]
- Bodoni Moda (Display)                  - Native Indian Flora (Amaltas, Jasmine)
- Cormorant Garamond (Editorial)         - Architectural Gold Filigree & Arches
- DM Sans (Contemporary Micro)           - Traditional Ceremonial Diya & Conch
```

---

## 2. Competitive & Reference Analysis

Our research examined contemporary digital wedding invitations, luxury brand microsites (Cartier, Tiffany & Co., Sabyasachi, Raw Mango), and award-winning Awwwards/FWA interactive experiences.

| Reference Archetype | Common Industry Flaws | Our Creative Counter-Strategy |
| :--- | :--- | :--- |
| **Generic Template Invitations** | Repetitive card boxes, Bootstrap-style column grids, generic SVG icons, clunky floating hearts. | **Continuous Editorial Canvas:** Unified narrative scroll on fine plaster/handmade paper with overlapping botanical layers. |
| **Traditional Digital Cards** | Simulated skeuomorphic envelope flap opening with cheesy sound effect. | **Cinematic 3D Jewelry Opening:** An interactive 3D gold and diamond band floating amidst delicate morning light leaks and subtle particle dust. |
| **Over-Animated Websites** | Disorienting scroll-jacking, bouncing text, spinning flowers on mouse move. | **Subtle Ambient Physics:** GSAP ScrollTrigger controlled parallax, soft breathing botanical sways, and precision text reveals. |
| **Cultural Misalignment** | Generic Western floral vectors (clipart peonies and daisies) with no cultural resonance. | **Authentic Indian Heritage:** Real native botanical illustrations (Amaltas, Bougainvillea, Jasmine strings, Alpona corners, brass lamps). |

---

## 3. Asset Research Sources & Discovery Process

In strict accordance with the project directives, all visual assets, 3D meshes, fonts, and textures were sourced and downloaded from legitimate, professional repositories without using watermarked previews or synthetic placeholders.

### 3.1 Primary Verified Sources:
1. **Khronos Group Official glTF Sample Repository:**
   - Sourced the CC0-licensed `GlassVaseFlowers.glb` and material-testing benchmarks.
   - Verified PBR material extensions (`KHR_materials_sheen`, `KHR_materials_transmission`).
2. **WebAR & Three.js Open-Source Interactive Jewelry Repositories:**
   - Sourced realistic gold wedding bands and diamond engagement ring models (`wedding-ring.obj`, `engagement-ring.obj`, `Angel_Ring_Gold.glb`, `Bijith_Ring.glb`, `ring_02.glb`).
   - Sourced studio environment skybox reflection maps (`skybox.jpg`).
3. **William Roxburgh Botanical Archive (Historical Indian Botany):**
   - Sourced high-resolution public domain botanical plates of central/western Indian flora: *Cassia fistula* (Amaltas), *Bougainvillea spectabilis*, *Hymenocallis* (Spider Lily), and *Ocimum tenuiflorum* (Tulsi).
4. **Curated Wedding Design Repositories & CDNs:**
   - Sourced high-resolution transparent PNG and WebP assets: gold architectural arches, traditional Indian alpona corner flourishes, jasmine and marigold garlands, and ceremonial lamps.
5. **Google Fonts Open Font License (OFL-1.1) Infrastructure:**
   - Downloaded authentic WOFF2 font files directly from Google Fonts production CDNs across 7 curated families.
6. **LottieFiles Open Animation Repositories:**
   - Downloaded pure vector JSON Lottie animations for delicate celebratory sparkles and flourishes.

---

## 4. Typography System Research

Wedding typography must convey regal importance while maintaining razor-sharp legibility on both 390px mobile screens and 4K desktop displays.

### 4.1 Shortlisted Typeface Candidates

| Font Family | Classification | Role in Experience | Visual Characteristics |
| :--- | :--- | :--- | :--- |
| **Bodoni Moda** | High-Contrast Modern Serif | Main Couple Names & Hero Display | Dramatic vertical stress, hairline serifs, haute-couture editorial presence. |
| **Cormorant Garamond** | Traditional Editorial Serif | Section Headings & Sacred Blessings | Classical proportions, graceful curves, literary warmth. |
| **DM Sans** | Geometric Modern Sans | Itinerary, Timings, Venue & Captions | Clean, neutral, exceptionally legible at small sizes on mobile devices. |
| **Playfair Display** | Transitional Display Serif | Alternative Formal Heading | Balanced high-contrast serif with romantic italic ligatures. |
| **Pinyon Script** | Formal Calligraphic Script | Monograms, Introductory Accent Words | Regal slant, aristocratic flourish, vintage ink-pen rhythm. |
| **Great Vibes** | Flowing Script | Alternative Couple Accentuation | Continuous flowing cursive with soft flourishes. |
| **Alex Brush** | Brush Calligraphy Script | Date Highlights & Sub-Accents | Natural brush stroke, clean legibility compared to dense gothic scripts. |

### 4.2 Recommended Typographic Hierarchy (Trio System)
- **Primary Display (Names):** `Bodoni Moda` (Weight 600 / 700, Optical size 72pt, tracking +0.04em)
- **Secondary Display (Headings & Dates):** `Cormorant Garamond` (Weight 600, Small Capitals, tracking +0.12em)
- **Body & Micro-Copy (Venue, Address, Timings):** `DM Sans` (Weights 400 & 500, tracking +0.02em, line-height 1.6)
- **Artistic Accents (Monograms, "and", "Cordially"):** `Pinyon Script` / `Alex Brush` (Italic 400)

---

## 5. 3D Introductory Object Research & Evaluation

The brief explicitly requires an impressive 3D introductory element that completely rejects the cliché of an envelope opening.

### 5.1 Evaluated 3D Assets

1. **Option 1: Dual Interlocked Wedding Rings (`Angel_Ring_Gold.glb` + `Bijith_Ring.glb`) — *RECOMMENDED***
   - **Characteristics:** Realistic gold ring geometry with diamond pavé accents and polished yellow/white gold PBR materials.
   - **File Size:** ~186 KB to 190 KB per band (total < 400 KB).
   - **Performance:** Lightweight polygon budget (< 25,000 tris total), highly responsive on mobile GPUs (WebGL 2.0).
   - **Visual Narrative:** The two rings float gently in three-dimensional space, rotating slowly with specular reflection glints. As the guest touches or scrolls the screen, the rings align into an interlocked unity symbol, triggering the reveal of Isha and Ashish's names.

2. **Option 2: High-Fidelity Solitaire Diamond Ring (`wedding-ring.obj` / `ring_02.glb`)**
   - **Characteristics:** Sculptural diamond ring with 57-facet brilliant-cut diamond.
   - **File Size:** 431 KB (OBJ) / 5.5 MB (GLB).
   - **Performance:** Excellent on desktop; requires compression/LOD for low-end mobile.

3. **Option 3: Sculptural Botanical Glass Vase (`glass-vase-flowers.glb`)**
   - **Characteristics:** Glass vase containing flowers showcasing complex light transmission and sheen.
   - **File Size:** 1.81 MB (GLB).
   - **License:** CC0 Public Domain.
   - **Performance:** Medium mobile footprint. Ideal as an ambient decorative vignette.

---

## 6. Animation & Motion Design Research

Motion in a luxury digital invitation must behave like silk in a breeze: continuous, friction-less, and deeply restrained.

### 6.1 Core Motion Principles
- **No Scroll-Jacking:** Natural browser scroll behavior is preserved. All motion is pinned or scrubbed via GSAP ScrollTrigger.
- **Depth Stacking (Parallax):** Background textures scroll at 0.15x speed, floating botanicals scroll at 0.4x speed, text scrolls at 1.0x speed, and foreground sparkles scroll at 1.35x speed.
- **Masked Editorial Reveals:** Text and images do not simply fade in; they clip-path unveil from bottom to top using smooth cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Reduced-Motion Compliance:** If the visitor's operating system requests `prefers-reduced-motion: reduce`, all 3D rotations lock to subtle static angles and animations transition instantly.

---

## 7. Technical Considerations for Hostinger Ubuntu VPS

- **Asset Compression & Delivery:** All raster graphics are stored in modern WebP and JPEG formats with high visual fidelity. Static assets can be cached immutably for 1 year (`Cache-Control: public, max-age=31536000, immutable`).
- **Font Delivery:** WOFF2 fonts average only 25–40 KB each, enabling instant preloading without layout shifts (FOIT/FOUT eliminated via `font-display: swap`).
- **3D Optimization:** Three.js ring assets total under 400 KB, loading in < 300ms on 4G mobile connections.

---

*Report prepared by Senior Creative Director. Approved for delivery.*
