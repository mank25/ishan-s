"use client";

// Next.js remounts template.tsx on every navigation (unlike layout.tsx), so this
// animation replays each time the route changes — a quiet cross-fade + lift
// instead of a hard cut between pages.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-enter">{children}</div>;
}
