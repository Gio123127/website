import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

/**
 * The single, repeated primary CTA — booking. Used in the header, the mobile
 * sheet, the sticky mobile bar, the footer, and placeholder pages so the action
 * looks identical everywhere (brief: "one repeated CTA … never competing buttons").
 */
export function BookCta({
  className,
  showIcon = true,
}: {
  className?: string;
  showIcon?: boolean;
}) {
  return (
    <Button
      asChild
      className={cn(
        "rounded-full px-5 font-semibold shadow-sm",
        className,
      )}
    >
      <Link href={siteConfig.cta.href}>
        {siteConfig.cta.label}
        {showIcon ? <ArrowUpRight className="size-4" /> : null}
      </Link>
    </Button>
  );
}

/** Click-to-call companion to the booking CTA. */
export function CallButton({
  className,
  label = "Call",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn("rounded-full font-medium", className)}
    >
      <Link href={siteConfig.contact.phone.href}>
        <Phone className="size-4" />
        {label}
      </Link>
    </Button>
  );
}
