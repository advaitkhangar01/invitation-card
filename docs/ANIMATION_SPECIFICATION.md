# ANIMATION SPECIFICATION & MOTION DESIGN SYSTEM
## Premium Interactive Wedding Invitation Website — Isha & Ashish

### 1. Motion Philosophy
Motion is treated as an editorial tool that reinforces the sensation of handling bespoke luxury paper goods:
- **Anticipation:** Gentle rhythmic breathing on the royal carmine wax seal invites touch.
- **Physicality:** The envelope flap folds along its top axis using CSS 3D perspective (`perspective: 1200px; transform: rotateX(180deg)`), unveiling the inner liner.
- **Celebration:** A soft shower of gold leaf and dusty rose petals disperses via Canvas Confetti upon opening.
- **Restraint:** Scroll interactions rely on subtle vertical translations (`y: 16px to 28px`), gentle opacity fades, and staggered entrances without disorienting bounce or layout shift.

---

### 2. Micro & Macro Interaction Timings

| Event / Animation | Target Element | Duration | Easing | Trigger |
|---|---|---|---|---|
| **Wax Seal Pulse** | Wax Seal SVG | 2800ms loop | `ease-in-out` | Autonomous before interaction |
| **Seal Press Feedback** | Wax Seal Wrapper | 200ms | `cubic-bezier(0.16, 1, 0.3, 1)` | `onClick` / `onKeyDown` |
| **Flap 3D Unfolding** | `.envelope-flap-polygon` | 750ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Triggered on seal break |
| **Petal Confetti** | Canvas Overlay | 1200ms decay | Physics gravity | Fired with flap opening |
| **Card Emergence** | `.invitation-card-emerge` | 950ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Card rises -95px out of pocket |
| **Section Reveal** | Storytelling Sections | 750–850ms | `power2.out` | IntersectionObserver (15% in view) |
| **Floral Parallax** | Botanical vines & dividers | Scroll-linked | Linear interpolation | Natural window scroll |
| **Directions Button Hover**| Map Button | 180ms | `cubic-bezier(0.16, 1, 0.3, 1)` | `:hover` & `:active` |

---

### 3. Reduced Motion (`prefers-reduced-motion`) Implementation
The website strictly complies with WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions):
- Detected via `useReducedMotion()` hook and global CSS `@media (prefers-reduced-motion: reduce)`.
- When enabled:
  - 3D rotations, perspective folds, and loop animations are disabled.
  - Viewport reveals instantly display at `opacity: 1` and `transform: none`.
  - Confetti particle generation is suppressed.
  - A prominent "Skip directly to invitation" link is provided immediately on the envelope screen for keyboard and screen reader users.

---

### 4. GPU Optimization & Performance Metrics
- All animated transforms strictly target composited properties: `transform: translate3d(...)`, `opacity`, and `filter`.
- No properties causing browser reflow (such as `width`, `height`, `top`, or `margin`) are animated during scroll.
- Layer promotion is guided by `willChange: 'opacity, transform'`.
