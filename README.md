# CODE: INFINITY

CODE: INFINITY is a cinematic, Marvel-inspired event site for a 24-hour student hackathon hosted by the GeeksforGeeks Student Chapter at Bennett University. The Infinity Saga is used as a broad creative metaphor: six colored stones become six technology tracks, each with a practical starter challenge. The site uses no Marvel logos, film stills, or character images.

## Stack

- Next.js 14 App Router, React 18, and TypeScript
- Tailwind CSS 3 with the event palette defined as CSS variables and theme colors
- Framer Motion for route changes, reveals, and interaction states
- GSAP + ScrollTrigger for the hero depth effect
- Lucide React for interface icons
- Static export; there is no backend

## Routes

- `/` - Event hero, countdown, highlights, and track preview
- `/about` - Event concept and highlights
- `/tracks` - Six expandable track challenge cards
- `/schedule` - 24-hour event timeline
- `/judges` - Track judge and mentor announcement grid
- `/gallery` - Supplied event-theme images and keyboard-accessible lightbox
- `/register` - Registration call to action, countdown, and FAQ

Shared navigation and footer are rendered from `app/layout.tsx`. Reusable components live in `components/`, with track, schedule, judge, and gallery content centralized in `lib/event-data.ts`.

## Visual system

Display type uses Anton; body copy uses Poppins via `next/font/google`. The base palette is near-black (`#0A0A0F`) and charcoal (`#14141C`), with Marvel red (`#ED1D24`) and gold (`#D4AF37`). Track colors map to Space `#6C3BAA`, Mind `#F2C230`, Reality `#D0021B`, Power `#B33DC6`, Time `#3DB562`, and Soul `#E8792E`.

The files in `public/images/` were supplied with this project and are used for the hero, six track cards, about accent, gallery, and footer. The upstream photo source and license are not recorded in this repository; confirm their provenance before public distribution.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Create a static production export with:

```bash
npm run build
```

The export is written to `out/`. `next/image` is configured for unoptimized static assets so the exported site does not require an image-optimization server.

## Launch checklist

- Replace `https://forms.gle/your-registration-form` in `lib/event-data.ts` with the official registration form URL.
- Set `NEXT_PUBLIC_SITE_URL` to the final public origin so Open Graph URLs are correct.
- Confirm the draft team size, eligibility, venue logistics, final schedule, judging rules, participant capacity, prize pool, and organizer contact address before publishing.
- Replace the pending judge profiles with confirmed names and approved photos.
- Verify the image licenses for public use.