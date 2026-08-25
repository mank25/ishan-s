import Link from "next/link";

export default function AnnounceBar() {
  return (
    <div className="rounded-t-[inherit] bg-ink-deep text-parchment">
      <Link
        href="/#newsletter"
        className="flex items-center justify-center gap-2 px-4 py-2.5 text-center text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold-bright sm:text-[0.72rem] sm:tracking-[0.26em]"
      >
        <span className="text-gold">✦</span>
        <span>
          Planning notes, seasonal menus &amp; venue finds —{" "}
          <span className="text-gold underline-offset-4 hover:underline">sign up</span>
        </span>
        <span className="text-gold">✦</span>
      </Link>
    </div>
  );
}
