# Wedlock — Celebrations. Thoughtfully produced.

A complete, production-ready website for **Wedlock**, a premium celebration planning &
production house covering Weddings, Birthdays, Anniversaries, Engagements and
Family & Private celebrations — with a signature Destination Weddings desk.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with custom design tokens (colors, script/display/body font stacks)
- **framer-motion** for PageTransition, ImageReveal, AnimatedText, MagneticButton, carousels
- **lucide-react** icons
- Fonts via `next/font/google`: Sacramento, Alex Brush, Allura, Dancing Script, Beau Rivage
  (display moments) + Playfair Display (headings) + Manrope (body/UI)

## Scripts

```bash
npm run dev                          # dev server on 0.0.0.0:3000
npm run build                        # production build
npm run start                        # serve production build
node scripts/generate-images.mjs     # re-render SVG placeholder imagery
```

## Imagery

All imagery is generated locally by `scripts/generate-images.mjs`, which scans the
source for every `/images/...` reference and renders an art-directed, brand-toned SVG
placeholder (per-category palettes). Replace files in `public/images/…` with real
photography at identical paths — no code changes needed.

## Key routes

`/` · `/celebrations` (+5 category pages, 51 sub-service cards) · `/events` (+12 case
studies) · `/services` · `/destinations` (+8 destination pages) · `/journal` (+8
articles) · `/about` · `/plan-your-celebration` (multi-step enquiry flow) · `/contact` ·
`/privacy` · `/terms` · `POST /api/enquiry` (validated via `lib/validations.ts`).

## Enquiry flow

`/plan-your-celebration` runs OccasionSelector → EventDetails → ContactDetails →
SuccessState, posting to `/api/enquiry`. Deep links pre-fill the form, e.g.
`/plan-your-celebration?occasion=weddings&service=destination-weddings&city=Udaipur`.

Plan · Design · Produce · Execute
