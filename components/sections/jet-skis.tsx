import Image from "next/image";
import { Gauge, Users, Bluetooth, ShieldAlert } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";

const seaDoo = {
  name: "Sea Doo GTI",
  note: "3 to 5 available, 4 stroke, 2 seater",
  speed: "50 mph",
  tiers: [
    { label: "1/2 hour", price: "$75" },
    { label: "1 hour", price: "$125" },
    { label: "2 hours", price: "$235", note: "Mackinac Bridge minimum" },
    { label: "3 hours", price: "$335" },
    { label: "4 hours", price: "$400" },
  ],
};

const yamaha = {
  name: "Yamaha VX Waverunner",
  note: "1 available, 2 seater, fast, reverse, Bluetooth, includes gas and life jackets",
  speed: "60 mph",
  tiers: [
    { label: "1 hour", price: "$150" },
    { label: "2 hours", price: "$290" },
    { label: "3 hours", price: "$420" },
  ],
};

function JetSkiCard({ model }: { model: typeof seaDoo }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold">{model.name}</h3>
        <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Gauge className="size-3.5" /> {model.speed}
        </span>
      </div>
      <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
        <Users className="mt-0.5 size-4 shrink-0" /> {model.note}
      </p>
      <div className="mt-6 divide-y divide-border">
        {model.tiers.map((t) => (
          <div key={t.label} className="flex items-center justify-between py-3">
            <span className="text-sm text-foreground/85">
              {t.label}
              {t.note && <span className="block text-xs text-muted-foreground">{t.note}</span>}
            </span>
            <span className="font-display text-xl font-bold text-primary">{t.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function JetSkis() {
  return (
    <section id="jet-skis" className="border-y border-border/60 bg-secondary/40 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Experience the Straits
            </span>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Jet Ski Rentals
            </h2>
            <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card">
              <Image
                src="/ingested/mackinacstraitsrentalco/jetski-rider.webp"
                alt="A rider in a life jacket crossing the wake on a Sea-Doo jet ski"
                width={1000}
                height={563}
                quality={80}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="aspect-video w-full object-cover"
              />
            </div>
            <div className="mt-6 flex items-start gap-2.5 rounded-2xl bg-gold-muted p-4 text-sm text-foreground/80">
              <ShieldAlert className="mt-0.5 size-4 shrink-0 text-foreground/70" />
              <span>
                Valid driver&apos;s license and boater safety certificate may be
                required. We hold your credit card until return.
              </span>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08}>
              <JetSkiCard model={seaDoo} />
            </Reveal>
            <Reveal delay={0.14}>
              <JetSkiCard model={yamaha} />
              <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Bluetooth className="size-3.5" /> Bluetooth speaker onboard
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
