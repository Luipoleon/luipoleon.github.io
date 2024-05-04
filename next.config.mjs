/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {};

nextConfig.sassOptions = {
  // Configure the route for sass files
  "includePaths": [path.join(new URL(import.meta.url).pathname, "public/styles")],
};

export default nextConfig;
