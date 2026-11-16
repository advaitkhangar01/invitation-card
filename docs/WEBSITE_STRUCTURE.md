# WEBSITE STRUCTURE & INFORMATION ARCHITECTURE
## Premium Interactive Wedding Invitation Website — Isha & Ashish

### 1. Route Topology
The public experience is delivered as a focused, cohesive digital wedding stationery experience at the root URL `/`.
- **Primary Public Route:** `/`
- **Fallback / SPA Handling:** Automatically rewrites any non-existent route to `/` preserving continuous single-page interaction.

---

### 2. Information Architecture Sequence

The visitor experiences a choreographed progression structured into 7 distinct acts:

```
Act 1: Anticipation
┌────────────────────────────────────────────────────────┐
│  Section 01: Envelope Introduction                     │
│  - Background: Warm ivory textured surface             │
│  - Microcopy: "A SPECIAL INVITATION"                   │
│  - Headline: "Something beautiful is waiting for you." │
│  - Physical envelope with 3D flap & custom wax seal    │
│  - Interaction: Wax seal tap / click to break & open   │
└────────────────────────────────────────────────────────┘
                          │
                          ▼ (Flap opens, golden petal burst, card emerges)
Act 2: The Invitation
┌────────────────────────────────────────────────────────┐
│  Section 02: Main Invitation Card                      │
│  - Stationery surface: Pale cream (#FBF8F2)            │
│  - Gilded double-hairline border & botanical corners   │
│  - Top label: "WITH LOVE & JOY"                        │
│  - Opening: "We are Inviting you"                      │
│  - Names: "Isha & Ashish" (Dominant visual hierarchy)  │
│  - Date: "17 DECEMBER 2026"                            │
│  - Day & Time: "THURSDAY · 5:40 PM"                    │
│  - Venue: "AMRIT FARMS · GUMTHALA, NAGPUR"             │
└────────────────────────────────────────────────────────┘
                          │
                          ▼ (Scroll explore indicator)
Act 3: Editorial Pause
┌────────────────────────────────────────────────────────┐
│  Section 03: Couple Introduction                       │
│  - Heading: "TWO HEARTS, ONE BEAUTIFUL JOURNEY"        │
│  - Central ceremonial botanical wreath with monogram   │
│  - Main title: "Isha & Ashish"                         │
│  - Editorial sentiment: "Together with our families..."│
└────────────────────────────────────────────────────────┘
                          │
                          ▼
Act 4: Heritage & Family
┌────────────────────────────────────────────────────────┐
│  Section 04: Family Acknowledgement                    │
│  - Section title: "WITH THE BLESSINGS OF OUR FAMILIES" │
│  - Bride's parents: Bhudeo Bawankule & Rekha Bawankle  │
│  - Center antique gold hairline divider & diamond      │
│  - Groom's parents: Manikrao Deshmukh & Nirmala        │
│    Deshmukh                                            │
└────────────────────────────────────────────────────────┘
                          │
                          ▼
Act 5: Temporal Significance
┌────────────────────────────────────────────────────────┐
│  Section 05: Save The Date Experience                  │
│  - Contrast backdrop: Rich Deep Sage (#263D35)         │
│  - Monumental typographic date: "17" in gold gradient  │
│  - Month & Year: "DECEMBER 2026"                       │
│  - Day & Ceremony time: "THURSDAY · 5:40 PM"           │
│  - Dignified live countdown timer                      │
└────────────────────────────────────────────────────────┘
                          │
                          ▼
Act 6: Wayfinding & Celebration
┌────────────────────────────────────────────────────────┐
│  Section 06: Venue Reveal & Directions                 │
│  - Heading: "The Wedding Venue"                        │
│  - Venue name: "Amrit Farms"                           │
│  - Full address: Gumthala, Nagpur (MH) 441111          │
│    (Near Gumthi / Koradi Road Area)                    │
│  - Interactive touch-friendly "GET DIRECTIONS" button  │
│    linking to Google Maps                              │
└────────────────────────────────────────────────────────┘
                          │
                          ▼
Act 7: Emotional Closure
┌────────────────────────────────────────────────────────┐
│  Section 07: Final Invitation & Closing                │
│  - Sentiment: "YOUR PRESENCE WILL MAKE OUR DAY EVEN    │
│    MORE SPECIAL."                                      │
│  - Names & date signature: "Isha & Ashish"             │
│  - Parting blessing & peaceful negative space          │
│  - Discreet ambient soundscape toggle control          │
└────────────────────────────────────────────────────────┘
```

---

### 3. Component Hierarchy

```text
src/
├── app/
│   └── App.tsx                 # Master state & layout coordinator
├── components/
│   ├── invitation/
│   │   ├── EnvelopeIntro.tsx    # Section 01 envelope opening & burst
│   │   ├── WaxSeal.tsx          # Interactive tactile wax seal component
│   │   ├── InvitationCard.tsx   # Section 02 main stationery card
│   │   ├── CoupleSection.tsx    # Section 03 couple editorial introduction
│   │   ├── FamilySection.tsx    # Section 04 parental acknowledgements
│   │   ├── WeddingDateSection.tsx # Section 05 deep sage date experience
│   │   ├── VenueSection.tsx     # Section 06 venue details & directions
│   │   ├── ClosingSection.tsx   # Section 07 final closing blessing
│   │   ├── MusicControl.tsx     # Discreet ambient audio toggle
│   │   └── ScrollIndicator.tsx  # Smooth animated down chevron
│   ├── motion/
│   │   ├── Reveal.tsx           # Intersection-triggered viewport reveals
│   │   ├── TextReveal.tsx       # Typography mask & staggered entrances
│   │   └── ParallaxLayer.tsx    # Scroll-linked botanical parallax
│   └── ui/
│       ├── Button.tsx           # Accessible pill button with pressed feedback
│       ├── Divider.tsx          # Bespoke antique gold ornamental separator
│       └── OrnamentalFrame.tsx  # Double-hairline stationery frame with 4 corners
├── data/
│   └── wedding.ts               # Authoritative single source of truth
├── hooks/
│   ├── useReducedMotion.ts      # Accessibility preference detector
│   └── useViewport.ts           # Responsive dimensions observer
├── styles/
│   ├── tokens.css               # Design system variables & color palette
│   ├── typography.css           # Fluid type scale & font declarations
│   ├── global.css               # Centered column & desktop flank framing
│   ├── animations.css           # 3D flap folds, pulses & reduced motion rules
│   └── invitation.css           # Component layouts & visual polish
└── utils/
    ├── date.ts                  # Accurate date formatting & live countdown
    ├── audioSynth.ts            # Web Audio API harp/chime engine
    └── assetCredits.ts          # Licensing & attribution records
```
