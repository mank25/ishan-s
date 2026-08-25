import Reveal from "./Reveal";

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.45,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/* Hand-drawn-feeling line marks, one per add-on service. */
const ICONS: Record<string, React.ReactNode> = {
  decor: (
    <>
      <path {...S} d="M9 44V19M39 44V19" />
      <path {...S} d="M9 19c0-8 6.7-13 15-13s15 5 15 13" />
      <path {...S} d="M6 44h9M33 44h9" />
      <circle {...S} cx="16" cy="12.5" r="2.6" />
      <circle {...S} cx="24" cy="9.6" r="3" />
      <circle {...S} cx="32" cy="12.5" r="2.6" />
      <path {...S} d="M12 24c3 2 3 5 0 7M36 24c-3 2-3 5 0 7" />
    </>
  ),
  sangeet: (
    <>
      <rect {...S} x="6" y="20" width="24" height="17" rx="4" />
      <path {...S} d="M6 25h24M6 32h24M12 20v17M24 20v17" />
      <path {...S} d="M4 24.5c-1.6 2-1.6 6 0 8M32 24.5c1.6 2 1.6 6 0 8" />
      <path {...S} d="M36 33V15l7-2.4v18" />
      <circle {...S} cx="33.4" cy="34.6" r="2.6" />
      <circle {...S} cx="40.4" cy="32.2" r="2.6" />
      <path {...S} d="M36 19.4l7-2.4" />
    </>
  ),
  catering: (
    <>
      <path {...S} d="M8 22h32l-2.6 15.5A4 4 0 0 1 33.5 41h-19a4 4 0 0 1-3.9-3.5L8 22Z" />
      <path {...S} d="M5 22h38" />
      <path {...S} d="M6.5 27.5c-2 1-2 4.5 0 5.5M41.5 27.5c2 1 2 4.5 0 5.5" />
      <path {...S} d="M17 16c0-2.6 3-3.4 3-6M24 14.5c0-2.6 3-3.4 3-6M31 16c0-2.6 3-3.4 3-6" />
    </>
  ),
  corporate: (
    <>
      <rect {...S} x="7" y="7" width="34" height="23" rx="3" />
      <path {...S} d="M24 30v8M16 42h16" />
      <path {...S} d="M15.5 24.5v-6M20.5 24.5v-11M25.5 24.5v-4.5M30.5 24.5v-8.5" />
      <path {...S} d="M12 24.5h24" />
    </>
  ),
};

const EXTRAS = [
  { key: "decor", title: "Décor &", title2: "Styling" },
  { key: "sangeet", title: "Sangeet &", title2: "Entertainment" },
  { key: "catering", title: "Catering", title2: "Since 1973" },
  { key: "corporate", title: "Corporate &", title2: "Conferences" },
];

export default function AndMore() {
  return (
    <section className="relative bg-sand px-5 py-20 md:px-10 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="script text-[clamp(2rem,4.4vw,3rem)] text-brass">And more!</h2>
        <p className="mt-4 text-[0.95rem] leading-[1.8] text-charcoal/72">
          From the first detail curation to the final grand exit, we bring the complete
          vision to life with zero stress on your family.
        </p>
      </Reveal>

      <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-4">
        {EXTRAS.map((e, i) => (
          <Reveal key={e.key} delay={i * 90}>
            <li className="group flex flex-col items-center text-center">
              <svg
                viewBox="0 0 48 48"
                aria-hidden
                className="h-[4.5rem] w-[4.5rem] text-brass transition-transform duration-500 group-hover:-translate-y-1.5 md:h-20 md:w-20"
              >
                {ICONS[e.key]}
              </svg>
              <p className="mt-5 text-[0.85rem] leading-[1.6] text-ink">
                {e.title}
                <br />
                {e.title2}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
