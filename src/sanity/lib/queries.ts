import { client } from "./client";

export type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: { asset?: { _ref: string }; alt?: string };
  category?: string;
  author?: string;
  publishedAt?: string;
  body?: unknown;
};

export type Testimonial = {
  _id: string;
  clientName: string;
  eventType?: string;
  quote: string;
  rating?: number;
  photo?: { asset?: { _ref: string } };
  featured?: boolean;
};

export type GalleryImage = {
  _id: string;
  title?: string;
  image: { asset?: { _ref: string } };
  category?: string;
};

export type Service = {
  _id: string;
  title: string;
  description?: string;
  icon?: string;
};

const postFields = `
  _id, title, "slug": slug.current, excerpt, coverImage, category, author, publishedAt, body
`;

/**
 * Sanity isn't configured with real credentials yet in local/dev, so every
 * fetch here fails soft to an empty result instead of throwing and taking
 * the whole page down. Once NEXT_PUBLIC_SANITY_PROJECT_ID is set, real data
 * flows through automatically.
 */
async function safeFetch<T>(
  query: string,
  fallback: T,
  params: Record<string, unknown> = {}
): Promise<T> {
  try {
    const result = await client.fetch<T>(query, params, { next: { revalidate: 60 } });
    return result ?? fallback;
  } catch {
    return fallback;
  }
}

export function getAllPosts() {
  return safeFetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc) { ${postFields} }`,
    []
  );
}

export function getPostBySlug(slug: string) {
  return safeFetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0] { ${postFields} }`,
    null,
    { slug }
  );
}

export function getFeaturedTestimonials() {
  return safeFetch<Testimonial[]>(
    `*[_type == "testimonial" && featured == true] | order(_createdAt desc) { _id, clientName, eventType, quote, rating, photo }`,
    []
  );
}

export function getAllTestimonials() {
  return safeFetch<Testimonial[]>(
    `*[_type == "testimonial"] | order(_createdAt desc) { _id, clientName, eventType, quote, rating, photo }`,
    []
  );
}

export function getGalleryImages() {
  return safeFetch<GalleryImage[]>(
    `*[_type == "galleryImage"] | order(order asc) { _id, title, image, category }`,
    []
  );
}

export function getServices() {
  return safeFetch<Service[]>(
    `*[_type == "service"] | order(order asc) { _id, title, description, icon }`,
    []
  );
}
