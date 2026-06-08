import type { Metadata } from "next";

import { GalleryExplorer } from "@/components/gallery-explorer";
import { ClosingCta } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Real nail and lash work from Bliss Nails & Lashes Studio in Camberley, Hastings. Filter by nails, nail art and lashes, then book your own.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 sm:pt-20 sm:pb-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Real work, straight from the studio
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Every photo here is Gulshan&apos;s own work. Filter by what
            you&apos;re after, tap any set for a closer look, then book yours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24">
        <GalleryExplorer />
      </section>

      <ClosingCta />
    </>
  );
}
