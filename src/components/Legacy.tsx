import Image from "next/image";
import { getGalleryImages } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import Reveal from "./Reveal";

const paragraphs = [
  "We opened our first counter in 1973 - home-style catering for weddings and family functions in the neighborhood. Every order was written by hand in a ledger we still keep.",
  "Since then we've had the privilege of hosting thousands of celebrations, and we cherish each one. Every family is different - some want a short, simple ceremony, others want three days of ritual and reunion.",
  "Some prefer a traditional mandap, some a garden reception, some a corporate gala with none of the fuss. Whatever the occasion, we plan it the way we'd plan our own.",
  "In 2024, five decades of those ledgers became Eventiify - a dedicated event house serving Chandigarh, Delhi NCR, and Mohali.",
];

export default async function Legacy() {
  const gallery = await getGalleryImages();
  const large = gallery[5];
  const small = [gallery[6], gallery[7]];

  return (
    <section id="legacy" className="bg-parchment py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="font-utility text-xs uppercase tracking-[0.3em] text-rust">Our Legacy</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
            How it all began.
          </h2>
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-charcoal/75">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gold/15" />

          <div className="absolute inset-y-6 left-6 w-[58%] overflow-hidden rounded-t-full shadow-lg">
            {large && "image" in large && large.image ? (
              <Image
                src={urlForImage(large.image).width(400).height(600).url()}
                alt={large.title ?? "Eventiify event photo"}
                fill
                sizes="220px"
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-b from-rust/80 via-ink to-ink-deep" />
            )}
          </div>

          <div className="absolute right-4 top-4 aspect-square w-[36%] overflow-hidden rounded-2xl border-4 border-parchment shadow-lg">
            {small[0] && "image" in small[0] && small[0].image ? (
              <Image
                src={urlForImage(small[0].image).width(220).height(220).url()}
                alt={small[0].title ?? "Eventiify event photo"}
                fill
                sizes="140px"
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-gold/70 via-ink to-ink-deep" />
            )}
          </div>

          <div className="absolute bottom-4 right-4 aspect-square w-[36%] overflow-hidden rounded-2xl border-4 border-parchment shadow-lg">
            {small[1] && "image" in small[1] && small[1].image ? (
              <Image
                src={urlForImage(small[1].image).width(220).height(220).url()}
                alt={small[1].title ?? "Eventiify event photo"}
                fill
                sizes="140px"
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-ink via-ink-deep to-hairline-dark" />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
