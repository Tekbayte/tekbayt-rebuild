/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/tekbayt-rebuild" : "",
  distDir: "dist",
};

export default nextConfig;
