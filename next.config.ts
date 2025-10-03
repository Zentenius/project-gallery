import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  // Add these for better compatibility
  trailingSlash: true,
  basePath: "",
  // Use absolute URLs for assets in production to fix Unreal web widget issues
  assetPrefix: process.env.NODE_ENV === "production" 
    ? "https://project-gallery-rho.vercel.app" 
    : "",
  // Disable newer JS features that might not work in old Chromium
  compiler: {
    // Remove unused imports
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Ensure compatibility with older browsers
  experimental: {
    esmExternals: false,
  },
  // Optimize for static export
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
