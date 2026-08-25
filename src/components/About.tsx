import Image from "next/image";
import Link from "next/link";
import { aboutPhotos } from "@/lib/media";
import Reveal from "./Reveal";

function Mount({
  index,
  className,
  sizes,
}: {
  index: number;
  className: string;
  sizes: string;
}) {
  const photo = aboutPhotos[index];
  return (
    <div className={`frame ${className}`}>
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-parchment px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_minmax(0,520px)_1fr] lg:gap-10">
        {/* Left mounts — desktop only */}
        <div className="relative hidden min-h-[500px] lg:block">
          <Mount index={0} className="absolute left-[4%] top-[-12%] w-[63%] -rotate-[5deg]" sizes="220px" />
          <Mount index={1} className="absolute left-[26%] top-[44%] w-[66%] rotate-[4deg]" sizes="220px" />
        </div>

        <div className="text-center">
          <Reveal>
            <p className="script text-[clamp(1.75rem,3.6vw,2.8rem)] text-brass">
              About Eventiify
            </p>
            <h2 className="headline mt-1 text-[clamp(1.8rem,4.4vw,3.15rem)] text-ink">
              The Family Behind
              <br />
              Your Perfect Day
            </h2>
            <p className="mt-6 text-[0.95rem] leading-[1.85] text-charcoal/72">
              We have been feeding and hosting other people&rsquo;s biggest days since
              1973, when Chache Di Hatti opened with a single counter and a
              hand-written order book. Three generations later those ledgers have
              become a full event house — creative direction, vendor logistics,
              catering and on-day command, under one roof and one name.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link href="/contact" className="btn btn-gold">
                Book a consultation
              </Link>
              <Link href="/#legacy" className="btn btn-outline">
                Our story
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right mounts — desktop only */}
        <div className="relative hidden min-h-[500px] lg:block">
          <Mount index={2} className="absolute right-[6%] top-[-16%] w-[64%] rotate-[5deg]" sizes="220px" />
          <Mount index={3} className="absolute right-[28%] top-[42%] w-[62%] -rotate-[4deg]" sizes="220px" />
        </div>

        {/* Mobile / tablet collage */}
        <div className="-order-1 grid grid-cols-2 gap-4 px-2 sm:gap-6 lg:hidden">
          <Mount index={0} className="-rotate-[4deg]" sizes="(min-width:640px) 300px, 45vw" />
          <Mount index={2} className="mt-6 rotate-[4deg]" sizes="(min-width:640px) 300px, 45vw" />
          <Mount index={1} className="rotate-[3deg]" sizes="(min-width:640px) 300px, 45vw" />
          <Mount index={3} className="mt-6 -rotate-[3deg]" sizes="(min-width:640px) 300px, 45vw" />
        </div>
      </div>
    </section>
  );
}
