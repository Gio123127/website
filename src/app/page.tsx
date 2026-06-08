import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircleCheck,
  HandHeart,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { BookCta } from "@/components/book-cta";
import { ClosingCta } from "@/components/closing-cta";

/* ------------------------------------------------------------------ *
 * Home page.
 *
 * IMAGERY: real client photos in /public/photos (hero = the upscaled set). The
 * "Meet Gulshan" portrait is still a placeholder (/images/portrait.svg) until a
 * real portrait is supplied.
 *
 * COPY: the brief's warm, personal, honest angle. The testimonial below is a
 * labelled "representative" quote; the full social-proof page lives at /reviews.
 * ------------------------------------------------------------------ */

const VALUES = [
  {
    icon: HandHeart,
    title: "One artist, start to finish",
    body: "The same trusted hands every visit — you're never passed around or rushed out the door.",
  },
  {
    icon: ShieldCheck,
    title: "A calm, private studio",
    body: "A discreet home studio in Camberley, Hastings — not a crowded, noisy salon floor.",
  },
  {
    icon: CircleCheck,
    title: "Honest, upfront pricing",
    body: "Real prices, shown openly on the site — no guesswork, no surprises when it's time to pay.",
  },
];

const SERVICES = [
  {
    img: "/photos/Photo26.jpg",
    title: "Gel, Acrylic & BIAB",
    body: "Long-wearing gel, acrylic and BIAB sets — shaped, coloured and finished exactly how you like.",
  },
  {
    img: "/photos/Photo35.jpg",
    title: "Nail Art & French",
    body: "Custom nail art, French tips and seasonal designs — as subtle or as bold as you fancy.",
  },
  {
    img: "/photos/Photo2.jpg",
    title: "Lash Extensions",
    body: "Classic, hybrid and Russian-volume lashes, tailored to suit your eyes and your look.",
  },
];

const WORK = [
  { img: "/photos/Photo16.jpg", alt: "Stiletto nail art set" },
  { img: "/photos/Photo28.jpg", alt: "Baby pink almond set" },
  { img: "/photos/Photo21.jpg", alt: "French ombré set" },
  { img: "/photos/Photo30.jpg", alt: "Hot pink set" },
];

