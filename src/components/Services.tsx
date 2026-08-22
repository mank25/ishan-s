import { getServices } from "@/sanity/lib/queries";
import { fallbackServices } from "@/lib/fallbackContent";
import Reveal from "./Reveal";

export default async function Services() {
  const cmsServices = await getServices();
  const services = cmsServices.length ? cmsServices : fallbackServices;

  return (
    <section id="services" className="bg-ink py-24 text-parchment">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-utility text-xs uppercase tracking-[0.3em] text-gold">What We Do</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              One house, every occasion.
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm leading-relaxed text-parchment/65">
            Four disciplines, one team - so your caterer, decorator, and planner never point
            fingers at each other.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline-dark bg-hairline-dark sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service._id} delay={i * 80} className="bg-ink p-8 transition-colors hover:bg-ink-deep">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 font-display text-lg text-gold">
                {service.icon}
              </span>
              <h3 className="mt-6 font-display text-xl">{service.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-parchment/65">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
