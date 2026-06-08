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

  // TODO (client input): confirm founding year — the brief notes the Facebook
  // page was created ~mid-2024, so the studio likely opened in 2024.
  founded: "2024",

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
      // Same number for texting — the studio takes bookings by call or text.
      sms: `sms:${phoneDisplay.replace(/[^+\d]/g, "")}`,
    },
    // No email contact: the client cannot be reached by email. Bookings are made
    // by phone/text or Facebook/Instagram DM (see /contact).
  },

  /** The one action we want every visitor to take. Booking is by call/text or
   *  social DM, so every "Book Now" CTA points at the Contact page. */
  cta: { label: "Book Now", href: "/contact" },
  bookingNote:
    "No online booking system yet — call or message to book. A booking-platform link (Fresha/Timely) can replace this later.",

  social: {
    facebook: "https://www.facebook.com/bliss.nails.and.lashes.studio",
    // Handle read from the owner's own price-list / business-card image
    // (@bliss_nails_and_lashes_studio). TODO (client input): confirm it's correct.
    instagram: "https://www.instagram.com/bliss_nails_and_lashes_studio",
  },

  nav: {
    // Shown in the desktop header.
    primary: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Gallery", href: "/gallery" },
      { label: "Reviews", href: "/reviews" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ] satisfies NavItem[],
    // Full set — used by the mobile sheet menu and the footer "Explore" list.
    // Only real, finished pages are linked here.
    all: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Gallery", href: "/gallery" },
      { label: "Reviews", href: "/reviews" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ] satisfies NavItem[],
  },
};

export type SiteConfig = typeof siteConfig;
