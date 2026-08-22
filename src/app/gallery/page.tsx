import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { getGalleryImages } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { fallbackGallery } from "@/lib/fallbackContent";

export const metadata: Metadata = {
  title: "Gallery - Eventiify",
  description: "Weddings, corporate events, and celebrations hosted by Eventiify.",
};

export default async function GalleryPage() {
  const cmsImages = await getGalleryImages();
  const items = cmsImages.length
    ? cmsImages.map((img) => ({
        _id: img._id,
        title: img.title,
        category: img.category,
        imageUrl: img.image ? urlForImage(img.image).width(700).height(875).url() : undefined,
      }))
    : fallbackGallery;

  return (
    <main className="bg-parchment">
      <section className="border-b border-hairline py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <p className="font-utility text-xs uppercase tracking-[0.3em] text-rust">Gallery</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Every celebration tells us something new.
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <GalleryGrid items={items} />
        </div>
      </section>
    </main>
  );
}
