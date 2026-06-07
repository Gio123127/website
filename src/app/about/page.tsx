import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="Meet the artist"
      title="About Bliss"
      description="Meet Gulshan — one artist, start to finish, in a calm and private home studio in Camberley, Hastings. Her full story is on the way."
    />
  );
}