const STATS = [
  { value: `${siteConfig.reviews.rating}★`, label: "Average Google rating" },
  { value: `${siteConfig.reviews.count}+`, label: "Google reviews" },
  { value: "1", label: "Artist, start to finish" },
  { value: "7 days", label: "By appointment" },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── 1 · Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[92svh] w-full overflow-hidden">
        <Image
          src="/photos/hero-upscaled.jpg"
          alt="Freshly finished nails at the Bliss home studio"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Top scrim keeps the translucent header legible over the hero */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-oat/85 to-transparent" />
        {/* Bottom scrim carries the headline */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cacao/90 via-cacao/45 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-6 pb-24 pt-36 sm:pb-28">
          <div className="max-w-2xl [text-shadow:0_1px_16px_rgba(59,42,47,0.45)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-brass-tint)] [text-shadow:0_1px_4px_rgba(59,42,47,0.9)]">
              Private home studio · {siteConfig.location.suburb}
            </p>
            <h1 className="mt-4 text-balance font-display text-[2.6rem] leading-[1.04] text-oat sm:text-6xl md:text-7xl">
              Beautiful nails &amp; lashes — never rushed.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-oat/85">
              One artist, your full attention, in a calm private Hastings studio
              you&apos;ll want to come back to.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <BookCta className="h-12 px-7 text-base" />
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-oat underline-offset-4 transition-colors hover:text-oat/80 hover:underline"
              >
                See recent work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <Link
              href={siteConfig.reviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 text-sm text-oat/90 transition-opacity hover:opacity-80"
            >
              <Stars className="text-[var(--brand-brass-tint)]" />
              <span className="font-medium">
                {siteConfig.reviews.rating} · {siteConfig.reviews.count}+{" "}
                {siteConfig.reviews.source} reviews
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2 · Intro / value prop ───────────────────────────────── */}
      <section
        aria-labelledby="intro-heading"
        className="mx-auto max-w-6xl px-6 py-20 sm:py-28"
      >
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Why Bliss</p>
            <h2
              id="intro-heading"
              className="mt-4 text-balance font-display text-3xl leading-tight sm:text-4xl md:text-[2.7rem]"
            >
              Most salons rush you through.{" "}
              <em className="italic text-rose-clay">Here the chair is yours.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Bliss is a one-woman home studio in Camberley, run by Gulshan. You
              get her full attention for your whole appointment — no
              double-booking, no conveyor belt, no upsell.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Just careful gel, acrylic, BIAB and lash work, in a calm private
              space, priced honestly. It&apos;s the unhurried, one-on-one
              alternative her clients keep coming back for.
            </p>
          </div>

          <ul className="grid gap-4">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-brass">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg leading-snug">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3 · Services preview ─────────────────────────────────── */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="bg-muted"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">What I do</p>
              <h2
                id="services-heading"
                className="mt-4 text-balance font-display text-3xl leading-tight sm:text-4xl"
              >
                Nails &amp; lashes, done with care
              </h2>
            </div>
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brass underline-offset-4 hover:underline"
            >
              See the full list &amp; prices
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ img, title, body }) => (
              <Link
                key={title}
                href="/services"
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass">
                    Explore
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · Featured work / gallery preview ──────────────────── */}
      <section
        aria-labelledby="work-heading"
        className="mx-auto max-w-6xl px-6 py-20 sm:py-28"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Recent work</p>
            <h2
              id="work-heading"
              className="mt-4 text-balance font-display text-3xl leading-tight sm:text-4xl"
            >
              A little of what&apos;s possible
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brass underline-offset-4 hover:underline"
          >
            See the full gallery
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {WORK.map(({ img, alt }) => (
            <Link
              key={img}
              href="/gallery"
              aria-label={`${alt} — view gallery`}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={img}
                alt={alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* ── 5a · Meet Gulshan + trust stats ──────────────────────── */}
      <section aria-labelledby="meet-heading" className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-sm">
                <Image
                  src="/images/portrait.svg"
                  alt="Gulshan, owner and artist at Bliss Nails & Lashes Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              {/* brass frame accent */}
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl border border-brass/40"
              />
            </div>

            <div>
              <p className="eyebrow">Meet your artist</p>
              <h2
                id="meet-heading"
                className="mt-4 font-display text-3xl leading-tight sm:text-4xl"
              >
                Hi, I&apos;m Gulshan
              </h2>
              {/* TODO (client input): confirm name spelling + approve bio wording. */}
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                I run Bliss single-handed from my home studio in Camberley —
                which means the person you book is the person who does your nails
                and lashes, every single time.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I take the time to get it right, keep everything spotless, and
                show you how to care for your set so it lasts. No rush, no fuss —
                just a calm seat and work you&apos;ll love.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="bg-card px-4 py-5 text-center">
                    <dt className="font-display text-2xl text-foreground">
                      {value}
                    </dt>
                    <dd className="mt-1 text-xs leading-tight text-muted-foreground">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5b · Social proof / testimonial ──────────────────────── */}
      <section
        aria-labelledby="proof-heading"
        className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24"
      >
        <Quote className="mx-auto size-9 text-brass" aria-hidden />
        <h2 id="proof-heading" className="sr-only">
          What clients say
        </h2>
        {/* TODO (client input): replace with a real, owner-approved Google
            review + reviewer first name. Wording below is representative of
            recurring review themes, not a verbatim quote. */}
        <blockquote className="mt-6 text-balance font-display text-2xl italic leading-snug text-foreground sm:text-[1.75rem]">
          &ldquo;She never rushes, the studio is spotless and private, and she
          shows you exactly how to keep your set looking good. I booked my next
          appointment before I&apos;d even left.&rdquo;
        </blockquote>
        <div className="mt-7 flex flex-col items-center gap-3">
          <Stars className="text-brass" />
          <p className="text-sm text-muted-foreground">
            Representative of recent Google reviews
          </p>
          <Link
            href="/reviews"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brass underline-offset-4 hover:underline"
          >
            Read all {siteConfig.reviews.count}+ reviews
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* ── 6 · Closing CTA ──────────────────────────────────────── */}
      <ClosingCta />
    </>
  );
}
