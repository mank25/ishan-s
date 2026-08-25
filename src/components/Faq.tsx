"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { faqPhotos } from "@/lib/media";

const QUESTIONS = [
  {
    q: "What actually happens on the wedding day?",
    a: "A dedicated on-day team arrives before your first vendor and leaves after the last one. You get one point of contact, a printed run-sheet for every family member who needs one, and a floor manager on each function so nobody has to chase anything.",
  },
  {
    q: "Can we fully customise our packages?",
    a: "Yes. Every quote is built line by line around your guest count, your functions and your budget. Nothing is bundled in that you did not ask for, and you see the vendor costs as we see them.",
  },
  {
    q: "Do you manage events outside Chandigarh?",
    a: "We regularly run functions across Mohali, Panchkula, Zirakpur and Delhi NCR, and we travel further for destination weddings after an advance recce of the venue.",
  },
  {
    q: "Do you handle the catering yourselves?",
    a: "Catering is the craft the family started with in 1973. We cook in-house rather than sub-contracting, and we build the menu with you — tasting session included, before anything is locked.",
  },
  {
    q: "How far ahead should we book?",
    a: "Six to nine months is comfortable for a full wedding. We have delivered in six weeks when we had to, but the earlier you start, the more the venue and vendor choice opens up.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-parchment-deep px-5 py-24 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_minmax(0,540px)_1fr] lg:gap-8">
        {/* Left mount — desktop only */}
        <div className="relative hidden min-h-[420px] lg:block">
          <div className="frame absolute bottom-[8%] left-[6%] w-[76%] -rotate-[5deg]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={faqPhotos[0].src} alt={faqPhotos[0].alt} fill sizes="260px" className="object-cover" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="headline text-[clamp(1.7rem,4vw,2.6rem)] text-ink">
            You may be wondering…
          </h2>

          <ul className="mt-8 space-y-3">
            {QUESTIONS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="overflow-hidden rounded-xl bg-sand/80 ring-1 ring-hairline">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[0.9rem] font-medium text-ink transition-colors hover:text-brass-deep"
                    >
                      {item.q}
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className={`h-4 w-4 shrink-0 text-brass transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[0.87rem] leading-[1.8] text-charcoal/72">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 text-center lg:text-right">
            <p className="text-[0.8rem] font-medium uppercase tracking-[0.18em] text-charcoal/60">
              Don&rsquo;t see your question?
            </p>
            <Link
              href="/contact"
              className="script mt-1 inline-block text-[clamp(2rem,4.5vw,3rem)] text-brass transition-colors hover:text-brass-deep"
            >
              Let&rsquo;s Talk
            </Link>
          </div>
        </div>

        {/* Right mount — desktop only */}
        <div className="relative hidden min-h-[420px] lg:block">
          <div className="frame absolute right-[6%] top-[6%] w-[76%] rotate-[4deg]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={faqPhotos[1].src} alt={faqPhotos[1].alt} fill sizes="260px" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
