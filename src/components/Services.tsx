import Image from "next/image";
import Link from "next/link";
import { servicePhotos } from "@/lib/media";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TIERS = [
  {
    title: "Full Wedding Planning",
    body: "End-to-end management across every function — venue scouting, vendor curation, detailed budget mapping and complete design execution.",
  },
  {
    title: "Partial Coordination",
    body: "For families already underway who want expert hands on design refinement, vendor contracts and the logistics nobody enjoys.",
  },
  {
    title: "Day-of Management",
    body: "Direct oversight of the day's itinerary, vendor synchronisation and timeline execution, so your family stays in the moment.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-sand px-5 pb-24 pt-4 md:px-10 md:pb-32">
      <SectionHeading
        script="Our Services"
        title="Bespoke Planning For Every Celebration"
        lede="High-touch coordination shaped entirely around your families. From the first concept sketch to the last car leaving the gate, we hold every moving part."
      />

      <div className="mx-auto mt-20 grid max-w-6xl gap-14 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {TIERS.map((tier, i) => (
          <Reveal key={tier.title} delay={i * 110}>
            <article className="group relative text-center">
              <span className="absolute -top-6 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-ink font-serif text-lg text-gold ring-1 ring-gold/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_44px_-26px_rgba(7,22,15,0.7)]">
                <Image
                  src={servicePhotos[i].src}
                  alt={servicePhotos[i].alt}
                  fill
                  sizes="(min-width:1024px) 380px, (min-width:640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-normal text-brass">{tier.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-[0.88rem] leading-[1.8] text-charcoal/70">
                {tier.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 text-center">
        <Link href="/contact" className="btn btn-ink">
          See all services
        </Link>
      </Reveal>
    </section>
  );
}
