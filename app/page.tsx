import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { KayakRentals } from "@/components/sections/kayak-rentals";
import { Tours } from "@/components/sections/tours";
import { Pontoon } from "@/components/sections/pontoon";
import { JetSkis } from "@/components/sections/jet-skis";
import { BookingNote } from "@/components/sections/booking-note";
import { GallerySection } from "@/components/sections/gallery-section";
import { Contact } from "@/components/sections/contact";
import { Map } from "@/components/sections/map";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <KayakRentals />
        <Tours />
        <Pontoon />
        <JetSkis />
        <BookingNote />
        <GallerySection />
        <Contact />
        <Map />
      </main>
      <Footer />
    </>
  );
}
