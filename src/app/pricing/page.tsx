import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <PagePlaceholder
      eyebrow="Honest & upfront"
      title="Pricing"
      description="Clear pricing, shown openly on the page — no PDFs, no booking funnels to dig through. The full price list is coming soon."
    />
  );
}
