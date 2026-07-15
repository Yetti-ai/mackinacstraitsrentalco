import { Phone, Mail, Clock, Info } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const telHref = "tel:+15175289545";

const methods = [
  {
    icon: Phone,
    label: "Call (easiest)",
    value: "(517) 528-9545",
    href: telHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: brand.social.email,
    href: `mailto:${brand.social.email}`,
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "mackinacstraitskayaking",
    href: `https://www.facebook.com/${brand.social.facebook}/`,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "mackinac_straits_watersports",
    href: `https://www.instagram.com/${brand.social.instagram}/`,
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Get in touch
              </span>
              <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Contact Us
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Need to contact us about something? Reach out, we&apos;d be happy to
                hear from you! You can reach us by email, Facebook or Instagram, but
                it&apos;s easiest to just call {"(517) 528-9545"} (Mike).
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-6 flex items-start gap-2.5 rounded-2xl bg-gold-muted p-4 text-sm text-foreground/80">
                <Clock className="mt-0.5 size-4 shrink-0 text-foreground/70" />
                <span>
                  If renting jet skis or kayaks, reservations must be confirmed the
                  day of. We start accepting phone calls daily at 8am.
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
                <Info className="mt-0.5 size-4 shrink-0" />
                <span>We are not affiliated with the Indian Village gift shop.</span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Button asChild size="lg" className="mt-8 bg-gold text-gold-foreground hover:bg-gold/90">
                <a href={telHref}>
                  <Phone className="size-4" /> Call now: (517) 528-9545
                </a>
              </Button>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {methods.map((m) => (
              <RevealItem key={m.label}>
                <a
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex h-full cursor-pointer flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                    <m.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{m.label}</p>
                    <p className="mt-0.5 font-medium text-foreground">{m.value}</p>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
