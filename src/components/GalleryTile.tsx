import Image from "next/image";

const CATEGORY_LABEL: Record<string, string> = {
  weddings: "Weddings",
  corporate: "Corporate",
  catering: "Catering & Décor",
  socials: "Birthdays & Socials",
};

// Deterministic gradient per category so placeholder tiles stay visually
// consistent instead of random noise, until real photos are uploaded in Studio.
const CATEGORY_GRADIENT: Record<string, string> = {
  weddings: "from-rust/90 via-ink to-ink-deep",
  corporate: "from-ink via-ink-deep to-hairline-dark",
  catering: "from-gold/70 via-ink to-ink-deep",
  socials: "from-ink-deep via-ink to-rust/60",
};

export default function GalleryTile({
  title,
  category,
  imageUrl,
  className = "",
}: {
  title?: string;
  category?: string;
  imageUrl?: string;
  className?: string;
}) {
  const gradient = CATEGORY_GRADIENT[category ?? ""] ?? "from-ink via-ink-deep to-hairline-dark";

  return (
    <div className={`group relative aspect-[4/5] overflow-hidden rounded-xl ${className}`}>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={title ?? "Eventiify event photo"}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className={`h-full w-full bg-gradient-to-br ${gradient}`}>
          <div className="h-full w-full bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_18px,rgba(247,242,230,0.05)_18px,rgba(247,242,230,0.05)_19px)]" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        {category && (
          <span className="font-utility text-[10px] uppercase tracking-[0.16em] text-gold">
            {CATEGORY_LABEL[category] ?? category}
          </span>
        )}
        {title && <p className="mt-1 font-display text-sm text-parchment">{title}</p>}
      </div>
    </div>
  );
}
