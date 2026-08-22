import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import Reveal from "./Reveal";

export default async function JournalPreview() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <section className="bg-parchment py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-utility text-xs uppercase tracking-[0.3em] text-rust">Journal</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              Planning notes from the team.
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-utility text-xs uppercase tracking-[0.18em] text-ink underline decoration-rust decoration-2 underline-offset-4 hover:text-rust"
          >
            Read the Journal →
          </Link>
        </div>

        {posts.length ? (
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post._id} delay={i * 90}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink">
                    {post.coverImage && (
                      <Image
                        src={urlForImage(post.coverImage).width(500).height(375).url()}
                        alt={post.coverImage.alt ?? post.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <p className="mt-4 font-utility text-[10px] uppercase tracking-[0.16em] text-rust">
                    {post.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg text-ink group-hover:text-rust">
                    {post.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-hairline p-12 text-center">
            <p className="font-display text-lg text-ink">The journal is warming up.</p>
            <p className="mt-2 font-body text-sm text-charcoal/60">
              New posts published from Sanity Studio will appear here automatically.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
