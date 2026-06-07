import { BookCta, CallButton } from "@/components/book-cta";

/**
 * Temporary placeholder for routes that don't have content yet. Exists so every
 * route in the brief renders inside the shell and shows the type + colour system.
 */
export function PagePlaceholder({
  eyebrow = "Bliss Nails & Lashes",
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto flex min-h-[62svh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center sm:py-28">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-balance font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <BookCta className="h-11 px-6 text-base" />
        <CallButton className="h-11 px-6 text-base" />
      </div>
      <p className="mt-12 text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
        Page in progress · full content coming soon
      </p>
    </section>
  );
}
