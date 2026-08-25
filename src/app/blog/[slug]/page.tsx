import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { getAllPosts, getPostBySlug } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <span className="relative my-8 block aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src={urlForImage(value).width(1200).height(750).url()}
          alt={value.alt ?? ""}
          fill
          className="object-cover"
        />
      </span>
    ),
  },
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  // `output: export` refuses to emit a dynamic route with zero params, so a
  // CMS that is unreachable (or not configured yet) would otherwise fail the
  // whole build. Fall back to one stub path, which renders the not-found page.
  if (posts.length === 0) return [{ slug: "not-found" }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} - Eventiify Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="bg-parchment">
      <article className="mx-auto max-w-3xl px-6 py-20 md:px-10">
          <p className="font-utility text-xs uppercase tracking-[0.3em] text-rust">
            {post.category}
          </p>
          <h1 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 font-body text-sm text-charcoal/60">
            {post.author}
            {post.publishedAt && (
              <>
                {" "}
                ·{" "}
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </>
            )}
          </p>

          {post.coverImage && (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={urlForImage(post.coverImage).width(1200).height(675).url()}
                alt={post.coverImage.alt ?? post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg mt-10 max-w-none font-body text-charcoal prose-headings:font-display prose-headings:text-ink prose-a:text-rust">
            {Array.isArray(post.body) && (
              <PortableText value={post.body} components={portableTextComponents} />
            )}
          </div>
      </article>
    </main>
  );
}
