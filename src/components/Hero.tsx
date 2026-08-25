import Image from "next/image";
import Link from "next/link";
import { heroPhoto } from "@/lib/media";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative z-10">
      <Image
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center contrast-[1.08] saturate-[1.1]"
      />

      {/* Forest-green wash for legibility, resolving into the parchment page. */}
      <div className="absolute inset-0 bg-ink-deep/50 mix-blend-multiply" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,15,0.82)_0%,rgba(7,22,15,0.34)_30%,rgba(7,22,15,0.16)_52%,rgba(251,247,236,0)_72%,var(--color-parchment)_99%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(70%_56%_at_50%_40%,rgba(7,22,15,0.62),transparent_74%)]"
      />

      <div className="relative mx-auto flex min-h-[88svh] max-w-4xl flex-col items-center justify-center px-6 pb-40 pt-[128px] text-center md:min-h-[92svh] md:pb-52 md:pt-[176px]">
        <p className="script text-[clamp(1.9rem,4.6vw,3.1rem)] text-gold-bright drop-shadow-[0_2px_12px_rgba(7,22,15,0.5)]">
          Plan your celebration with us
        </p>

        <h1 className="headline mt-1 max-w-3xl text-[clamp(2.15rem,6.4vw,4.6rem)] text-parchment drop-shadow-[0_3px_20px_rgba(7,22,15,0.45)]">
          Crafting Unforgettable Celebrations.
        </h1>

        <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.85] text-parchment/85 drop-shadow-[0_2px_10px_rgba(7,22,15,0.5)] md:text-base">
          From an intimate mehndi in the courtyard to a thousand-guest reception, we
          design, plan and run every detail of your day — so your only job is to be
          present for it.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <Link href="/contact" className="btn btn-gold">
            Book a consultation
          </Link>
          <Link href="/#portfolio" className="btn btn-ondark">
            See our work
          </Link>
        </div>

        <p className="eyebrow mt-12 text-parchment/85 drop-shadow-[0_2px_10px_rgba(7,22,15,0.7)]">
          {site.parent}
          <span className="mx-3 text-gold">✦</span>
          <span className="whitespace-nowrap">Since {site.founded}</span>
        </p>
      </div>

      <Link
        href="/#about"
        aria-label="Skip to what we do"
        className="absolute bottom-0 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-ink text-gold shadow-[0_14px_30px_-14px_rgba(7,22,15,0.9)] ring-1 ring-gold/45 transition-colors hover:bg-ink-soft"
      >
        <svg viewBox="0 0 24 24" className="nudge h-4 w-4" aria-hidden>
          <path
            d="M12 4v15m0 0l-6-6m6 6l6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}
