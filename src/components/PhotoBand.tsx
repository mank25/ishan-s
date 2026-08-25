import Image from "next/image";
import { bandPhotos } from "@/lib/media";

// Height and vertical drift per column — the staggered mosaic that carries the
// eye from the cream half of the page into the sand-coloured half.
const LAYOUT = [
  { h: "h-56", y: "translate-y-0" },
  { h: "h-72", y: "translate-y-10" },
  { h: "h-64", y: "translate-y-24" },
  { h: "h-80", y: "translate-y-6" },
  { h: "h-60", y: "translate-y-28" },
  { h: "h-72", y: "translate-y-2" },
  { h: "h-56", y: "translate-y-20" },
  { h: "h-64", y: "translate-y-8" },
  { h: "h-52", y: "translate-y-28" },
];

export default function PhotoBand() {
  return (
    <section
      aria-label="Recent work"
      className="relative bg-[linear-gradient(to_bottom,var(--color-parchment)_0%,var(--color-parchment)_42%,var(--color-sand)_42%,var(--color-sand)_100%)] pb-24 pt-4 md:pb-32"
    >
      {/* Desktop: a staggered mosaic. */}
      <div className="mx-auto hidden max-w-[1500px] items-start gap-3 px-6 md:flex lg:gap-4">
        {bandPhotos.map((p, i) => (
          <div
            key={p.src}
            className={`group relative flex-1 overflow-hidden rounded-2xl ${LAYOUT[i].h} ${LAYOUT[i].y} shadow-[0_18px_40px_-24px_rgba(7,22,15,0.6)] transition-transform duration-500 hover:-translate-y-1`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width:1280px) 160px, 12vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-ink-deep/10 transition-opacity duration-500 group-hover:opacity-0"
            />
          </div>
        ))}
      </div>

      {/* Mobile: the same frames on a swipeable rail. */}
      <div className="rail flex gap-3 overflow-x-auto px-5 pb-2 md:hidden">
        {bandPhotos.map((p) => (
          <div
            key={p.src}
            className="relative h-56 w-40 shrink-0 overflow-hidden rounded-2xl shadow-[0_16px_34px_-22px_rgba(7,22,15,0.6)]"
          >
            <Image src={p.src} alt={p.alt} fill sizes="160px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
