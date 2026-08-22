import { getFeaturedTestimonials } from "@/sanity/lib/queries";
import { fallbackTestimonials } from "@/lib/fallbackContent";
import Reveal from "./Reveal";

export default async function Testimonials() {
  const cmsTestimonials = await getFeaturedTestimonials();
  const testimonials = cmsTestimonials.length ? cmsTestimonials : fallbackTestimonials;

  return (
    <section className="bg-parchment-deep py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-utility text-xs uppercase tracking-[0.3em] text-rust">In Their Words</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink sm:text-4xl">
          Families who came back for the next occasion.
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t._id}
              delay={i * 90}
              className="flex flex-col justify-between rounded-2xl border border-hairline bg-parchment p-8"
            >
              <figure className="flex h-full flex-col justify-between">
                <blockquote className="font-display text-lg italic leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-hairline pt-4">
                  <p className="font-utility text-xs uppercase tracking-[0.15em] text-ink">
                    {t.clientName}
                  </p>
                  {t.eventType && (
                    <p className="mt-1 font-body text-xs text-charcoal/60">{t.eventType}</p>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
