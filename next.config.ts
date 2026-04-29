import type { NextConfig } from "next";

// Static export for Cloudflare Pages (mirrors sentineloc-site config).
// See sentineloc-site/next.config.ts for the rationale on each option.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
