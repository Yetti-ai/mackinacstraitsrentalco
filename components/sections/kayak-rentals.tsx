import { Check, Truck, Sunrise, Sunset, Users } from "lucide-react";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const pricing = [
  { label: "1 hour", price: "$25" },
  { label: "2 hours", price: "$35" },
  { label: "3 hours", price: "$45" },
  { label: "Full day", price: "$75" },
];

const offerings = [
  { icon: Users, text: "Hourly rentals" },
  { icon: Sunrise, text: "Mackinac Bridge tours" },
  { icon: Sunrise, text: "Sunrise with coffee" },
  { icon: Sunset, text: "Sunset / fireworks show" },
  { icon: Check, text: "Group discounts" },
  { icon: Truck, text: "Delivery / pickup (minimum required)" },
];

export function KayakRentals() {
  return (
    <section id="rentals" className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              On the water
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Kayak Rentals
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-pretty text-muted-foreground">
              Discounts for multiple days or multiple kayaks. A delivery fee may be
              required. Two kayak minimum may apply during peak season.
            </p>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            {offerings.map((o) => (
              <RevealItem
                key={o.text}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4"
              >
                <o.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground/85">{o.text}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="mt-8 grid gap-4 sm:grid-cols-2">
            <ImageCard
              src="/ingested/mackinacstraitsrentalco/kayak-fleet.webp"
              alt="A row of colorful rental kayaks with paddles lined up on the grass beside the Mackinac Straits Kayaking truck"
              title="Our fleet"
              description="Single and tandem kayaks, ready to launch."
            />
            <ImageCard
              src="/ingested/mackinacstraitsrentalco/kayak-paddleboard-people.webp"
              alt="Renters paddling kayaks and a stand-up paddleboard on the Straits of Mackinac"
              title="On the Straits"
              description="Calm-water paddling minutes from downtown St. Ignace."
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8">
            <h3 className="font-display text-xl font-semibold">Hourly & daily rates</h3>
            <div className="mt-6 divide-y divide-border">
              {pricing.map((p) => (
                <div key={p.label} className="flex items-center justify-between py-3.5">
                  <span className="text-foreground/85">{p.label}</span>
                  <span className="font-display text-2xl font-bold text-primary">
                    {p.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-gold-muted p-4 text-sm text-foreground/80">
              Ask about <span className="font-semibold">picnic packages</span> and
              group discounts for multiple kayaks or multiple days.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
