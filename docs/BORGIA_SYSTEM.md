# 📜 BORGIA VISUALIZATION SYSTEM

> **Unified Documentation for the Teo Calli Portfolio Visualization Engine**
> *Based on the Borgia Codex Explorations*

---

## 📑 TABLE OF CONTENTS

1.  [Executive Summary](#1-executive-summary)
2.  [Quick Start](#2-quick-start)
3.  [Visual & Philosophy Reference](#3-visual--philosophy-reference)
4.  [Technical Layouts](#4-technical-layouts)
5.  [Integration Guide](#5-integration-guide)
6.  [Cheat Sheet](#6-cheat-sheet)

---

## 1. EXECUTIVE SUMMARY
*(Formerly BORGIA_SUMMARY.md)*

### What has been created?
A system of **4 interactive layouts** inspired by the Borgia Codex to present portfolio content with authentic Teocalli/Toltec aesthetics.

### The 4 Layouts

#### 1. GRID - Codex Grid
**Use for:** Catalogs, skills, technologies
- Responsive grid (4-6 columns)
- Hover with Malinalli rotation
- Original codex-style borders

#### 2. RADIAL - Central Deity
**Use for:** Featured project, main skill
- Large central element pulsing (Olin)
- 12 peripheral elements in a circle
- Radiant lines (Teotl flow)

#### 3. NARRATIVE - Time Sequence
**Use for:** Timeline, step-by-step process
- Left → Right reading flow
- Sequential numbering
- Connecting lines

#### 4. QUINCUNX - 5 Directions
**Use for:** Balance, cosmological organization
- Green center (Balance/Jade)
- 4 Cardinal directions with sacred colors
- Cosmological cross background

### Key Statistics
- **Code:** ~500 lines (BorgiaExplorations.tsx)
- **Layouts:** 4 unique modes
- **Animations:** 3 patterns (Olin, Malinalli, Nepantla)
- **Palette:** 7 sacred colors

### Philosophy Alignment
- **TEOTL** (Cosmic Energy) → Radial Layout
- **MALINALLI** (Rotation) → Hover in Grid
- **OLIN** (Pulsing) → Center of Radial
- **QUINCUNX** (5 Directions) → Quincunx Layout
- **NEPANTLA** (In-between) → Transitions

---

## 2. QUICK START
*(Formerly QUICK_START_BORGIA.md)*

### Visualization (Standalone)
To see the system running immediately:

1.  Open `index.tsx`
2.  Temporarily replace content with:
    ```typescript
    import BorgiaLab from './BorgiaLab';
    root.render(<BorgiaLab />);
    ```
3.  Run `npm run dev`
4.  Use the top buttons to switch between GRID, RADIAL, NARRATIVE, QUINCUNX.

### Integration in Portfolio
To add to `LabSection.tsx`:

```typescript
import BorgiaExplorations from './BorgiaExplorations';

// ... inside your JSX
<div className="mt-16">
  <BorgiaExplorations />
</div>
```

### Quick Customization
Edit `components/sections/BorgiaExplorations.tsx`:

```typescript
const EXAMPLE_GLYPHS = [
  {
    id: 'my-id',
    icon: '/icons/my-icon.png',
    title: 'My Title',
    description: 'Description',
    color: '#FF0844'
  }
];
```

---

## 3. VISUAL & PHILOSOPHY REFERENCE
*(Formerly VISUAL_REFERENCE.md)*

### Design Sources

#### 1. Grid of Glyphs
*Inspiration:* Codex pages with ordered grids.
*Implementation:* **GRID Layout**. Square aspect ratio. Red borders (#FF0844) mimicking codex division lines. Corner markers.

#### 2. Radiant Deity
*Inspiration:* Central figures with emanating energy rays.
*Implementation:* **RADIAL Layout**. Central Teotl element. 12 peripheral elements (ritual count). Olin pulse animation.

#### 3. Narrative Sequence
*Inspiration:* Sequential reading of events (years/days).
*Implementation:* **NARRATIVE Layout**. Chronological flow. Numbered nodes. Connecting paths.

#### 4. Cosmological Map
*Inspiration:* The 5 directions of the universe.
*Implementation:* **QUINCUNX Layout**.
- **Center:** Green (Jade/Equilibrio)
- **North:** White (Cold/Death)
- **East:** Red (Action/Sun)
- **South:** Yellow (Harvest)
- **West:** Black (Introspection/Obsidian)

### Sacred Color Palette
Based on `TEOCAYOTL_GUIDE`:

| Color | Hex | Meaning |
|-------|-----|---------|
| **Obsidian** | `#0A0E27` | Base/Night/Wisdom (In Tlilli) |
| **Thermal** | `#FF0844` | Blood/Life/Action (In Tlapalli) |
| **Solar** | `#FFBE0B` | Sun/Maize/Gold |
| **Cyan** | `#00E5FF` | Turquoise/Precious |
| **Jade** | `#00FFC8` | Center/Balance/Earth |
| **Quetzal** | `#FF1B8D` | Vibrant Accent |
| **White** | `#E0E0E0` | Bone/North |

### Animation Patterns

- **OLIN (Pulsing):** `Scale 1 → 1.05 → 1`. Represents heartbeats, life cycles.
- **MALINALLI (Twisting):** `Rotate 0 → -5° → +5° → 0`. Represents grass twisting, transformation.
- **NEPANTLA (Transitional):** Fade in/out. Represents the state of being "in-between".

---

## 4. TECHNICAL LAYOUTS
*(Formerly BORGIA_EXPLORATIONS.md)*

### Data Structure
All layouts use the `GlyphData` interface:

```typescript
interface GlyphData {
  id: string;           // Unique ID
  icon: string;         // Path to image/icon
  title: string;        // Main label
  description: string;  // Subtitle/Context
  color: string;        // Theme color (hex)
}
```

### Layout Components

#### 1. GRID (Cuadrícula Regular)
- **Props:** `glyphs: GlyphData[]`
- **Behavior:** Responsive columns (4 mobile, 6 desktop).
- **Interaction:** Hover triggers Malinalli rotation. Tooltip on hover.

#### 2. RADIAL (Deidad Central)
- **Props:** `glyphs: GlyphData[]`
- **Behavior:** First glyph is CENTER. Next 12 are PERIPHERAL.
- **Visuals:** Background radial lines. Pulse effect on center.

#### 3. NARRATIVE (Secuencia Temporal)
- **Props:** `glyphs: GlyphData[]`
- **Behavior:** Wraps in rows of 5. Connected by SVG lines.
- **Style:** Vertical cards (3:4 ratio). Numbered badges.

#### 4. QUINCUNX (5 Direcciones)
- **Props:** `glyphs: GlyphData[]`
- **Logic:**
  - Index 0: Center (Green)
  - Index 1: North (White)
  - Index 2: East (Red)
  - Index 3: South (Yellow)
  - Index 4: West (Black)
  - Rest: Peripheral circle.

---

## 5. INTEGRATION GUIDE
*(Formerly INTEGRATION_GUIDE.md)*

### Connecting with `portfolioData.ts` or `technologiesData.ts`

#### Example: Skills in Grid
```typescript
import { GridLayout } from './BorgiaExplorations';
import { TECHNOLOGIES } from '../../data/technologiesData';

const techGlyphs = TECHNOLOGIES.map(tech => ({
  id: tech.name,
  icon: `/icons/${tech.icon}`,
  title: tech.name,
  description: tech.category,
  color: tech.color || '#00E5FF'
}));

<GridLayout glyphs={techGlyphs} />
```

#### Example: Featured Project in Radial
```typescript
import { RadialLayout } from './BorgiaExplorations';
import { ALL_PROJECTS } from '../../data/portfolioData';

const project = ALL_PROJECTS.lighting[0];
const glyphs = [
  {
    id: project.id,
    icon: project.images[0],
    title: project.title,
    description: "Featured System",
    color: '#FF1B8D'
  },
  // ... map technologies or related items here
];

<RadialLayout glyphs={glyphs} />
```

#### Example: Skills by Direction (Quincunx)
Map specific skills to directions based on their nature:
- **North (White/Cold):** Abstract/Thinker skills
- **East (Red/Action):** Builder/Coder skills
- **South (Yellow/Harvest):** Results/IoT skills
- **West (Black/Intro):** Design/Art skills
- **Center (Green/Balance):** Fullstack/Integration

---

## 6. CHEAT SHEET
*(Formerly BORGIA_CHEATSHEET.md)*

### Quick Reference

| Component | Import |
|-----------|--------|
| **Main** | `import BorgiaExplorations from './components/sections/BorgiaExplorations';` |
| **Grid** | `import { GridLayout } ...` |
| **Radial** | `import { RadialLayout } ...` |
| **Narrative** | `import { NarrativeLayout } ...` |
| **Quincunx** | `import { QuincunxLayout } ...` |

### When to use what?

| Layout | Use Case |
|--------|----------|
| **GRID** | Indexes, Catalogs, All Skills |
| **RADIAL** | Spotlight Project, Core Competence |
| **NARRATIVE** | History, Tutorials, Process Steps |
| **QUINCUNX** | Values, Philosophy, Team Structure |

### Troubleshooting
- **Images broken?** Check `/public/icons/` paths.
- **Styles broken?** Ensure Tailwind is running.
- **Slow?** Limit glyph count to ~30 per instance or use lazy loading for images.

---
**System Version:** 1.0.0
**Philosophy:** Teocayotl (Toltec Way)
