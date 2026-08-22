"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#legacy", label: "Our Legacy" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-parchment">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/eventiify-logo.jpeg"
            alt="Eventiify"
            width={44}
            height={44}
            className="rounded-full ring-1 ring-gold/60"
            priority
          />
          <span className="font-display text-lg tracking-wide">Eventiify</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-utility text-xs uppercase tracking-[0.18em] text-parchment/85 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-gold px-5 py-2 font-utility text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Start Planning
          </Link>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-parchment transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-parchment transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-parchment transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-hairline-dark px-6 pb-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 font-utility text-sm uppercase tracking-[0.18em] text-parchment/85 hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-full border border-gold px-5 py-3 text-center font-utility text-sm uppercase tracking-[0.18em] text-gold"
            onClick={() => setOpen(false)}
          >
            Start Planning
          </Link>
        </nav>
      )}
    </header>
  );
}
