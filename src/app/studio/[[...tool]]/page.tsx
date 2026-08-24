import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

// Sanity Studio handles its own client-side routing once loaded, so a
// static export only needs to pre-render the root /studio entry point.
export function generateStaticParams() {
  return [{ tool: [] }];
}

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
