import Link from "next/link";
import Crest from "./Crest";
import { navAll, site } from "@/lib/site";

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 5.1a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1Zm6-7.94a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-7.5h2.5l.4-2.9h-2.9V8.7c0-.85.24-1.42 1.45-1.42h1.55V4.68c-.27-.04-1.19-.12-2.26-.12-2.24 0-3.77 1.37-3.77 3.87v2.16H8v2.9h2.47V21h3.03Z",
  },
  {
    label: "WhatsApp",
    href: "#",
    path: "M12 2.5a9.4 9.4 0 0 0-8.1 14.15L2.5 21.5l4.98-1.35A9.4 9.4 0 1 0 12 2.5Zm0 1.7a7.7 7.7 0 1 1-3.93 14.32l-.3-.18-2.9.78.78-2.83-.19-.3A7.7 7.7 0 0 1 12 4.2Zm-3.1 3.6c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.7 4.2 3.68 2.08.82 2.5.66 2.95.62.45-.04 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47Z",
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-parchment">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1.1fr] md:px-10 md:py-20">
        <div>
          <Crest tone="ink" className="h-20 w-auto" />
          <p className="script mt-5 text-2xl text-brass">{site.tagline}</p>
          <ul className="mt-6 flex items-center gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-parchment transition-colors hover:bg-gold hover:text-ink-deep"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow text-brass-deep">Quick Links</h2>
          <ul className="mt-5 space-y-2.5 text-[0.88rem] text-charcoal/75">
            {navAll.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-brass">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/gallery" className="transition-colors hover:text-brass">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>

        <div className="space-y-8">
          <div>
            <h2 className="eyebrow text-brass-deep">Contact Us</h2>
            <ul className="mt-5 space-y-2 text-[0.88rem] text-charcoal/75">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-brass">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-brass">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow text-brass-deep">Where We Work</h2>
            <p className="mt-5 text-[0.88rem] leading-relaxed text-charcoal/75">{site.cities}</p>
          </div>
        </div>
      </div>

      <div className="bg-ink px-6 py-4 text-center text-[0.72rem] uppercase tracking-[0.2em] text-parchment/55">
        © {new Date().getFullYear()} {site.name} · {site.parent} · All rights reserved
      </div>
    </footer>
  );
}
