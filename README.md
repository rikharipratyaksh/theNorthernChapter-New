# Frozen Woods × The Northern Chapter
### Next.js 14 · Auto Day/Night · 4 Color Themes

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build && npm run start
```

---

## Brand Architecture

```
The Northern Chapter  ← philosophy / parent brand
  └── Frozen Woods    ← the first chapter / property
       └── Mukteshwar, Uttarakhand · 2,286m
```

---

## 🌗 Theme System

### Auto Day / Night Detection

The website automatically detects local time and applies:

| Time          | Theme  |
|---------------|--------|
| 06:00 – 18:30 | Day    |
| 18:30 – 06:00 | Night  |

A **toggle button** (bottom-right corner) lets visitors override automatically.

### Sky Animations

**Day Mode:**
- Glowing, pulsing sun
- 3 drifting cloud layers
- 5 animated birds with wing-flap motion
- Warm gradient sky

**Night Mode:**
- 150 twinkling stars
- Shooting stars at random intervals (4–14s)
- Moon with soft glow pulse
- Deep forest gradient sky

---

## 🎨 Color Themes (in `src/styles/globals.css`)

### Theme 1 — Alpine Parchment ← **ACTIVE**
Warm parchment, muted bronze, subtle pine. Literary, timeless.

### Theme 2 — Morning Mist ← Uncomment to activate
Mist grey, ivory, desaturated sage. Serene, airy, contemplative.

### Theme 3 — Nordic Retreat ← Uncomment to activate
Soft white, ash grey, restrained brass. Modern, minimal, quiet luxury.

### Night — Deep Forest ← Always active at night
Near-black, desaturated gold, pine tones. Intimate, atmospheric.

**To switch light theme:** open `src/styles/globals.css`, uncomment desired `:root` block, comment the others.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Metadata + font imports
│   └── page.tsx            ← Page composition
├── components/
│   ├── ThemeController.tsx  ← Auto day/night + manual toggle
│   ├── Cursor.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx             ← Parallax + day/night sky
│   ├── Manifesto.tsx        ← Scrolling brand strip
│   ├── Story.tsx            ← Brand story + 3D image stack
│   ├── Experience.tsx       ← Feelings, not facilities
│   ├── Gallery.tsx          ← Auto-scroll + lightbox
│   ├── Numbers.tsx          ← Animated counters
│   ├── Booking.tsx          ← Curated enquiry form
│   ├── Voices.tsx           ← Guest reflections
│   ├── Expansion.tsx        ← Future collection teaser
│   ├── Footer.tsx
│   ├── Lightbox.tsx
│   └── RevealInit.tsx
├── styles/
│   └── globals.css          ← All 4 themes + design tokens
```

---

## Typography

| Role    | Font              |
|---------|-------------------|
| Display | Playfair Display  |
| Body    | EB Garamond       |
| UI      | Instrument Sans   |

---

## Copy Philosophy

> Quiet. Intentional. Slightly exclusive.
>
> The user should feel: "I don't know exactly what this is — but I know it's for me."

