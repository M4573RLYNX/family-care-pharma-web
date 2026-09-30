import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the root: parent folders (~/ and ~/projects) have their own
  // package.json and node_modules, which confuse Turbopack's module resolution.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
