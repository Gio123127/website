"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  gallery,
  galleryCategories,
  categoryCount,
  type GalleryCategory,
} from "@/lib/gallery";
import { GalleryCard } from "@/components/gallery-card";

type Filter = "All" | GalleryCategory;
const FILTERS: Filter[] = ["All", ...galleryCategories];

/**
 * Client-side filterable gallery: a filter bar with active state + a responsive
 * card grid that re-renders as the active category changes. Data is static, so
 * filtering happens entirely in the browser (no refetch, no navigation).
 */
export function GalleryExplorer() {
  const [active, setActive] = React.useState<Filter>("All");

  const items =
    active === "All"
      ? gallery
      : gallery.filter((item) => item.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter the gallery by category"
        className="flex flex-wrap gap-2"
      >
        {FILTERS.map((filter) => {
          const count =
            filter === "All" ? gallery.length : categoryCount(filter);
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-transparent bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-foreground/80 hover:border-brass hover:text-foreground",
              )}
            >
              {filter}
              <span
                className={cn(
                  "text-xs",
                  isActive ? "text-primary-foreground/70" : "text-muted-foreground",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
        Showing {items.length} {items.length === 1 ? "look" : "looks"}
        {active !== "All" ? ` in ${active}` : ""}.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item, i) => (
          <GalleryCard key={item.slug} item={item} priority={i < 4} />
        ))}
      </div>
    </div>
  );
}
