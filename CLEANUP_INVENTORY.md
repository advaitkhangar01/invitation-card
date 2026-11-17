# Complete Project Cleanup Inventory

**Project Directory:** `d:\Freelance\invitation card`  
**Generated On:** 2026-11-17T14:08:00+05:30  
**Status:** Pre-cleanup Inspection & Classification Completed  

---

## 1. Executive Summary

This inventory documents all items present in the project directory prior to the cleanup process. The objective is to safely isolate and preserve original client/user-provided assets, wedding documents, and essential deployment configurations into `preserved/source-material/`, while completely purging all obsolete React code, components, styles, synthesized/generated assets, build artefacts, and dependencies.

---

## 2. Classification of Files and Directories

### 2.1 User-Provided Source Files (To Preserve)
These are original source materials supplied for the wedding invitation project containing non-recoverable event details, schedules, and names.

| Path | Size (Bytes) | Description | Action |
| :--- | :--- | :--- | :--- |
| `Wedding_Invitation_Details_Checklist (1).xlsx` | 13,025 | Original Microsoft Excel workbook containing complete wedding details: event schedules, family details, venue addresses, ceremony times, RSVP contacts, and specific instructions. | **Preserve in `preserved/source-material/`** |

> **Note on Media:** No user-provided photos, videos, or raw audio recordings were found in the project. All existing graphics and audio logic were procedurally generated in previous development sprints.

---

### 2.2 Deployment Information (To Preserve)
Essential infrastructure and deployment configuration for running the static site on a Hostinger Ubuntu VPS with Nginx and SSL.

| Path | Size (Bytes) | Description | Action |
| :--- | :--- | :--- | :--- |
| `deploy/deploy.sh` | 1,078 | Automated deployment bash script targeting `/var/www/wedding-invitation` on Ubuntu VPS. Handles automated directory backup, build, permissions, and Nginx reloads. | **Preserve in `preserved/source-material/`** |
| `deploy/nginx.conf` | 1,908 | Production Nginx server block configuration featuring SPA routing fallback, aggressive static asset caching headers (`max-age=31536000`), Gzip compression, and SSL readiness. | **Preserve in `preserved/source-material/`** |
| `docs/DEPLOYMENT_GUIDE.md` | 4,544 | Comprehensive deployment runbook covering SSH access, firewall configuration (`ufw`), Nginx setup, Certbot Let's Encrypt SSL, and zero-downtime static deployment. | **Preserve in `preserved/source-material/`** |

---

### 2.3 Previous Application Code (To Remove)
All custom React, TypeScript, CSS, HTML, and helper code from the previous website iterations.

#### Source Root & App Shell (`src/`, `index.html`)
- `index.html` (2,367 bytes) — HTML5 shell loading Google Fonts and mounting React root
- `src/main.tsx` (420 bytes) — React 18 DOM mount and root render script
- `src/vite-env.d.ts` (38 bytes) — Vite environment type declarations
- `src/app/App.tsx` (2,885 bytes) — Root application component orchestrating frame navigation

#### Components (`src/components/`)
- `src/components/botanical/FloatingPetals.tsx` (1,207 bytes) — Canvas/DOM petal particle animation
- `src/components/botanical/FlowerCluster.tsx` (521 bytes) — Floral composition renderer
- `src/components/frames/ClosingFrame.tsx` (2,651 bytes) — Concluding blessings and contact frame
- `src/components/frames/CoupleFrame.tsx` (2,336 bytes) — Bride and groom presentation frame
- `src/components/frames/DateFrame.tsx` (3,845 bytes) — Interactive calendar and itinerary frame
- `src/components/frames/FamilyFrame.tsx` (3,016 bytes) — Family tree and host frame
- `src/components/frames/InvitationFrame.tsx` (5,799 bytes) — Main invitation wording frame
- `src/components/frames/OpeningFrame.tsx` (3,314 bytes) — Opening intro and splash frame
- `src/components/frames/VenueFrame.tsx` (3,880 bytes) — Google Maps link and venue details frame
- `src/components/objects/Envelope3D.tsx` (3,918 bytes) — CSS 3D folding envelope component
- `src/components/objects/WaxSeal.tsx` (998 bytes) — Interactive wax seal break animation
- `src/components/scenes/LoadingScene.tsx` (3,775 bytes) — Asset preloading progress screen

