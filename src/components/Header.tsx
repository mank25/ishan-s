"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Crest from "./Crest";
import { navAll, navLeft, navRight, site } from "@/lib/site";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-[0.78rem] uppercase tracking-[0.16em] text-parchment/85 transition-colors hover:text-gold-bright after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-bright after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  // On the home page the bar floats over the hero photograph; everywhere else
  // it needs its own ground to sit on.
  const overlay = pathname === "/";

  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div
        className={
          overlay
            ? "absolute inset-x-0 top-full z-40"
            : "relative z-40 bg-ink shadow-[0_1px_0_0_var(--color-hairline-dark)]"
        }
      >
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-5 md:px-10 md:py-7">
          {/* Balances the menu button so the seal stays centred on small screens. */}
          <div className="flex-1 lg:hidden" aria-hidden />

          {/* Desktop: links flank a centred seal, as in the reference. */}
          <nav className="hidden flex-1 items-center justify-start gap-9 lg:flex">
            {navLeft.map((l) => (
              <NavLink key={l.href} {...l} />
            ))}
          </nav>

          <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
            <Crest tone="gold" priority className="h-11 w-auto md:h-16" />
          </Link>

          <nav className="hidden flex-1 items-center justify-end gap-9 lg:flex">
            {navRight.map((l) => (
              <NavLink key={l.href} {...l} />
            ))}
          </nav>

          {/* Mobile / tablet */}
          <div className="flex flex-1 items-center justify-end lg:hidden">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-gold/45 text-parchment"
            >
              <span className="h-px w-[18px] bg-current" />
              <span className="h-px w-[18px] bg-current" />
              <span className="h-px w-[18px] bg-current" />
            </button>
          </div>
        </div>
      </div>

      {/* Condensed bar — slides in once the hero is behind you. */}
      <div
        className={`fixed inset-x-[var(--shell-gap)] top-[var(--shell-gap)] z-50 transition-all duration-500 ${
          condensed && !open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-4 rounded-full border border-gold/25 bg-ink-deep/92 px-4 py-2.5 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md md:px-6">
          <Link href="/" aria-label={`${site.name} — home`}>
            <Crest tone="gold" className="h-7 w-auto md:h-8" />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {navAll.slice(0, 5).map((l) => (
              <NavLink key={l.href} {...l} />
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn btn-gold !px-5 !py-2.5 !text-[0.68rem]">
              Book a date
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[4px] rounded-full border border-gold/40 text-parchment lg:hidden"
            >
              <span className="h-px w-4 bg-current" />
              <span className="h-px w-4 bg-current" />
              <span className="h-px w-4 bg-current" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-ink-deep transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="flex items-center justify-between">
            <Crest tone="gold" className="h-11 w-auto" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/45 text-parchment"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path
                  d="M5 5l14 14M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-14 flex flex-col gap-1">
            {navAll.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="border-b border-hairline-dark/60 py-4 font-display text-2xl font-light text-parchment transition-colors hover:text-gold-bright"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" onClick={close} className="btn btn-gold mt-10 w-full">
            Book a consultation
          </Link>

          <div className="mt-auto pt-10 text-[0.78rem] leading-relaxed text-parchment/60">
            <p className="script text-2xl text-gold">{site.tagline}</p>
            <p className="mt-3">{site.cities}</p>
            <a href={site.phoneHref} className="mt-1 block hover:text-gold">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
