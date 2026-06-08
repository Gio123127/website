import Image from "next/image";
import Link from "next/link";

import type { GalleryItem } from "@/lib/gallery";

/**
 * A single gallery tile: image, category badge, title — linking to the detail
 * page. Deliberately has no "use client" so it works in both the client filter
 * grid and the server-rendered detail/related sections.
 */
export function GalleryCard({
  item,
  priority = false,
}: {
  item: GalleryItem;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/gallery/${item.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading={priority ? "eager" : undefined}
          fetchPriority={priority ? "high" : undefined}
        />
        <span className="absolute left-2 top-2 rounded-full bg-oat/85 px-2.5 py-1 text-[0.7rem] font-semibold text-cacao backdrop-blur-sm">
          {item.category}
        </span>
      </div>
      <div className="p-3">
        <h3 className="font-display text-base leading-snug text-foreground">
          {item.title}
        </h3>
      </div>
    </Link>
  );
}
