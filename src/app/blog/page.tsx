import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Journal - Eventiify",
  description: "Planning notes, real celebrations, and stories from five decades of hosting.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="bg-parchment">
        <section className="border-b border-hairline py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <p className="font-utility text-xs uppercase tracking-[0.3em] text-rust">Journal</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Notes on planning, well.
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            {posts.length ? (
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link key={post._id} href={`/blog/${post.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink">
                      {post.coverImage && (
                        <Image
                          src={urlForImage(post.coverImage).width(600).height(450).url()}
                          alt={post.coverImage.alt ?? post.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <p className="mt-4 font-utility text-[10px] uppercase tracking-[0.16em] text-rust">
                      {post.category}
                    </p>
                    <h2 className="mt-1 font-display text-xl text-ink group-hover:text-rust">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/65">
                        {post.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-hairline p-16 text-center">
                <p className="font-display text-xl text-ink">The journal is warming up.</p>
                <p className="mt-2 font-body text-sm text-charcoal/60">
                  Publish your first post in Sanity Studio at{" "}
                  <Link href="/studio" className="underline">
                    /studio
                  </Link>{" "}
                  and it will appear here.
                </p>
              </div>
            )}
          </div>
      </section>
    </main>
  );
}
