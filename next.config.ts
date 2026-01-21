import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
