import type { NextConfig } from "next";

// When NEXT_PUBLIC_STATIC=1 we produce a fully static export for GitHub Pages.
// PAGES_BASE_PATH scopes the build to a subpath (e.g. /service-analytics/conceptB).
const isStatic = process.env.NEXT_PUBLIC_STATIC === "1";
const basePath = process.env.PAGES_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  // `pg` is a server-only dependency; keep it out of the client bundle.
  serverExternalPackages: ["pg"],
  ...(isStatic && {
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
    basePath,
  }),
};

export default nextConfig;
