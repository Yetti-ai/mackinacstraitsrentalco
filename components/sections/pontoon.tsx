import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const packages = [
  { name: "Fireworks / Sunset", price: "$250", note: "4 people" },
  { name: "Sunset Nights", price: "$175", note: "4 people, 2 hrs, 8pm to 10pm" },
  { name: "Sunrise", price: "TBD", note: "Appointment only, around 5am" },
  { name: "Daytime", price: "$100/hr", note: "11am to 5pm daily, 4 passengers, +$25 each added" },
];

const addOns = [
  "Kayaks",
  "Jet skis",
  "Lunch",
  "Delivery",
  "Ice and coolers",
  "Daytime activities for a family beach day",
  "Mixology class (BYOB)",
  "Painting class (BYOB)",
];

export function Pontoon() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:items-center">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/10 order-last lg:order-first">
          <Image
            src="/ingested/mackinacstraitsrentalco/pontiki-dock-sunset.webp"
            alt="The custom Pon Tiki pontoon boat docked at sunset with tiki torches along the shore"
            width={900}
            height={1200}
            quality={78}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="aspect-[3/4] w-full object-cover"
          />
        </Reveal>

        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Custom built
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Pon Tiki Pontoon Cruises
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
              A custom-made tiki pontoon for the family. Multiple packages available.
            </p>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-2 gap-3">
            {packages.map((p) => (
              <RevealItem
                key={p.name}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <p className="text-sm font-medium text-foreground/85">{p.name}</p>
                <p className="mt-1 font-display text-2xl font-bold text-primary">{p.price}</p>
                <p className="mt-1 text-xs text-muted-foreground">{p.note}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="mt-6 rounded-2xl bg-gold-muted p-5">
            <p className="text-sm font-semibold text-foreground/90">Add ons</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {addOns.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border/60 bg-card px-3 py-1 text-xs text-foreground/80"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
