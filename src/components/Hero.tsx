import Link from "next/link";
import Image from "next/image";
import { getGalleryImages } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

const ARCH_TILES = [
  { grow: "flex-[1.1]", gradient: "from-ink via-ink-deep to-hairline-dark", label: "Catering" },
  { grow: "flex-[1.6]", gradient: "from-gold/60 via-ink to-ink-deep", label: "Décor" },
  { grow: "flex-[2.4]", gradient: "from-rust/85 via-ink to-ink-deep", label: "Weddings" },
  { grow: "flex-[1.6]", gradient: "from-gold/60 via-ink to-ink-deep", label: "Corporate" },
  { grow: "flex-[1.1]", gradient: "from-ink via-ink-deep to-hairline-dark", label: "Socials" },
];

export default async function Hero() {
  const gallery = await getGalleryImages();
  const tiles = ARCH_TILES.map((tile, i) => ({ ...tile, img: gallery[i] }));

  return (
    <section className="relative bg-parchment pb-20 pt-16 text-charcoal md:pb-28 md:pt-20">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <svg
          aria-hidden
          viewBox="0 0 120 40"
          className="mx-auto h-8 w-28 text-gold/70"
        >
          <path
            d="M2 30 C 20 5, 40 5, 60 20 S 100 35, 118 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>

        <p className="mt-3 font-utility text-xs uppercase tracking-[0.3em] text-rust">
          A Unit of Chache Di Hatti · Est. 1973
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
          Five decades of hosting,
          <br />
          <em className="font-display italic text-rust">now called</em> Eventiify.
        </h1>
        <p className="mx-auto mt-5 max-w-lg font-body text-base leading-relaxed text-charcoal/70 md:text-lg">
          We planned your parents&rsquo; wedding catering. We&rsquo;ll plan your daughter&rsquo;s
          sangeet, your company&rsquo;s launch, and everything in between.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-gold px-7 py-3.5 font-utility text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-bright"
          >
            Plan Your Event
          </Link>
          <Link
            href="/#legacy"
            className="rounded-full border border-ink/20 px-7 py-3.5 font-utility text-xs uppercase tracking-[0.18em] text-ink/80 transition-colors hover:border-rust hover:text-rust"
          >
            Our Story Since 1973
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-5xl items-end justify-center gap-2.5 px-6 sm:gap-4 md:px-10">
        {tiles.map((tile, i) => (
          <div
            key={tile.img?._id ?? i}
            className={`group relative aspect-[3/4] overflow-hidden rounded-t-full border-2 border-parchment shadow-lg transition-transform duration-300 hover:-translate-y-1.5 ${tile.grow}`}
          >
            {tile.img && "image" in tile.img && tile.img.image ? (
              <Image
                src={urlForImage(tile.img.image).width(400).height(560).url()}
                alt={tile.img.title ?? tile.label}
                fill
                sizes="(min-width: 768px) 280px, 22vw"
                className="object-cover"
              />
            ) : (
              <div className={`relative h-full w-full bg-gradient-to-b ${tile.gradient}`}>
                <div className="h-full w-full bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_16px,rgba(247,242,230,0.06)_16px,rgba(247,242,230,0.06)_17px)]" />
                <span className="absolute inset-x-0 bottom-4 hidden text-center font-display italic text-xs text-parchment/75 sm:block">
                  {tile.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
