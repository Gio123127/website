import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="Say hello"
      title="Get in touch"
      description="Call or message to book, or find the studio area and hours. A full contact form and details are coming soon."
    />
  );
}
