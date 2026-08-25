import { legacyMilestones } from "@/lib/fallbackContent";
import Reveal from "./Reveal";

export default function Legacy() {
  return (
    <section id="legacy" className="relative bg-parchment px-5 pb-20 md:px-10 md:pb-28">
      <div className="mx-auto max-w-6xl rounded-[26px] border border-hairline bg-parchment-deep/55 px-6 py-14 md:px-14 md:py-16">
        <Reveal className="text-center">
          <p className="eyebrow text-brass-deep">
            Since <span className="text-brass">✦</span> 1973 <span className="text-brass">✦</span>
          </p>
          <h2 className="headline mt-4 text-[clamp(1.7rem,3.8vw,2.7rem)] text-ink">
            Five decades of other people&rsquo;s best days
          </h2>
          <div className="rule-gold mx-auto mt-7 w-40" />
        </Reveal>

        <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-8">
          {legacyMilestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 90}>
              <li className="relative border-l border-hairline pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-8">
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rotate-45 bg-gold md:-top-[5px] md:left-0"
                />
                <p className="font-serif text-4xl font-light leading-none text-brass md:text-5xl">
                  {m.year}
                </p>
                <h3 className="mt-3 text-[0.82rem] font-medium uppercase tracking-[0.16em] text-ink">
                  {m.title}
                </h3>
                <p className="mt-3 text-[0.87rem] leading-[1.75] text-charcoal/70">{m.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
