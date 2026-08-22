"use client";

import { useState } from "react";
import GalleryTile from "./GalleryTile";

type Item = { _id: string; title?: string; category?: string; imageUrl?: string };

const FILTERS = [
  { value: "all", label: "All" },
  { value: "weddings", label: "Weddings" },
  { value: "corporate", label: "Corporate" },
  { value: "catering", label: "Catering & Décor" },
  { value: "socials", label: "Birthdays & Socials" },
];

export default function GalleryGrid({ items }: { items: Item[] }) {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? items : items.filter((i) => i.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`rounded-full border px-4 py-2 font-utility text-[11px] uppercase tracking-[0.15em] transition-colors ${
              filter === f.value
                ? "border-ink bg-ink text-parchment"
                : "border-hairline text-charcoal/70 hover:border-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((item) => (
          <GalleryTile
            key={item._id}
            title={item.title}
            category={item.category}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 font-body text-sm text-charcoal/60">
          No photos in this category yet.
        </p>
      )}
    </div>
  );
}
