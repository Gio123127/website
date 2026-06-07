"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { BookCta, CallButton } from "@/components/book-cta";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FacebookIcon } from "@/components/icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Translucent over a hero at the top; solidifies on scroll for legibility.
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-border bg-oat/85 shadow-sm"
          : "border-transparent bg-oat/60",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label={`${siteConfig.name} — home`}
          className="flex shrink-0 items-baseline gap-2"
        >
          <span className="font-display text-2xl leading-none tracking-tight text-foreground">
            {siteConfig.wordmark.lead}
          </span>
          <span className="hidden text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-brass sm:inline">
            {siteConfig.wordmark.trail}
          </span>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {siteConfig.nav.primary.map((item) => {
              const active = pathname === item.href;
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    active={active}
                    className={cn(
                      "relative bg-transparent px-2 py-1 text-sm font-medium text-foreground/75 transition-colors hover:bg-transparent hover:text-foreground focus:bg-transparent data-active:bg-transparent data-active:text-foreground",
                      "after:absolute after:inset-x-2 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brass after:transition-transform after:duration-300 hover:after:scale-x-100 data-active:after:scale-x-100",
                    )}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.reviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground xl:inline-flex"
          >
            <Star className="size-3.5 fill-brass text-brass" />
            <span>
              {siteConfig.reviews.rating}★ · {siteConfig.reviews.count}+ Google
              reviews
            </span>
          </Link>

          <BookCta className="hidden h-9 lg:inline-flex" />

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Open menu"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="gap-0 p-0">
              <SheetHeader className="border-b border-border p-5">
                <SheetTitle className="flex items-baseline gap-2 font-display text-xl">
                  {siteConfig.wordmark.lead}
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-brass">
                    {siteConfig.wordmark.trail}
                  </span>
                </SheetTitle>
                <SheetDescription>
                  {siteConfig.location.privacyNote}
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col px-3 py-4">
                {siteConfig.nav.all.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "rounded-lg px-3 py-2.5 text-[0.95rem] font-medium transition-colors",
                          active
                            ? "bg-accent text-foreground"
                            : "text-foreground/75 hover:bg-muted hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>

              <div className="mt-auto space-y-3 border-t border-border p-5">
                <BookCta className="h-11 w-full" />
                <CallButton
                  className="h-11 w-full"
                  label={`Call ${siteConfig.contact.phone.display}`}
                />
                <div className="flex items-center justify-center gap-3 pt-1">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bliss Nails & Lashes on Facebook"
                    className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brass hover:text-brass"
                  >
                    <FacebookIcon className="size-4" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
