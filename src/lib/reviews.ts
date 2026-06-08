/**
 * Reviews data — powers the /reviews page.
 *
 * ⚠️ EXAMPLE DATA. The entries below are realistic placeholders so the page
 * renders and styles correctly. REPLACE this array with the salon's real
 * exported Google reviews before launch. Do NOT try to reproduce all ~90 here —
 * the page shows the aggregate from `siteConfig.reviews` (4.9★ · 90) and links
 * out to Google for the full set.
 *
 * The page (src/app/reviews/page.tsx) renders however many entries exist (0, 5
 * or 90), so a third-party Google-reviews widget could later replace this array
 * + the card grid without touching the rest of the page.
 */

export type Review = {
  /** Reviewer name as shown on Google, e.g. "Sarah M." */
  author: string;
  /** Whole-star rating, 1–5. */
  rating: number;
  /** Human-readable date, e.g. "March 2025". */
  date: string;
  /** The review text. */
  text: string;
  /** Direct link to this review on Google, when available. */
  sourceUrl?: string;
};

// EXAMPLE reviews — replace with the real exported Google reviews.
export const reviews: Review[] = [
  {
    author: "Sarah M.",
    rating: 5,
    date: "March 2025",
    text: "Honestly the best nails I've had in Hastings. Gulshan never rushes, the home studio is spotless and so private, and my BIAB set lasted weeks. Already booked my next visit.",
  },
  {
    author: "Priya K.",
    rating: 5,
    date: "February 2025",
    text: "Got classic lashes done and I'm obsessed. She took the time to map them to my eyes and they look so natural. Lovely calm space and really fair prices.",
  },
  {
    author: "Emma T.",
    rating: 5,
    date: "January 2025",
    text: "One-on-one the whole time — none of the being-passed-around you get at the big salons. She showed me exactly how to look after them too. Can't recommend Bliss enough.",
  },
  {
    author: "Hine W.",
    rating: 5,
    date: "December 2024",
    text: "Beautiful French set and the chats were a bonus. So easy to book by text and she fit me in before Christmas. Will be back!",
  },
  {
    author: "Jess R.",
    rating: 5,
    date: "November 2024",
    text: "So glad I found her. Clean, friendly, affordable, and my acrylics are exactly what I asked for. The privacy of the home studio is a real plus.",
  },
];
