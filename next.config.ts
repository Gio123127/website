import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Image optimization ON (this is the Next.js default; set explicitly per the
    // polish brief). `sharp` is installed, so `next build` and Vercel optimise
    // the JPGs in /public/photos. If a local environment is missing the sharp
    // binary, run `npm install sharp`.
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
