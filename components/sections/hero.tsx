import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BorderBeam } from "@/components/magic/border-beam";
import { Reveal } from "@/components/magic/reveal";

const services = [
  "Jet Ski Rentals",
  "Kayak Rentals",
  "Bicycle Rentals",
  "Electric Bike",
  "Pon Tiki Pontoon",
  "Tours",
  "Experiences",
];

const telHref = "tel:+15175289545";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground />
      <GridPattern />

      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 pt-14 pb-20 sm:pt-20 sm:pb-28 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin className="size-3.5 text-primary" />
              St. Ignace, Michigan
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Mackinac Straits Watersports & Rental Co.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 text-balance text-2xl font-semibold text-primary sm:text-3xl">
              Rentals. Tours. Cruises.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-4 max-w-lg text-pretty text-lg text-muted-foreground">
              Jet skis, kayaks, bicycles and our custom Pon Tiki pontoon, right on the
              water in St. Ignace. Ask about our Mackinac Bridge tours and sunset
              fireworks cruises.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
                <a href={telHref}>
                  <Phone className="size-4" /> Call to Book: (517) 528-9545
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#rentals">
                  See rentals <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              We&apos;re a mobile operation, we book by phone. Reservations confirmed
              day-of, calls start at 8am.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
            <BorderBeam />
            <Image
              src="/ingested/mackinacstraitsrentalco/sunset-group-paddle.webp"
              alt="Kayakers and canoeists paddling together at sunset on the Straits of Mackinac"
              width={1000}
              height={563}
              priority
              quality={78}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg shadow-primary/10 sm:block">
            <p className="font-display text-2xl font-bold text-primary">Family run</p>
            <p className="text-sm text-muted-foreground">Mobile rentals on the Straits</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