#### Data, Hooks & Utilities (`src/data/`, `src/hooks/`, `src/utils/`)
- `src/data/assetManifest.ts` (5,136 bytes) — Manifest of static assets for preloading
- `src/data/wedding.ts` (3,443 bytes) — Hardcoded data extracted from the Excel checklist
- `src/hooks/useAssetPreloader.ts` (1,809 bytes) — Preload hook tracking asset download state
- `src/hooks/useReducedMotion.ts` (734 bytes) — Accessibility hook detecting `prefers-reduced-motion`
- `src/hooks/useViewport.ts` (1,143 bytes) — Viewport dimension observer hook
- `src/utils/assetCredits.ts` (2,062 bytes) — Attribution metadata utility
- `src/utils/audioSynth.ts` (3,862 bytes) — Procedural Web Audio API sound generator
- `src/utils/date.ts` (1,101 bytes) — Date manipulation and countdown helpers

#### Stylesheets (`src/styles/`)
- `src/styles/frames.css` (8,867 bytes) — Frame-specific layout and responsive card rules
- `src/styles/global.css` (2,775 bytes) — Global CSS reset and background styles
- `src/styles/motion.css` (2,321 bytes) — Keyframe animations and transitions
- `src/styles/scenes.css` (4,374 bytes) — Scene orchestration and stacking styles
- `src/styles/tokens.css` (2,462 bytes) — Color, spacing, shadow, and radius variables
- `src/styles/typography.css` (3,356 bytes) — Font family bindings and heading hierarchies

#### Asset Generation Scripts (`scripts/`)
- `scripts/generate_botanicals.py` (18,934 bytes) — Python script generating floral graphics
- `scripts/generate_frames_and_icons.py` (15,005 bytes) — Python script generating SVG frames and icons
- `scripts/generate_stationery_assets.py` (8,832 bytes) — Python script generating paper & envelope textures

#### Previous Implementation Archives (`backup/`)
- `backup/previous-implementation/` (50 files, 137,992 bytes) — Archived codebase of earlier iterations including old components, styles, SVGs, and specs.

#### Documentation (`docs/`)
- `docs/ANIMATION_SPECIFICATION.md` (2,818 bytes)
- `docs/DESIGN_SYSTEM.md` (4,099 bytes)
- `docs/FRAME_AND_ASSET_SPECIFICATION.md` (9,848 bytes)
- `docs/MOTION_STORYBOARD.md` (4,914 bytes)
- `docs/PROJECT_DISCOVERY.md` (4,140 bytes)
- `docs/REDESIGN_BLUEPRINT.md` (4,301 bytes)
- `docs/RESEARCH_AND_ASSET_REGISTER.md` (6,656 bytes)
- `docs/TECHNICAL_ARCHITECTURE.md` (2,727 bytes)
- `docs/TESTING_REPORT.md` (5,898 bytes)
- `docs/WEBSITE_STRUCTURE.md` (8,948 bytes)

---

### 2.4 Generated Assets (To Remove)
Locally generated SVG, PNG, and WebP graphics from previous implementation sprints located in `public/`.

