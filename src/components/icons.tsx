import type { SVGProps } from "react";

/**
 * Brand/social glyphs as inline SVG.
 * lucide-react dropped brand icons, so Facebook/Instagram are hand-rolled to
 * avoid a dependency on icon names that may not exist across lucide versions.
 */

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 9h3l.5-3H14V4.46c0-.86.28-1.46 1.52-1.46H17V.3A20.7 20.7 0 0 0 14.6.18C12.06.18 10.4 1.7 10.4 4.5V6H8v3h2.4v9H14V9Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
