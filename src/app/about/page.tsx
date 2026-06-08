import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { team } from "@/lib/team";
import { BookCta } from "@/components/book-cta";
import { ClosingCta } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Bliss Nails & Lashes Studio — a one-woman home studio in Camberley, Hastings, where one artist does every set start to finish, never rushed.",
};

/* ------------------------------------------------------------------ *
 * About page — Phase 2 content.
 *
 * "Team" is intentionally one person: Bliss is a solo home studio and the whole
 * promise is "one artist, start to finish" (see CLAUDE.md). People are seeded in
 * src/lib/team.ts (data-driven + extensible); with one entry it renders as a
 * featured artist card, not a grid. Imagery is on-brand SVG placeholders in
 * /public/images (one-line `src` swap for real photos).
 *
 * TODO (client input): confirm founding year (site.ts `founded`), Gulshan's
 * name/role + background, and approve the story/values wording.
 * ------------------------------------------------------------------ */

const VALUES = [
  {
    title: "One artist, start to finish",
    body: "You book Gulshan, and Gulshan is who you get — every visit. No hand-offs, no rotating staff, no being passed around.",
  },
  {
    title: "Private & unhurried",
    body: "A calm home studio with one client at a time. Your appointment is yours — never rushed to make room for the next booking.",
  },
  {
    title: "Spotless every time",
    body: "A clean, careful setup for every single client — something the reviews mention again and again.",
  },
  {
    title: "Honest & caring",
    body: "Real prices shown openly, plus aftercare advice so your set lasts. No pressure and no surprises.",
  },
];

const STATS = [
  { value: `Est. ${siteConfig.founded}`, label: "Camberley home studio" },
  { value: `${siteConfig.reviews.rating}★`, label: "Average Google rating" },
  { value: `${siteConfig.reviews.count}+`, label: "Google reviews" },
  { value: "1", label: "Artist, start to finish" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page header ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="max-w-2xl">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            A calmer way to do nails &amp; lashes
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            No conveyor belt, no double-booking, no rush — just one artist, a
            private studio in Camberley, and work done properly.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <BookCta className="h-12 px-7 text-base" />
            <Link
              href={siteConfig.reviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brass underline-offset-4 hover:underline"
            >
              Read the reviews
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Company story ────────────────────────────────────────── */}
      <section
        aria-labelledby="story-heading"
        className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image first in the DOM → on top on mobile; moves right on desktop */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm lg:order-2">
            <Image
              src="/photos/Photo45.jpg"
              alt="Finished nails and polish at the Bliss studio in Camberley"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="lg:order-1">
            <p className="eyebrow">Our story</p>
            <h2
              id="story-heading"
              className="mt-3 font-display text-3xl sm:text-4xl"
            >
              It started in {siteConfig.founded}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              Bliss Nails and Lashes Studio opened in {siteConfig.founded}, when
              Gulshan set up a studio of her own — a calm, private space in
              Camberley, Hastings, run start to finish by her.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              She&apos;d seen how rushed a busy salon can feel: double-booked,
              hurried, a different person each time. Bliss is the opposite — one
              artist, one client, and as long as it takes to get it right.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That care shows. Bliss holds a {siteConfig.reviews.rating}-star
              rating across around {siteConfig.reviews.count}{" "}
              {siteConfig.reviews.source} reviews, from clients who return as
              much for the unhurried, one-on-one feel as for the nails and lashes
              themselves.
            </p>
            <Link
              href={siteConfig.reviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brass underline-offset-4 hover:underline"
            >
              Read the reviews on Google
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <section aria-labelledby="values-heading" className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-xl">
            <p className="eyebrow">What we stand for</p>
            <h2
              id="values-heading"
              className="mt-4 text-balance font-display text-3xl leading-tight sm:text-4xl"
            >
              The little things, done properly
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="font-display text-lg leading-snug">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stat band ────────────────────────────────────────────── */}
      <section
        aria-label="Bliss at a glance"
        className="mx-auto max-w-6xl px-6 py-12 sm:py-16"
      >
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-card px-5 py-7 text-center">
              <dt className="font-display text-2xl text-foreground sm:text-3xl">
                {value}
              </dt>
              <dd className="mt-1.5 text-xs leading-tight text-muted-foreground">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Meet the artist (team.ts) ────────────────────────────── */}
      <section aria-labelledby="team-heading" className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-xl">
            <p className="eyebrow">Meet the artist</p>
            <h2
              id="team-heading"
              className="mt-4 text-balance font-display text-3xl leading-tight sm:text-4xl"
            >
              The artist behind Bliss
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Bliss is a one-woman studio — so the artist is the whole team, and
              that&apos;s rather the point.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-8">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[18rem_1fr] lg:items-center lg:gap-10">
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 1024px) 80vw, 18rem"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl">{member.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                      {member.role}
                    </p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────── */}
      <ClosingCta
        title="Come and see for yourself"
        description={
          <>
            Book in and feel the difference one-on-one makes — I&apos;ll confirm
            your time and send you the studio address.
          </>
        }
      />
    </>
  );
}
