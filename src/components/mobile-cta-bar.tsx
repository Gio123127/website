import { BookCta, CallButton } from "@/components/book-cta";

/**
 * Sticky bottom action bar on mobile/tablet — the brief calls a one-tap
 * Book/Call bar "non-negotiable" since almost all traffic arrives on a phone
 * from Instagram. Hidden on desktop (lg+), where the header CTA takes over.
 */
export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-oat/90 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-md items-center gap-2 px-4 py-2.5">
        <CallButton className="h-11 flex-1" />
        <BookCta className="h-11 flex-1" showIcon={false} />
      </div>
    </div>
  );
}
