import Image from "next/image";
import { Sparkles, Clock, CalendarClock } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { BorderBeam } from "@/components/magic/border-beam";

export function Tours() {
  return (
    <section id="tours" className="border-y border-border/60 bg-secondary/40 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Signature experiences
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Fireworks & Mackinac Bridge Tours
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr] lg:gap-8">
          <Reveal delay={0.1} className="rounded-3xl border border-border bg-card p-7 sm:p-8">
            <span className="grid size-11 place-items-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">
              Fireworks and Sunset Tour
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Saturdays, last weekend of June through Labor Day.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-foreground/85">
              <Clock className="size-4 text-primary" /> 8:30pm to 10:30pm
            </div>
            <p className="mt-6 font-display text-3xl font-bold text-primary">
              $50 <span className="text-base font-medium text-muted-foreground">per person</span>
            </p>
          </Reveal>

          <Reveal delay={0.15} className="rounded-3xl border border-border bg-card p-7 sm:p-8">
            <span className="grid size-11 place-items-center rounded-full bg-primary/10 text-primary">
              <CalendarClock className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">
              Mackinac Bridge Viewing Tour
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              8am and 10am tours. Ask about later times.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-foreground/85">
              <Clock className="size-4 text-primary" /> Must be booked a day in advance,
              or before 9am
            </div>
            <p className="mt-6 font-display text-3xl font-bold text-primary">
              $65 <span className="text-base font-medium text-muted-foreground">per kayak</span>
            </p>
          </Reveal>

          <Reveal delay={0.2} className="relative min-h-[16rem] overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/10 lg:min-h-[20rem]">
            <BorderBeam />
            <Image
              src="/ingested/mackinacstraitsrentalco/bridge-tour-kayakers.webp"
              alt="Two kayakers paddling toward the Mackinac Bridge at sunrise on a Mackinac Bridge viewing tour"
              fill
              quality={78}
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
