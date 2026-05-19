# Frozen Woods × The Northern Chapter
### A premium mountain homestay website — Next.js 14

---

## Brand Architecture

```
The Northern Chapter (Parent Brand — a philosophy)
  └── Frozen Woods (Property — the first chapter)
       └── Mukteshwar, Uttarakhand · 2,286m
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       ← Root layout + metadata
│   └── page.tsx         ← Page composition
├── components/
│   ├── Cursor.tsx        ← Custom cursor (desktop only)
│   ├── Navbar.tsx        ← Fixed nav — TNC/FW brand hierarchy
│   ├── Hero.tsx          ← Parallax hero — Frozen Woods
│   ├── Manifesto.tsx     ← Scrolling marquee strip
│   ├── Story.tsx         ← Brand story + 3D image stack
│   ├── Experience.tsx    ← Feelings not facilities (6 cards)
│   ├── Gallery.tsx       ← Auto-scroll gallery + lightbox
│   ├── Numbers.tsx       ← Animated stat counters
│   ├── Booking.tsx       ← Curated enquiry form
│   ├── Voices.tsx        ← Guest reflections
│   ├── Expansion.tsx     ← Future collection teaser
│   ├── Footer.tsx
│   ├── Lightbox.tsx      ← Gallery lightbox (event-driven)
│   └── RevealInit.tsx    ← IntersectionObserver scroll reveals
├── styles/
│   └── globals.css       ← Design tokens + reset
```

---

## Color System

| Token         | Value     | Role                          |
|---------------|-----------|-------------------------------|
| `--void`      | `#0D0D0B` | Darkest background            |
| `--deep`      | `#141410` | Primary dark background       |
| `--surface`   | `#1C1C18` | Card/panel surface            |
| `--ridge`     | `#252520` | Elevated surface              |
| `--gold`      | `#C4A96B` | Primary accent (desaturated)  |
| `--gold-dim`  | `#8A7245` | Muted gold                    |
| `--gold-pale` | `#E8D8A8` | Lightest gold                 |
| `--cream`     | `#F4F2EA` | Heading text                  |
| `--ash`       | `#8A8A80` | Body text                     |
| `--slate`     | `#5A5A52` | Secondary text                |

---

## Typography

| Role    | Font                 | Usage                         |
|---------|----------------------|-------------------------------|
| Display | Playfair Display     | Headlines, hero title          |
| Body    | EB Garamond          | Long-form copy, quotes         |
| UI      | Instrument Sans      | Labels, nav, CTAs, eyebrows    |

---

## Key Features

- ✦ Multi-layer parallax hero (6 independent scroll depths)
- ✦ Custom cursor with lag ring (desktop only)
- ✦ Scroll-triggered reveal animations (IntersectionObserver)
- ✦ Animated stat counters
- ✦ Auto-scrolling dual-row gallery with pause-on-hover
- ✦ Click-to-lightbox gallery items
- ✦ 3D mouse-parallax image stack
- ✦ Fully responsive (mobile nav with overlay menu)
- ✦ Film grain texture overlay
- ✦ SEO metadata via Next.js `metadata` API
- ✦ Zero external dependencies beyond Next.js + React

---

## Customisation

**To add your real images:** Replace SVG scenes in `Gallery.tsx` with `<Image>` components from `next/image`.

**To change contact details:** Edit `Booking.tsx` and `Footer.tsx`.

**To update pricing:** Edit the `.pricing` block in `Booking.tsx`.

**To add a new property (Chapter 02):** Update `Expansion.tsx` with the new name and location.

---

## Design Philosophy

> "The Northern Chapter is not a brand. It is a disposition."

This website is intentionally selective in its language. It disqualifies the wrong guest
before they enquire, and reassures the right one that they have found something rare.

Positioning: quiet · intentional · deeply human · slightly exclusive.
