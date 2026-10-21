import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export: `next build` writes plain HTML/CSS/JS to ./out for
  // shared hosting (Hostinger public_html). Vercel serves it fine too.
  output: "export",
};

export default nextConfig;
