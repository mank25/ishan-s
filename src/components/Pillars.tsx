import Image from "next/image";
import Link from "next/link";
import { bubblePhotos, pillarPhotos } from "@/lib/media";
import Reveal from "./Reveal";

const PILLARS = [
  {
    title: "Bespoke Design",
    body: "We turn your family's story into a room. Every mandap, table and entrance is drawn for you, not pulled off a shelf.",
  },
  {
    title: "Fluid Logistics",
    body: "From vendor timelines to on-day coordination, our team absorbs the chaos so you can be a guest at your own function.",
  },
  {
    title: "Landmark Venues",
    body: "Five decades of relationships across the Tricity and Delhi NCR open doors — and rates — that are hard to get cold.",
  },
];

// Hand-placed so the bubbles clear the headline column at every width.
const BUBBLES = [
  { style: { top: "7%", left: "4%" }, size: "h-24 w-24", delay: "0s" },
  { style: { top: "15%", left: "16%" }, size: "h-14 w-14", delay: "1.4s" },
  { style: { top: "36%", left: "2%" }, size: "h-20 w-20", delay: "2.6s" },
  { style: { top: "56%", left: "11%" }, size: "h-14 w-14", delay: "0.8s" },
  { style: { top: "72%", left: "3%" }, size: "h-16 w-16", delay: "3.2s" },
  { style: { top: "6%", right: "6%" }, size: "h-24 w-24", delay: "1.1s" },
  { style: { top: "16%", right: "17%" }, size: "h-14 w-14", delay: "2.2s" },
  { style: { top: "38%", right: "3%" }, size: "h-20 w-20", delay: "0.4s" },
  { style: { top: "58%", right: "13%" }, size: "h-14 w-14", delay: "2.9s" },
  { style: { top: "74%", right: "4%" }, size: "h-[4.5rem] w-[4.5rem]", delay: "1.7s" },
];

export default function Pillars() {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink px-5 py-24 md:px-10 md:py-32">
      {/* Drifting stills from past celebrations. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            style={{ ...b.style, animationDelay: b.delay }}
            className={`drift absolute overflow-hidden rounded-full opacity-70 ring-1 ring-gold/25 ${b.size}`}
          >
            <Image
              src={bubblePhotos[i].src}
              alt=""
              fill
              sizes="120px"
              className="object-cover"
            />
          </span>
        ))}
      </div>

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="script text-[clamp(1.75rem,3.6vw,2.8rem)] text-gold-bright">
          Why Choose Us
        </p>
        <h2 className="headline mt-1 text-[clamp(1.8rem,4.4vw,3.15rem)] text-parchment">
          Celebrations that align, unforgettably, with your absolute vision.
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-20 grid max-w-4xl gap-14 md:grid-cols-3 md:gap-10">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 120} className="text-center">
            <div className="group relative mx-auto aspect-square w-52 overflow-hidden rounded-full ring-1 ring-gold/35 md:w-full md:max-w-[15rem]">
              <Image
                src={pillarPhotos[i].src}
                alt={pillarPhotos[i].alt}
                fill
                sizes="(min-width:768px) 240px, 208px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-7 font-display text-xl font-normal text-gold">{p.title}</h3>
            <p className="mx-auto mt-3 max-w-xs text-[0.88rem] leading-[1.8] text-parchment/70">
              {p.body}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="relative mt-16 text-center">
        <Link
          href="/gallery"
          className="btn bg-parchment text-ink hover:bg-gold-bright hover:text-ink-deep"
        >
          View more
        </Link>
      </Reveal>
    </section>
  );
}
