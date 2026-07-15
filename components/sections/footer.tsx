import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

const telHref = `tel:+1${brand.contact.phone}`;

const cols = [
  {
    title: "Explore",
    links: [
      { label: "Kayak Rentals", href: "/#rentals" },
      { label: "Tours & Cruises", href: "/#tours" },
      { label: "Jet Skis", href: "/#jet-skis" },
      { label: "Gallery", href: "/#gallery" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact us", href: "/#contact" },
      { label: "Shop", href: "/shop" },
      { label: "Find us", href: "/#location" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-secondary/40">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
            <Image
              src="/ingested/mackinacstraitsrentalco/logo.webp"
              alt="Mackinac Straits Watersports & Rental Co. logo"
              width={44}
              height={44}
              quality={80}
              className="size-11 rounded-full object-cover ring-1 ring-border"
            />
            <span className="font-display text-base font-bold leading-tight">
              Mackinac Straits Watersports & Rental Co.
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {brand.tagline}
          </p>
          <div className="mt-5 flex gap-2">
            <Link
              href={`https://www.facebook.com/${brand.social.facebook}/`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-9 cursor-pointer place-items-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <FacebookIcon className="size-4" />
            </Link>
            <Link
              href={`https://www.instagram.com/${brand.social.instagram}/`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-9 cursor-pointer place-items-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <InstagramIcon className="size-4" />
            </Link>
            <Link
              href={`mailto:${brand.social.email}`}
              aria-label="Email"
              className="grid size-9 cursor-pointer place-items-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Mail className="size-4" />
            </Link>
            <a
              href={telHref}
              aria-label="Call"
              className="grid size-9 cursor-pointer place-items-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Phone className="size-4" />
            </a>
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-3 md:mt-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-border/60 bg-card p-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-primary" />
              {brand.contact.address}
            </span>
            <a href={telHref} className="flex cursor-pointer items-center gap-2 hover:text-foreground">
              <Phone className="size-4 shrink-0 text-primary" />
              (517) 528-9545
            </a>
            <a
              href={`mailto:${brand.social.email}`}
              className="flex cursor-pointer items-center gap-2 hover:text-foreground"
            >
              <Mail className="size-4 shrink-0 text-primary" />
              {brand.social.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6">
        <p className="container-px mx-auto max-w-7xl text-sm text-muted-foreground">
          © 2026 Mackinac Straits Watersports & Rental Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
