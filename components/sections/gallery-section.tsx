import { Gallery } from "@/components/magic/gallery";
import { Reveal } from "@/components/magic/reveal";

const images = [
  {
    src: "/ingested/mackinacstraitsrentalco/sunset-group-paddle.webp",
    alt: "A group paddling kayaks and a canoe together at sunset on the Straits of Mackinac",
  },
  {
    src: "/ingested/mackinacstraitsrentalco/bridge-tour-kayakers.webp",
    alt: "Two kayakers paddling toward the Mackinac Bridge on a bridge viewing tour",
  },
  {
    src: "/ingested/mackinacstraitsrentalco/kayak-paddleboard-people.webp",
    alt: "Renters paddling kayaks and a stand-up paddleboard on the Straits of Mackinac",
  },
  {
    src: "/ingested/mackinacstraitsrentalco/pontiki-dock-sunset.webp",
    alt: "The custom Pon Tiki pontoon boat docked at sunset with tiki torches along the shore",
  },
  {
    src: "/ingested/mackinacstraitsrentalco/kayak-fleet.webp",
    alt: "A row of colorful rental kayaks with paddles lined up on the grass beside the rental truck",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Straits & sunsets
        </span>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
          On the water
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
          A look at the rentals, tours, and cruises, right from the Straits of
          Mackinac.
        </p>
      </Reveal>
      <div className="mt-10">
        <Gallery images={images} />
      </div>
    </section>
  );
}
