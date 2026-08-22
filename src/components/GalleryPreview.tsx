import Link from "next/link";
import { getGalleryImages } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { fallbackGallery } from "@/lib/fallbackContent";
import GalleryTile from "./GalleryTile";
import Reveal from "./Reveal";

export default async function GalleryPreview() {
  const cmsImages = await getGalleryImages();
  const images = cmsImages.length ? cmsImages.slice(0, 6) : fallbackGallery;

  return (
    <section className="bg-parchment py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-utility text-xs uppercase tracking-[0.3em] text-rust">Gallery</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              Moments we&rsquo;ve hosted.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="font-utility text-xs uppercase tracking-[0.18em] text-ink underline decoration-rust decoration-2 underline-offset-4 hover:text-rust"
          >
            View Full Gallery →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((img, i) => (
            <Reveal key={img._id} delay={i * 60}>
              <GalleryTile
                title={img.title}
                category={img.category}
                imageUrl={
                  "image" in img && img.image
                    ? urlForImage(img.image).width(600).height(750).url()
                    : undefined
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
