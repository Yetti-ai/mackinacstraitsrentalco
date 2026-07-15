import type { Metadata } from "next";
import { PackageSearch, Phone } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop | Mackinac Straits Watersports & Rental Co.",
};

export default function Shop() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-32">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Shop
              </span>
              <h1 className="mt-4 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Shop
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mx-auto mt-10 max-w-md rounded-3xl border border-border bg-card p-10 shadow-sm">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-muted text-muted-foreground">
                  <PackageSearch className="size-6" />
                </span>
                <p className="mt-5 text-pretty text-muted-foreground">
                  We don&apos;t have any products to show here right now.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  All rentals and tours are booked directly over the phone.
                </p>
                <Button asChild size="lg" className="mt-7 bg-gold text-gold-foreground hover:bg-gold/90">
                  <a href="tel:+15175289545">
                    <Phone className="size-4" /> Call to book: (517) 528-9545
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
