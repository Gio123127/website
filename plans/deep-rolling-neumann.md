# Bliss Nails & Lashes — cleanup, contact fix & reviews page

## Context
The site has half-built/filler routes and a contact flow that doesn't match how the
business actually works. The client takes bookings **only** by phone/text and via
Facebook/Instagram DMs — **never email**. This round: remove the filler + the
email/booking-form path, point every "Book Now" CTA at Contact, rebuild Contact around
call/text/social, add a real Reviews page for social proof, and fix a contrast bug.
**No redesign** — reuse the existing design system; real business name/phone/socials
already live in `src/lib/site.ts`.

Key facts found during inventory:
- **No email backend exists** (no API route / server action / mailto / EmailJS / Resend /
  Nodemailer). `contact-form.tsx` only has a `// TODO` and never sent mail.
- All "Book Now" CTAs funnel through `siteConfig.cta.href` (= `/booking`) via `BookCta`.
- The "upscaled" hero file is `photos/Uscaled image.png` (2100×2880; filename typo + space,
  and it sits in the **root `photos/` source folder, not `public/`**, so it isn't served yet).
- Form libs (`react-hook-form`, `@hookform/resolvers`) + ui `form/input/textarea/select/label`
  are used **only** by `contact-form.tsx`. `siteConfig.contact.email` is referenced nowhere.
- White-on-white bug = `closing-cta.tsx`'s `CallButton` (Button `variant="outline"` sets no
  default text colour) inheriting `text-oat` inside the cacao card → invisible until hover.

## Implementation

### A. `src/lib/site.ts` (drives most of it)
- **#3 Book→Contact:** `cta.href: "/booking"` → `"/contact"`. Repoints every `BookCta`
  (header, hero, mobile bar, footer, closing CTA, services/about) in one edit.
- **#1 header nav** (`nav.primary`) → `[Home (/), Services, Pricing, Gallery, Reviews (/reviews), About, Contact]`.
  ("Book an Appointment" nav link never existed — nothing to remove there.)
- **#2 footer Explore** (`nav.all`, also feeds the mobile sheet) → same 7 real pages
  `[Home, Services, Pricing, Gallery, Reviews, About, Contact]`; drops Testimonials, FAQ, Booking.
- **#4/#5 no email:** remove the unused `contact.email` field (no email contact anywhere).

### B. Delete filler & orphans (#4, #10)
- Delete route: **`src/app/booking/` only**. Per your call, **keep** `src/app/faq/` and
  `src/app/testimonials/` route files — they remain as placeholders, just unlinked from
  nav/footer (Section A removes them from `nav.all`).
- **Keep** `src/components/page-placeholder.tsx` (still used by faq + testimonials).
- Delete now-orphaned: `src/components/contact-form.tsx` and ui
  `form.tsx/input.tsx/textarea.tsx/select.tsx/label.tsx`.
- `npm uninstall react-hook-form @hookform/resolvers`.

### C. Contact page rebuild — `src/app/contact/page.tsx` (#5)
Remove `<ContactForm/>`. Keep it a server component. Offer ONLY, as large high-contrast
buttons: **Call** (`siteConfig.contact.phone.href`), **Text** (`sms:` same number),
**Facebook**, **Instagram** (`siteConfig.social.*`, with `FacebookIcon`/`InstagramIcon` from
`components/icons.tsx`), plus the phone number shown in plain text. Add a short on-brand
**"How to book"** section stating booking is by call/text or FB/IG DM and that **there is no
email contact**. Keep the existing hours, areas-served, and styled map placeholder. No
`ClosingCta` here (it would link to /contact itself).

### D. Reviews page — NEW (#6)
- `src/lib/reviews.ts` (matches `gallery.ts`/`team.ts` convention): `export type Review =
  { author: string; rating: number /*1–5*/; date: string; text: string; sourceUrl?: string }`
  + `export const reviews: Review[]` seeded with **4 EXAMPLE entries**, clearly commented
  `// EXAMPLE — replace with real exported Google reviews` (do NOT fabricate 90).
- `src/app/reviews/page.tsx` (server component, `metadata`): aggregate header using
  `siteConfig.reviews` (`4.9 ★ · 90 Google reviews`); a prominent **"Read all 90 reviews on
  Google"** button → `siteConfig.reviews.url`; responsive card grid (author, star rating,
  date, text, "View on Google" link when `sourceUrl` set). Renders gracefully for any count;
  include a clearly-commented placeholder spot for a future 3rd-party reviews widget. Small
  local `StarRating({rating})` (variable 1–5; mirrors the home page's `Stars` idiom). End with
  `<ClosingCta/>`. Reuse `eyebrow`, `bg-card`/`border` cards, brass accents.

### E. Targeted fixes
- **#7 contrast** — `src/components/closing-cta.tsx`: give the call button explicit colours so
  the number is always legible on the cacao card — pass a className making it a solid
  **oat background + cacao text** secondary button (overrides the inherited-colour outline
  variant). "Book Now" beside it already → /contact via #3.
- **#8 About icons** — `src/app/about/page.tsx`: in the `VALUES.map` cards remove the icon
  badge `<span class="…bg-accent text-brass"><Icon/></span>`, drop the now-unused lucide
  imports, and change each card from `flex items-start gap-4` to a plain text block; keep
  title + body. (Confirmed: About page only — the home "Why Bliss" icon cards stay as-is.)
- **#9 hero** — process `photos/Uscaled image.png` → `public/photos/hero-upscaled.jpg` via
  `sharp` (resize ≈1600w, JPEG q≈82, EXIF stripped, matching the other photos); set the home
  hero `<Image src>` in `src/app/page.tsx` to it (keep `fill`/`object-cover` + the existing
  scrims). Also fix the stale comment atop `page.tsx` that claims SVG placeholders.
- **#10** — repoint the home testimonial's "Read all reviews" link → `/reviews`; flag the
  testimonial copy (labelled "representative") rather than rewriting it.

## Verification
- `npm run build` **and** `npx eslint .` → clean (no dead imports/links; `/booking` route gone;
  `/faq` + `/testimonials` kept but unlinked; build succeeds with form deps removed).
- Grep that nothing still references `/booking`, `contact-form`, the deleted ui form files,
  or `PagePlaceholder`.
- Playwright (375 + 1440): Contact shows only call/text/FB/IG + "no email" note; `/reviews`
  renders cards + aggregate + Google button; closing-section "Call …" button legible by
  default (screenshot, no hover); new hero loads; About cards have no icons. Confirm the
  header shows Home-first + Reviews and the footer Explore lists only real pages.

**Resolved:** About icons → About page only. `/faq` + `/testimonials` → keep files, just unlink.

## TODOs (your input, post-implementation)
1. **`/reviews` data** is example-only — replace `src/lib/reviews.ts` with your real exported reviews.
2. **"Read all reviews" link** uses `siteConfig.reviews.url` = a Google **Maps search** (already a
   `// TODO` in code) — swap for the canonical Google listing URL when you have it.
3. **Home testimonial** is still a labelled "representative" quote with a TODO — replace with a real
   review or rely on `/reviews`? (I'll keep it + point its link to /reviews for now.)
4. Reviews data lives at `src/lib/reviews.ts` (matches the codebase). Say if you prefer `data/reviews.ts`.
