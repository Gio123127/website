/**
 * Single source of truth for site-wide data (header, footer, CTAs, SEO).
 * Items marked `// TODO (client input)` need confirmation from the owner —
 * see the brief in CLAUDE.md. Nothing here is guessed where the brief said
 * "don't guess" (e.g. the Instagram handle, the display email).
 */

export type NavItem = { label: string; href: string };

const phoneDisplay = "+64 20 4048 1859";

export const siteConfig = {
  name: "Bliss Nails & Lashes Studio",
  shortName: "Bliss Nails & Lashes",
  /** Wordmark lockup: "Bliss" (Fraunces) + small-caps brass trail. */
  wordmark: { lead: "Bliss", trail: "Nails & Lashes" },

  tagline: "Beautiful nails & lashes — never rushed.",
  description:
    "A private home studio in Camberley, Hastings for gel, acrylic and BIAB nails plus classic, hybrid and Russian-volume lash extensions — calm, unhurried, one artist start to finish. Rated 4.9★ across ~90 Google reviews.",

  reviews: {
    rating: "4.9",
    count: "90",
    source: "Google",
    // TODO (client input): replace with the canonical Google Business listing
    // URL. For now this is a Maps *search* (not a guessed listing link).
    url: "https://www.google.com/maps/search/?api=1&query=Bliss+Nails+and+Lashes+Studio+Hastings",
  },

  location: {
    suburb: "Camberley, Hastings",
    region: "Hawke's Bay, New Zealand",
    // Home studio: the full street address is intentionally NOT published.
    privacyNote:
      "Private home studio — the exact address is shared on your booking confirmation.",
  },

  areasServed: ["Hastings", "Havelock North", "Napier", "Flaxmere", "Hawke's Bay"],

  hours: {
    summary: "By appointment",
    detail: "7 days · 9am – 9pm",
    // TODO (client input): confirm true bookable hours (Google lists 9–9, 7 days).
  },

  contact: {
    phone: {
      display: phoneDisplay,
      href: `tel:${phoneDisplay.replace(/[^+\d]/g, "")}`,
    },
    // TODO (client input): display email + enquiry-form destination address.
    email: null as string | null,
  },

  /** The one action we want every visitor to take. v1 = call/message to book. */
  cta: { label: "Book Now", href: "/booking" },
  bookingNote:
    "No online booking system yet — call or message to book. A booking-platform link (Fresha/Timely) can replace this later.",

  social: {
    facebook: "https://www.facebook.com/bliss.nails.and.lashes.studio",
    // TODO (client input): confirm the exact Instagram @handle before linking
    // (the brief says an account exists but the handle is unverified — don't guess).
    instagram: null as string | null,
  },

  nav: {
    // Shown in the desktop header — kept to the essentials for legibility.
    primary: [
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ] satisfies NavItem[],
    // Full set — used by the mobile sheet menu and the footer.
    all: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ] satisfies NavItem[],
  },
};

export type SiteConfig = typeof siteConfig;
