import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

export function BookingNote() {
  return (
    <section className="container-px mx-auto max-w-7xl py-4 sm:py-6">
      <Reveal className="flex flex-col items-center gap-5 rounded-3xl bg-primary px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="max-w-xl text-pretty text-lg font-medium text-primary-foreground">
          To make a rental, simply pick up the phone and call us. We&apos;re a mobile
          operation and may not be on site at all times.
        </p>
        <Button asChild size="lg" className="shrink-0 bg-gold text-gold-foreground hover:bg-gold/90">
          <a href="tel:+15175289545">
            <Phone className="size-4" /> (517) 528-9545
          </a>
        </Button>
      </Reveal>
    </section>
  );
}
