import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Book an appointment" };

export default function BookingPage() {
  return (
    <PagePlaceholder
      eyebrow="Let's book you in"
      title="Book an appointment"
      description="No online booking just yet — call or text to secure your spot. An online booking link may be added here later."
    />
  );
}
