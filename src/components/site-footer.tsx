import Link from "next/link";
import { Clock, MapPin, Phone, Star } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { BookCta } from "@/components/book-cta";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

const labelClass =
  "text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-oat/55";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cacao text-oat">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl leading-none text-oat">
                {siteConfig.wordmark.lead}
              </span>
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-brass">
                {siteConfig.wordmark.trail}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-oat/70">
              {siteConfig.tagline} One artist, start to finish — in a calm,
              private Hastings studio.
            </p>
            <Link
              href={siteConfig.reviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-oat/80 transition-colors hover:text-oat"
            >
              <Star className="size-4 fill-brass text-brass" />
              {siteConfig.reviews.rating}★ · {siteConfig.reviews.count}+{" "}
              {siteConfig.reviews.source} reviews
            </Link>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <p className={labelClass}>Explore</p>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.all.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-oat/75 transition-colors hover:text-oat"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit & book */}
          <div>
            <p className={labelClass}>Visit &amp; book</p>
            <ul className="mt-4 space-y-3 text-sm text-oat/75">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brass" />
                <span>
                  {siteConfig.location.suburb}
                  <span className="mt-0.5 block text-xs text-oat/50">
                    {siteConfig.location.privacyNote}
                  </span>
                </span>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-brass" />
                <span>
                  {siteConfig.hours.summary} · {siteConfig.hours.detail}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-brass" />
                <a
                  href={siteConfig.contact.phone.href}
                  className="transition-colors hover:text-oat"
                >
                  {siteConfig.contact.phone.display}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-oat/45">
              Areas served: {siteConfig.areasServed.join(" · ")}
            </p>
          </div>

          {/* Connect */}
          <div>
            <p className={labelClass}>Connect</p>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bliss Nails & Lashes on Facebook"
                className="grid size-10 place-items-center rounded-full border border-oat/15 text-oat/80 transition-colors hover:border-brass hover:text-brass"
              >
                <FacebookIcon className="size-4" />
              </a>
              {siteConfig.social.instagram ? (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bliss Nails & Lashes on Instagram"
                  className="grid size-10 place-items-center rounded-full border border-oat/15 text-oat/80 transition-colors hover:border-brass hover:text-brass"
                >
                  <InstagramIcon className="size-5" />
                </a>
              ) : null}
            </div>
            {siteConfig.social.instagram ? null : (
              <p className="mt-3 text-xs text-oat/45">
                Instagram link coming soon.
              </p>
            )}
            <div className="mt-6">
              <BookCta className="h-10 w-full" />
            </div>
          </div>
        </div>

        <div className="rule-brass mt-12" />
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-oat/45 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. {siteConfig.location.suburb}.
          </p>
          <p>Gel · Acrylic · BIAB · Lash extensions</p>
        </div>
      </div>
    </footer>
  );
}
