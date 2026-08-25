export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  // An unset GitHub Actions secret arrives as "" rather than undefined, so an
  // empty or blank value has to count as missing too — otherwise createClient
  // gets projectId: "" and throws during the static export.
  if (v === undefined || v === null || (typeof v === "string" && v.trim() === "")) {
    // Falls back to a placeholder so the app still boots (with CMS-backed
    // sections rendering their fallback content) before real Sanity
    // credentials are configured in the environment.
    console.warn(errorMessage);
    return "placeholder" as unknown as T;
  }
  return v;
}
