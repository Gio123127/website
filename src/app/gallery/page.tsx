import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <PagePlaceholder
      eyebrow="Real work"
      title="Gallery"
      description="Close-ups of finished sets straight from the studio. The gallery is being curated now — real photos, no stock."
    />
  );
}
