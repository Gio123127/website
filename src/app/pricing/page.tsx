import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BookCta } from "@/components/book-cta";
import { ClosingCta } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Honest, upfront prices for nails at Bliss Nails & Lashes Studio, Camberley, Hastings — shown openly on the page. Lashes and nail art priced on consultation.",
};

/* Prices transcribed from the studio's own "Manicure Services" menu.
   The raw price-list image also shows the home address, so it is NOT used here
   (brief: keep the home address private); its prices live in this table instead.
   TODO (client input): confirm prices are current + add lash / pedicure prices. */
const MANICURE = [
  { name: "Gel polish", price: "$40" },
  { name: "Natural nail", price: "$55" },
  { name: "Extensions", price: "$65" },
  { name: "French tips", price: "$80" },
  { name: "Ombré", price: "$80" },
  { name: "Gel X", price: "$70" },
  { name: "Infills", price: "$55" },
];

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-20 sm:pb-12">
        <div className="max-w-2xl">
          <p className="eyebrow">Pricing</p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Honest prices, shown openly
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            No PDFs to download and no booking funnel to dig through — here&apos;s
            what a set costs. Message any time to check availability or ask about
            a look you&apos;ve seen.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <BookCta className="h-12 px-7 text-base" />
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brass underline-offset-4 hover:underline"
            >
              See the gallery
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="price-heading"
        className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
          {/* Price list */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 id="price-heading" className="font-display text-2xl sm:text-3xl">
                Manicure services
              </h2>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-taupe">
                NZD
              </span>
            </div>

            <dl className="mt-6 divide-y divide-border">
              {MANICURE.map(({ name, price }) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <dt className="text-foreground/90">{name}</dt>
                  <dd className="font-display text-xl text-foreground">
                    {price}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 rounded-xl bg-accent/60 px-4 py-3 text-sm text-foreground/80">
              Any art is extra. Prices include SNS, hard gel or acrylic.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Lash extensions and detailed nail art are priced on consultation —
              send a message with the look you&apos;re after and I&apos;ll give
              you a quick quote.
            </p>
          </div>

          {/* Visual */}
          <div className="lg:pt-2">
            <div className="relative mx-auto aspect-[5/6] w-full max-w-sm overflow-hidden rounded-3xl border border-border shadow-sm">
              <Image
                src="/photos/pricing.jpg"
                alt="A glossy neutral and gold-glitter gel set by Bliss"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Gel, acrylic, BIAB &amp; more — done properly, priced fairly.
            </p>
          </div>
        </div>
      </section>

      <ClosingCta
        title="Book your set"
        description={
          <>
            Message with the set you&apos;d like and a time that suits —
            I&apos;ll confirm and send the studio address. Easy as.
          </>
        }
      />
    </>
  );
}
