import Image from "next/image";
import Link from "next/link";
import { commitmentPhotos } from "@/lib/media";
import Reveal from "./Reveal";

export default function Commitment() {
  return (
    <section className="relative overflow-hidden bg-parchment px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <Reveal>
          <p className="script text-[clamp(1.75rem,3.6vw,2.8rem)] text-brass">
            Our Commitment
          </p>
          <h2 className="headline mt-1 text-[clamp(1.8rem,4.4vw,3.15rem)] text-ink">
            Your Vision, Our
            <br />
            Flawless Execution
          </h2>
          <p className="mt-6 max-w-md text-[0.95rem] leading-[1.85] text-charcoal/72">
            We are dedicated to turning your celebration into a stress-free reality. By
            blending creative direction with meticulous planning, our team makes sure
            every detail reflects your family — an elegant, unhurried day your guests
            will still be talking about years later.
          </p>
          <Link href="/contact" className="btn btn-gold mt-9">
            Contact us
          </Link>
        </Reveal>

        {/* Desktop: three mounts, overlapped. */}
        <div className="relative hidden h-[520px] lg:block">
          <div className="frame absolute left-0 top-8 w-[46%] rotate-[-4deg]">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src={commitmentPhotos[0].src} alt={commitmentPhotos[0].alt} fill sizes="280px" className="object-cover" />
            </div>
          </div>
          <div className="frame absolute right-0 top-0 z-10 w-[50%] rotate-[3deg]">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src={commitmentPhotos[1].src} alt={commitmentPhotos[1].alt} fill sizes="300px" className="object-cover" />
            </div>
          </div>
          <div className="frame frame-sand absolute bottom-0 left-[26%] z-20 w-[44%] rotate-[-2deg]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={commitmentPhotos[2].src} alt={commitmentPhotos[2].alt} fill sizes="270px" className="object-cover" />
            </div>
          </div>
        </div>

        {/* Mobile: the same three, side by side. */}
        <div className="grid grid-cols-3 gap-3 lg:hidden">
          {commitmentPhotos.map((p, i) => (
            <div key={p.src} className={`frame ${i === 1 ? "-mt-4" : i === 2 ? "mt-4" : ""}`}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={p.src} alt={p.alt} fill sizes="30vw" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
