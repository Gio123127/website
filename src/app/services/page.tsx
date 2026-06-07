import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <PagePlaceholder
      eyebrow="What we offer"
      title="Services"
      description="Gel, acrylic and BIAB manicures, nail art and French sets, plus classic, hybrid and Russian-volume lash extensions. Full service details are coming soon."
    />
  );
}
