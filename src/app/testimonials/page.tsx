import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <PagePlaceholder
      eyebrow="In their words"
      title="Testimonials"
      description="4.9★ across roughly 90 Google reviews. Favourite words from real clients are being gathered here."
    />
  );
}
