import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock, HandHeart, Phone, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { BookCta } from "@/components/book-cta";
import { ClosingCta } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Gel, acrylic and BIAB manicures, nail art and French sets, plus classic, hybrid and Russian-volume lash extensions — by one artist in a private Hastings home studio.",
};

/* ------------------------------------------------------------------ *
 * Services page — Phase 2 content.
 *
 * Each service is an alternating image/text block. Images are the on-brand
 * SVG placeholders in /public/images (one-line `src` swap when Gulshan's real
 * photos arrive — see CLAUDE.md brief). Prices intentionally live on the
 * /pricing page, not here.
 *
 * TODO (client input): confirm the full service list + exact systems/options
 * offered (reviews call it a "one-stop shop" — verify before adding more).
 * ------------------------------------------------------------------ */

const SERVICES = [
  {
    slug: "nails",
    eyebrow: "Nails",
    title: "Gel, Acrylic & BIAB",
    img: "/photos/Photo10.jpg",
    alt: "Close-up of a freshly finished gel manicure",
    body: [
      "Long-wearing manicures, shaped and finished exactly how you like them. Whether it's the natural strength of BIAB, a durable acrylic set or a glossy gel overlay, we'll pick what suits your nails and your day-to-day.",
      "Then we take the time to get the shape and colour just right — no rushing, no cutting corners.",
    ],
    includes: [
      "A quick chat about shape, length & finish",
      "Gentle prep and cuticle care",
      "Your choice of gel, acrylic or BIAB",
      "Colour, overlay or a natural look",
      "Aftercare tips so it lasts",
    ],
  },
  {
    slug: "nail-art",
    eyebrow: "Nail art",
    title: "Nail Art & French",
    img: "/photos/Photo43.jpg",
    alt: "Hand-painted nail art and a classic French set",
    body: [
      "From a clean classic French to hand-painted detail, this is where we have a little fun. Bring a picture or just an idea and we'll make it yours.",
      "As subtle or as bold as you like — and always sealed to last.",
    ],
    includes: [
      "Design chat — bring inspo or ideas",
      "Classic & coloured French tips",
      "Hand-painted art and ombré",
      "Gems, foils and seasonal touches",
      "A sealed, long-wear finish",
    ],
  },
  {
    slug: "lashes",
    eyebrow: "Lashes",
    title: "Lash Extensions",
    img: "/photos/Photo2.jpg",
    alt: "A full, fluttery set of volume lash extensions",
    body: [
      "Wake up ready. Classic for a natural lift, hybrid for a fuller flutter, or Russian volume for full drama — every set is mapped to suit your eyes.",
      "Applied lash-by-lash so it feels light and looks like you, only better.",
    ],
    includes: [
      "Lash mapping to suit your eye shape",
      "Classic, hybrid or Russian volume",
      "Length and curl chosen with you",
      "Lightweight, comfortable application",
      "Aftercare + infill guidance",
    ],
  },
];

const STEPS = [
  {
    icon: Phone,
    title: "Message to book",
    body: "Call or DM with what you'd like and a couple of times that suit. I'll confirm and send you the studio address.",
  },
  {
    icon: Sparkles,
    title: "A quick consult",
    body: "When you arrive we'll talk through shape, colour or lash style so it's exactly what you're after.",
  },
  {
    icon: Clock,
    title: "Your unhurried visit",
    body: "Just you, in a calm private space — no double-booking and no rushing. The time is yours.",
  },
  {
    icon: HandHeart,
    title: "Aftercare & rebook",
    body: "I'll show you how to keep your set looking good, and you can book your next visit before you leave.",
  },
];

function ServiceBlock({
  service,
  reverse,
  priority = false,
}: {
  service: (typeof SERVICES)[number];
  reverse: boolean;
  priority?: boolean;
}) {
  return (
    <div
      id={service.slug}
      className="grid scroll-mt-24 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
    >
      {/* Image — first in the DOM so it stacks on top on mobile; lg:order-*
          flips the side on alternating blocks. */}
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-sm",
          reverse ? "lg:order-2" : "lg:order-1",
        )}
      >
        <Image
          src={service.img}
          alt={service.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          loading={priority ? "eager" : undefined}
          fetchPriority={priority ? "high" : undefined}
        />
      </div>

      <div className={cn(reverse ? "lg:order-1" : "lg:order-2")}>
        <p className="eyebrow">{service.eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">
          {service.title}
        </h2>
        {service.body.map((para, i) => (
          <p
            key={i}
            className={cn(
              "leading-relaxed",
              i === 0
                ? "mt-5 text-lg text-foreground/80"
                : "mt-3 text-muted-foreground",
            )}
          >
            {para}
          </p>
        ))}

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-taupe">
          What&apos;s included
        </p>
        <ul className="mt-3 space-y-2.5">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-brass" />
              <span className="text-foreground/85">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* ── Page header ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Nails &amp; lashes, done properly
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Every set is done by Gulshan herself, start to finish, in a calm
            private studio in Camberley. Here&apos;s what you can book — take
            your time, then message when you&apos;re ready.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <BookCta className="h-12 px-7 text-base" />
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brass underline-offset-4 hover:underline"
            >
              See the full price list
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Service blocks (alternating) ─────────────────────────── */}
      <section
        aria-label="Service details"
        className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24"
      >
        <div className="space-y-20 sm:space-y-28">
          {SERVICES.map((service, i) => (
            <ServiceBlock
              key={service.slug}
              service={service}
              reverse={i % 2 === 1}
              priority={i === 0}
            />
          ))}
        </div>
      </section>

      {/* ── How it works / what to expect ────────────────────────── */}
      <section aria-labelledby="process-heading" className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-xl">
            <p className="eyebrow">How it works</p>
            <h2
              id="process-heading"
              className="mt-4 text-balance font-display text-3xl leading-tight sm:text-4xl"
            >
              Easy to book, calm to visit
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              No apps and no queues — just a quick message and a time that suits
              you. Here&apos;s how a visit to the studio works.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent text-brass">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-display text-3xl leading-none text-brass/35">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-sm text-muted-foreground">
            Not sure what to book?{" "}
            <Link
              href="/contact"
              className="font-semibold text-brass underline-offset-4 hover:underline"
            >
              Send a message
            </Link>{" "}
            and I&apos;ll help you choose.
          </p>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────── */}
      <ClosingCta />
    </>
  );
}
