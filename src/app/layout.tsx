import type { Metadata, Viewport } from "next";
import { Fraunces, Mulish } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";

// Fraunces — soft serif for display/headings; italic enabled for warm subheads.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  style: ["normal", "italic"],
});

// Mulish — clean humanist sans for body copy.
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.location.suburb}`,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "nails Hastings",
    "lash extensions Hastings",
    "BIAB Hawke's Bay",
    "gel nails Hastings",
    "acrylic nails Hawke's Bay",
    "home nail studio Hastings",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "en_NZ",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6eee5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NZ"
      data-scroll-behavior="smooth"
      className={`${mulish.variable} ${fraunces.variable}`}
    >
      <body className="flex min-h-svh flex-col pb-20 lg:pb-0">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileCtaBar />
      </body>
    </html>
  );
}
