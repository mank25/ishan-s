import Reveal from "./Reveal";

/**
 * The script-over-headline pairing that opens every section: a gold script
 * eyebrow, a light geometric headline, then an optional lede.
 */
export default function SectionHeading({
  script,
  title,
  lede,
  tone = "light",
  align = "center",
  className = "",
}: {
  script: string;
  title: React.ReactNode;
  lede?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-xl text-left"} ${className}`}
    >
      <p
        className={`script text-[clamp(1.75rem,3.6vw,2.8rem)] ${
          tone === "dark" ? "text-gold-bright" : "text-brass"
        }`}
      >
        {script}
      </p>
      <h2
        className={`headline mt-1 text-[clamp(1.8rem,4.4vw,3.15rem)] ${
          tone === "dark" ? "text-parchment" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-[0.95rem] leading-[1.8] ${
            centered ? "mx-auto max-w-2xl" : ""
          } ${tone === "dark" ? "text-parchment/70" : "text-charcoal/70"}`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
