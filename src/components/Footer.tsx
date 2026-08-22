import Link from "next/link";
import Seal from "./Seal";

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Seal className="h-20 w-20 text-gold" spin={false} />
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-parchment/70">
              A unit of Chache Di Hatti - from a family kitchen counter in 1973 to a
              full-service event house today.
            </p>
          </div>

          <div>
            <h3 className="font-utility text-xs uppercase tracking-[0.2em] text-gold">Explore</h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-parchment/80">
              <li><Link href="/#services" className="hover:text-gold">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-gold">Journal</Link></li>
              <li><Link href="/#legacy" className="hover:text-gold">Our Legacy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-utility text-xs uppercase tracking-[0.2em] text-gold">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-parchment/80">
              <li><a href="tel:+911234567890" className="hover:text-gold">+91 12345 67890</a></li>
              <li><a href="mailto:hello@eventiify.com" className="hover:text-gold">hello@eventiify.com</a></li>
              <li className="text-parchment/60">Chandigarh · Delhi NCR · Mohali</li>
            </ul>
          </div>

          <div>
            <h3 className="font-utility text-xs uppercase tracking-[0.2em] text-gold">Follow</h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-parchment/80">
              <li><a href="#" className="hover:text-gold">Instagram</a></li>
              <li><a href="#" className="hover:text-gold">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="ledger-rule mt-14 text-hairline-dark" />
        <div className="mt-6 flex flex-col gap-2 font-utility text-[11px] uppercase tracking-[0.15em] text-parchment/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Eventiify. All rights reserved.</span>
          <span>We Listen, We Plan, We Deliver.</span>
        </div>
      </div>
    </footer>
  );
}
