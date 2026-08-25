"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { portfolioPhotos } from "@/lib/media";
import SectionHeading from "./SectionHeading";

export default function Portfolio() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const rail = railRef.current;
    const card = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !card) return;
    rail.scrollTo({
      left: card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  // Track which slide is nearest the centre so the arrows and dots stay honest
  // when the rail is swiped rather than clicked.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const middle = rail.scrollLeft + rail.clientWidth / 2;
        let nearest = 0;
        let best = Infinity;
        Array.from(rail.children).forEach((child, i) => {
          const el = child as HTMLElement;
          const distance = Math.abs(el.offsetLeft + el.clientWidth / 2 - middle);
          if (distance < best) {
            best = distance;
            nearest = i;
          }
        });
        setActive(nearest);
      });
    };

    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      rail.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const last = portfolioPhotos.length - 1;

  return (
    <section id="portfolio" className="relative bg-parchment px-5 py-24 md:px-10 md:py-32">
      {/* faint botanical wash, echoing the reference's watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-96 bg-[radial-gradient(closest-side,rgba(201,161,59,0.10),transparent)]"
      />

      <SectionHeading
        script="Our Portfolio"
        title="Visualising Your Dreams Into Reality"
        lede="A glimpse of the rooms we have built and the days we have run. Every frame is a real brief, a real budget, and a family who trusted us with it."
        className="relative"
      />

      <div className="relative mt-16" style={{ "--slide": "min(82vw, 880px)" } as React.CSSProperties}>
        <div
          ref={railRef}
          className="rail flex snap-x snap-mandatory gap-4 overflow-x-auto py-2 md:gap-6"
          style={{ paddingInline: "calc((100% - var(--slide)) / 2)" }}
        >
          {portfolioPhotos.map((p) => (
            <figure
              key={p.src}
              style={{ width: "var(--slide)" }}
              className="group relative aspect-[4/3] shrink-0 snap-center overflow-hidden rounded-3xl shadow-[0_28px_60px_-30px_rgba(7,22,15,0.75)] md:aspect-[16/10]"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width:1100px) 880px, 82vw"
                className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(to_top,rgba(7,22,15,0.82),transparent)]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1 p-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4 md:p-7">
                <span className="font-display text-lg font-light text-parchment md:text-xl">
                  {p.caption}
                </span>
                <span className="eyebrow shrink-0 text-gold-bright">{p.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous project"
          onClick={() => scrollTo(Math.max(0, active - 1))}
          disabled={active === 0}
          className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-parchment shadow-lg ring-1 ring-gold/40 transition hover:bg-ink-soft disabled:opacity-30 md:left-8 md:h-14 md:w-14"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next project"
          onClick={() => scrollTo(Math.min(last, active + 1))}
          disabled={active === last}
          className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-ink-deep shadow-lg transition hover:bg-gold-bright disabled:opacity-30 md:right-8 md:h-14 md:w-14"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="relative mt-9 flex items-center justify-center gap-2.5">
        {portfolioPhotos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            aria-label={`Go to ${p.caption}`}
            aria-current={i === active}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-brass" : "w-1.5 bg-ink/25 hover:bg-ink/45"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
