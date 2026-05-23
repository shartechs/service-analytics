import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `pg` is a server-only dependency; keep it out of the client bundle.
  serverExternalPackages: ["pg"],
};

export default nextConfig;
