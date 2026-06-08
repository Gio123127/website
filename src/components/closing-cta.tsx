import type { ReactNode } from "react";
import { Clock, MapPin } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { BookCta, CallButton } from "@/components/book-cta";

/**
 * The repeated closing booking band — a cacao card with the one CTA (Book) +
 * its click-to-call companion, plus the privacy-safe location/hours line.
 * Shared across pages so the closing action looks identical everywhere
 * (brief: "one repeated CTA the whole way down").
 */
export function ClosingCta({
  eyebrow = "Booking",
  title = "Ready when you are.",
  description,
}: {
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[var(--radius-3xl)] bg-cacao px-6 py-16 text-center text-oat sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-rose-clay/20 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-12 size-64 rounded-full bg-sage/15 blur-2xl"
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-brass-tint)]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl text-oat sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-oat/80">
            {description ?? (
              <>
                Tell me what you&apos;d like and your preferred time —
                I&apos;ll confirm your spot and send the studio address.{" "}
                {siteConfig.bookingNote.split(".")[0]}.
              </>
            )}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <BookCta className="h-12 px-7 text-base" />
            {/* Explicit oat/cacao colours: the outline variant inherits the card's
                text-oat, which would make the number invisible on this dark card. */}
            <CallButton
              className="h-12 border-transparent bg-oat px-6 text-base text-cacao shadow-sm hover:bg-oat/90 hover:text-cacao"
              label={`Call ${siteConfig.contact.phone.display}`}
            />
          </div>
          <p className="mt-7 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm text-oat/60">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-brass" />
              {siteConfig.location.suburb}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4 text-brass" />
              {siteConfig.hours.summary} · {siteConfig.hours.detail}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
