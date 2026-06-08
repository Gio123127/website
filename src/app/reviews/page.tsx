import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import { Button } from "@/components/ui/button";
import { ClosingCta } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: "Reviews",
  description: `What clients say about Bliss Nails & Lashes Studio — rated ${siteConfig.reviews.rating}★ across around ${siteConfig.reviews.count} Google reviews in Camberley, Hastings.`,
};

function StarRating({ rating }: { rating: number }) {
  const filled = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`${filled} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            "size-4",
            i < filled ? "fill-brass text-brass" : "fill-transparent text-brass/30",
          )}
        />
      ))}
    </span>
  );
}

export default function ReviewsPage() {
  const { rating, count, source, url } = siteConfig.reviews;

  return (
    <>
      {/* ── Header + aggregate ───────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-20 sm:pb-12">
        <div className="max-w-2xl">
          <p className="eyebrow">Reviews</p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Don&apos;t just take our word for it
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Bliss is rated {rating}★ across around {count} {source} reviews —
            here&apos;s a taste of what clients say about their nails, lashes, and
            the calm, one-on-one studio.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-sm">
            <StarRating rating={5} />
            <span className="font-display text-lg text-foreground">
              {rating}
              <span className="font-sans text-sm font-medium text-muted-foreground">
                {" "}
                · {count} {source} reviews
              </span>
            </span>
          </div>
          <Button asChild className="h-11 rounded-full px-6 font-semibold shadow-sm">
            <Link href={url} target="_blank" rel="noopener noreferrer">
              Read all {count} reviews on Google
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ── Review cards ─────────────────────────────────────────── */}
      <section
        aria-label="Client reviews"
        className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24"
      >
        {reviews.length > 0 ? (
          <>
            {/* TODO (client input): these are EXAMPLE reviews from src/lib/reviews.ts —
                replace with the real exported Google reviews, then remove this note. */}
            <p className="mb-6 text-sm text-muted-foreground">
              Sample reviews shown — read the full set on Google.
            </p>

            {/* A third-party Google-reviews widget could be dropped in here
                instead of the grid below; it would replace this block only. */}
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <li
                  key={`${review.author}-${i}`}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <Quote className="size-6 text-brass" aria-hidden />
                  <div className="mt-3">
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="mt-3 flex-1 leading-relaxed text-foreground/85">
                    {review.text}
                  </p>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="font-semibold text-foreground">
                      {review.author}
                    </p>
                    <div className="mt-0.5 flex items-center justify-between gap-3">
                      <p className="text-sm text-muted-foreground">
                        {review.date}
                      </p>
                      {review.sourceUrl ? (
                        <Link
                          href={review.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-brass underline-offset-4 hover:underline"
                        >
                          View on Google
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          // Graceful empty state (e.g. before any reviews are added).
          <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
            <p className="text-muted-foreground">
              Reviews are on their way.
            </p>
            <Button asChild className="mt-5 h-11 rounded-full px-6 font-semibold">
              <Link href={url} target="_blank" rel="noopener noreferrer">
                Read them on Google
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        )}
      </section>

      <ClosingCta
        title="Want in on it?"
        description={
          <>
            Join the {count}+ happy clients — message to book your nails or lashes
            and I&apos;ll confirm a time that suits.
          </>
        }
      />
    </>
  );
}
