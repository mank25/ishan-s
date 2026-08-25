import Image from "next/image";

/**
 * The Eventiify seal, lifted off its original green card so it can sit on any
 * background. Three prepared tones rather than CSS filters, so the fine
 * hairlines in the wordmark stay crisp.
 */
const SOURCES = {
  gold: "/brand/eventiify-crest-gold.png",
  ink: "/brand/eventiify-crest-ink.png",
  cream: "/brand/eventiify-crest-cream.png",
} as const;

export default function Crest({
  tone = "gold",
  className = "",
  priority = false,
}: {
  tone?: keyof typeof SOURCES;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={SOURCES[tone]}
      alt="Eventiify — a unit of Chache Di Hatti, since 1973"
      width={834}
      height={376}
      priority={priority}
      className={className}
    />
  );
}