#### Flowers (`public/assets/flowers/`)
- `botanical-bouquet.png` (92,644 B) / `.webp` (67,972 B)
- `bottom-floral.png` (56,472 B) / `.webp` (38,932 B)
- `corner-floral-bl.png` (71,880 B) / `.webp` (42,972 B)
- `corner-floral-br.png` (70,862 B) / `.webp` (43,398 B)
- `corner-floral-tl.png` (77,873 B) / `.webp` (48,352 B)
- `corner-floral-tr.png` (72,902 B) / `.webp` (43,750 B)
- `eucalyptus-trailing.png` (47,254 B) / `.webp` (52,370 B)
- `floating-petals.png` (4,894 B) / `.webp` (4,260 B)
- `floral-wreath.png` (181,393 B) / `.webp` (128,270 B)
- `foliage-branch.png` (14,076 B) / `.webp` (15,154 B)
- `jasmine-branch.png` (30,785 B) / `.webp` (23,062 B)
- `loose-petals.png` (20,038 B) / `.webp` (21,016 B)
- `orchid-branch.png` (64,847 B) / `.webp` (44,074 B)
- `peony-cluster-01.png` (59,432 B) / `.webp` (41,020 B)
- `rose-cluster-01.png` (75,650 B) / `.webp` (55,404 B)
- `rose-cluster-02.png` (64,455 B) / `.webp` (43,838 B)
- `rose-cluster-subagent.webp` (288,930 B)
- `small-floral.png` (25,501 B) / `.webp` (16,208 B)

#### Ornamental Frames (`public/assets/frames/`)
- `botanical-oval.svg` (2,217 B)
- `bottom-crest.svg` (1,608 B)
- `floral-arch.svg` (2,215 B)
- `floral-divider.svg` (2,918 B)
- `gold-filigree.svg` (1,970 B)
- `invitation-frame.svg` (2,047 B)
- `monogram-crest.svg` (2,478 B)
- `ornamental-corner-bl.svg` (2,664 B)
- `ornamental-corner-br.svg` (2,667 B)
- `ornamental-corner-tl.svg` (2,633 B)
- `ornamental-corner-tr.svg` (2,664 B)
- `top-crest.svg` (1,698 B)

#### Icons (`public/assets/icons/`)
- `arrow-up-right.svg` (266 B)
- `calendar.svg` (420 B)
- `chevron-down.svg` (225 B)
- `clock.svg` (262 B)
- `location.svg` (323 B)

#### Stationery Textures (`public/assets/stationery/`)
- `envelope-body.webp` (5,814 B)
- `envelope-lining.webp` (25,054 B)
- `gold-foil-texture.webp` (79,532 B)
- `paper-texture.webp` (35,940 B)
- `wax-seal.webp` (31,590 B)

#### Social Share (`public/`)
- `og-image.svg` (2,759 B)

---

### 2.5 Downloaded Assets
None. All assets present were locally generated via Python script pipelines or manual SVG authoring.

---

### 2.6 Dependencies (To Remove)
- `node_modules/` (5,912 files, 131,543,509 bytes / ~125.4 MB) — Complete Node.js runtime dependencies (Vite, React, Lucide-React, TypeScript, etc.)
- `package-lock.json` (46,184 bytes) — Locked dependency tree

---

### 2.7 Build Artefacts (To Remove)
- `dist/` (61 files, 2,524,614 bytes / ~2.4 MB) — Production Vite build directory containing bundled `.js`, `.css`, and copied assets.

---

### 2.8 Project Configuration (To Remove)
- `package.json` (595 bytes) — Previous project manifest and script definitions
- `tsconfig.json` (556 bytes) — TypeScript compiler configuration
- `vite.config.ts` (485 bytes) — Vite bundler configuration
- `.gitignore` (298 bytes) — Git ignore definitions from previous build setup

---

## 3. Inventory Summary Table

| Category | Item Count | Total Size | Action Plan |
| :--- | :--- | :--- | :--- |
| **User-Provided Source Files** | 1 file | 13,025 B | Back up to `preserved/source-material/` |
| **Deployment Information** | 3 files | 7,530 B | Back up to `preserved/source-material/` |
| **Previous Application Code & Docs** | ~100 files | ~400 KB | Delete completely |
| **Generated Assets** | 41 files | 2,259,904 B | Delete completely |
| **Downloaded Assets** | 0 files | 0 B | N/A |
| **Dependencies (`node_modules`)** | 5,912 files | 131,543,509 B | Delete completely |
| **Build Artefacts (`dist/`)** | 61 files | 2,524,614 B | Delete completely |
| **Project Configuration** | 4 files | 47,523 B | Delete completely |
