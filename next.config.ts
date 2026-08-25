import type { NextConfig } from "next";

// GitHub Pages serves this repo at https://<user>.github.io/ishan-s/,
// so the build needs a matching basePath/assetPrefix when run in CI.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "ishan-s";

const nextConfig: NextConfig = {
  output: "export",
  // Emit every route as `<route>/index.html`. Without this the export writes
  // `contact.html`, which GitHub Pages serves at /contact but 404s at /contact/.
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      // Stock placeholder photography — see src/lib/media.ts
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
};

export default nextConfig;
