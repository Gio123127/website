/**
 * The people behind Bliss.
 *
 * Today that's one person — Gulshan — because the whole promise is "one artist,
 * start to finish" (see the CLAUDE.md brief; clients praise seeing the same
 * person every visit). It's intentionally an array so the About page is
 * data-driven and ready if the studio ever grows: with a single entry it
 * renders as a featured "meet the artist" card, not a multi-person grid (which
 * would contradict the solo-studio story).
 *
 * TODO (client input): confirm Gulshan's name spelling / preferred name and
 * role title, and approve the bio wording.
 */

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  alt: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Gulshan",
    role: "Founder & Artist",
    image: "/images/portrait.svg",
    alt: "Gulshan, founder and artist at Bliss Nails & Lashes Studio",
    bio: "Gulshan is the founder, owner and the only pair of hands at Bliss. She works across gel, acrylic and BIAB nails and classic-to-Russian-volume lash extensions — and she's known for a spotless setup, a gentle, unrushed manner, and showing every client how to care for their set so it lasts. Book Bliss and you book Gulshan: the same trusted artist, every single time.",
  },
];
