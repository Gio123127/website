import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <PagePlaceholder
      eyebrow="Good to know"
      title="Questions & answers"
      description="Aftercare, booking, what to expect on the day, and finding the studio — the answers are on the way."
    />
  );
}
