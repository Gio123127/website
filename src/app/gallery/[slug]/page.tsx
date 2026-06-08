import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { gallery, getGalleryItem, relatedItems } from "@/lib/gallery";
import { BookCta } from "@/components/book-cta";
import { GalleryCard } from "@/components/gallery-card";
import { ClosingCta } from "@/components/closing-cta";

type Params = { params: Promise<{ slug: string }> };

// Pre-render every gallery item as a static page at build time.
export function generateStaticParams() {
  return gallery.map((item) => ({ slug: item.slug }));
}

// Per-item metadata (falls back gracefully for unknown slugs).
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = getGalleryItem(slug);
  if (!item) return { title: "Look not found" };
  return {
    title: item.title,
    description: `${item.title} — ${item.category.toLowerCase()} by Bliss Nails & Lashes Studio, a private home studio in Camberley, Hastings.`,
    openGraph: {
      title: `${item.title} · Bliss Nails & Lashes`,
      description: `${item.category} at Bliss Nails & Lashes Studio, Hastings.`,
    },
  };
}

// Short, honest intro reused per category (no fabricated per-photo detail).
const INTRO: Record<string, string> = {
  Nails:
    "Hand-finished nail work from the Bliss studio in Camberley. Like this set? Bring it along as inspiration, or tell me your colours and I'll tailor it to you.",
  "Nail art":
    "Custom nail art from the Bliss studio. Use this as a starting point and we'll make it your own — as subtle or as bold as you like.",
  Lashes:
    "Lash extensions from the Bliss studio, mapped to suit your eyes. Tell me the look you're after and we'll tailor it to you.",
};

export default async function GalleryItemPage({ params }: Params) {
  const { slug } = await params;
  const item = getGalleryItem(slug);
  if (!item) notFound();

  const related = relatedItems(item, 4);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16 sm:pt-14 sm:pb-20">
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brass underline-offset-4 hover:underline"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          Back to gallery
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-sm lg:max-w-none">
            <Image
              src={item.src}
              alt={item.title}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="lg:pt-4">
            <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
              {item.category}
            </span>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
              {item.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {INTRO[item.category]}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <BookCta className="h-12 px-7 text-base" />
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brass underline-offset-4 hover:underline"
              >
                Browse the gallery
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="bg-muted">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <h2
              id="related-heading"
              className="font-display text-2xl sm:text-3xl"
            >
              More {item.category.toLowerCase()}
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {related.map((r) => (
                <GalleryCard key={r.slug} item={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ClosingCta />
    </>
  );
}
