import type { NextConfig } from "next";

// GitHub Pages serves this repo at https://<user>.github.io/ishan-s/,
// so the build needs a matching basePath/assetPrefix when run in CI.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "ishan-s";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
};

export default nextConfig;
