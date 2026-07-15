"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#rentals", label: "Rentals" },
  { href: "/#tours", label: "Tours & Cruises" },
  { href: "/#jet-skis", label: "Jet Skis" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
  { href: "/shop", label: "Shop" },
];

const telHref = `tel:+1${brand.contact.phone}`;
const telLabel = "(517) 528-9545";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      )}
    >
      <nav className="container-px mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 py-2.5">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 cursor-pointer">
          <Image
            src="/ingested/mackinacstraitsrentalco/logo.webp"
            alt="Mackinac Straits Watersports & Rental Co. logo"
            width={48}
            height={48}
            quality={80}
            className="size-11 rounded-full object-cover ring-1 ring-border sm:size-12"
          />
          <span className="hidden font-display text-base font-bold leading-tight tracking-tight sm:block sm:text-lg">
            Mackinac Straits
            <span className="block text-xs font-medium text-muted-foreground sm:text-sm">
              Watersports & Rental Co.
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="hidden items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary sm:flex"
          >
            <Phone className="size-4 text-primary" />
            {telLabel}
          </a>
          <Button asChild size="sm" className="hidden bg-gold text-gold-foreground hover:bg-gold/90 sm:inline-flex">
            <a href={telHref}>Call to Book</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-gold text-gold-foreground hover:bg-gold/90">
              <a href={telHref} onClick={() => setOpen(false)}>
                <Phone className="size-4" /> Call to Book: {telLabel}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
