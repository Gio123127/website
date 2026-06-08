import type { Metadata } from "next";
import { Clock, MapPin, MessageSquareText, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bliss Nails & Lashes Studio in Camberley, Hastings — call or text to book, or message on Facebook or Instagram. No email: bookings are by phone or DM.",
};

export default function ContactPage() {
  const { phone } = siteConfig.contact;

  return (
    <>
      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-20 sm:pb-12">
        <div className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Let&apos;s get you booked in
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Booking is quick and personal — call or text, or send a message on
            Facebook or Instagram. Here&apos;s everything you need to reach the
            studio.
          </p>
        </div>
      </section>

      {/* ── Ways to reach the studio ─────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — contact actions */}
          <div className="space-y-6">
            {/* Call / Text */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
              <p className="eyebrow">Call or text</p>
              <p className="mt-3 font-display text-3xl text-foreground">
                {phone.display}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                The fastest way to book — call or send a quick text.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 flex-1 rounded-full text-base font-semibold"
                >
                  <a href={phone.href}>
                    <Phone className="size-4" /> Call
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 flex-1 rounded-full text-base font-semibold text-foreground"
                >
                  <a href={phone.sms}>
                    <MessageSquareText className="size-4" /> Text
                  </a>
                </Button>
              </div>
            </div>

            {/* Social DMs */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
              <p className="eyebrow">Or message on social</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Prefer to DM? Send your enquiry on Facebook or Instagram.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="outline"
                  className="h-12 flex-1 rounded-full text-base font-semibold text-foreground"
                >
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon className="size-4" /> Facebook
                  </a>
                </Button>
                {siteConfig.social.instagram ? (
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 flex-1 rounded-full text-base font-semibold text-foreground"
                  >
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon className="size-4" /> Instagram
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>

            {/* How booking works — no email */}
            <div className="rounded-2xl border border-brass/30 bg-accent/40 p-6 sm:p-7">
              <p className="eyebrow">How booking works</p>
              <p className="mt-3 leading-relaxed text-foreground/85">
                Bliss is a one-woman home studio, so booking is personal and
                quick: call or text, or send a Facebook/Instagram message with
                what you&apos;d like and a couple of times that suit. I&apos;ll
                confirm your spot and send the studio address.
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                There&apos;s no email — phone or a social DM is the way to reach
                me.
              </p>
            </div>
          </div>

          {/* Right — hours, areas, map */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-brass" />
                  <span>
                    <span className="font-medium text-foreground">
                      {siteConfig.hours.summary}
                    </span>
                    <span className="mt-0.5 block text-muted-foreground">
                      {siteConfig.hours.detail}
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brass" />
                  <span>
                    <span className="font-medium text-foreground">
                      Areas served
                    </span>
                    <span className="mt-0.5 block text-muted-foreground">
                      {siteConfig.areasServed.join(" · ")}
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Styled map placeholder (no real address — privacy) */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-[var(--brand-sand)]">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, color-mix(in oklch, var(--brand-brass) 14%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, var(--brand-brass) 14%, transparent) 1px, transparent 1px)",
                  backgroundSize: "38px 38px",
                }}
              />
              <div
                aria-hidden
                className="absolute top-1/2 -left-4 h-2.5 w-[112%] -translate-y-1/2 -rotate-[7deg] bg-[color-mix(in_oklch,var(--brand-brass)_26%,transparent)]"
              />
              <div
                aria-hidden
                className="absolute -top-[10%] left-1/3 h-[120%] w-2.5 rotate-[10deg] bg-[color-mix(in_oklch,var(--brand-brass)_20%,transparent)]"
              />
              <div
                aria-hidden
                className="absolute top-6 right-5 size-14 rounded-md bg-sage/35"
              />
              <div
                aria-hidden
                className="absolute bottom-6 left-6 size-10 rounded-md bg-rose-clay/20"
              />
              <div className="absolute inset-0 grid place-items-center p-5 text-center">
                <div>
                  <span className="mx-auto grid size-11 place-items-center rounded-full bg-rose-clay text-oat shadow-md">
                    <MapPin className="size-5" />
                  </span>
                  <p className="mt-2.5 font-display text-lg text-foreground">
                    {siteConfig.location.suburb}
                  </p>
                  <p className="mx-auto mt-1 max-w-[15rem] text-xs leading-relaxed text-muted-foreground">
                    A private home studio — I&apos;ll share the exact address
                    once your appointment&apos;s confirmed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
