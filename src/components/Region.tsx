import Image from "next/image";
import Link from "next/link";
import { regionCards, regionPhoto } from "@/lib/media";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const CARDS = [
  "Flawless timeline curation, managing every vendor so your family stays out of the logistics.",
  "Kitchens the family has run since 1973, cooking a menu built around your table — tasting included.",
  "Venue relationships across the Tricity that open doors, dates and rates most planners cannot.",
];

export default function Region() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-deep px-5 py-24 md:px-10 md:py-28">
      <Image
        src={regionPhoto.src}
        alt={regionPhoto.alt}
        fill
        sizes="100vw"
        className="object-cover object-center opacity-30"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,22,15,0.94)_0%,rgba(7,22,15,0.82)_45%,rgba(7,22,15,0.6)_100%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <p className="script text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.1] text-gold-bright">
            Chandigarh &amp; Tricity
            <br />
            Celebrations
          </p>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-[1.85] text-parchment/78">
            We run full-scale celebrations across {site.cities}. Every detail is curated
            with unmatched precision — an elite, breath-taking experience your family
            will treasure long after the last guest leaves.
          </p>
          <Link href="/contact" className="btn btn-gold mt-9">
            Contact us
          </Link>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {regionCards.map((c, i) => (
            <Reveal key={c.src} delay={i * 110}>
              <article className="overflow-hidden rounded-xl bg-ink-soft/70 ring-1 ring-gold/25 backdrop-blur-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    sizes="(min-width:640px) 220px, 90vw"
                    className="object-cover"
                  />
                </div>
                <p className="p-4 text-[0.8rem] leading-[1.65] text-parchment/80">{CARDS[i]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
