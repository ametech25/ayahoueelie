/** @type {import('next').NextConfig} */
// basePath uniquement au build (GitHub Pages), pas en `npm run dev`
const isPagesBuild = process.env.npm_lifecycle_event === "build";
const basePath = isPagesBuild ? "/ayahoueelie" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: isPagesBuild ? "/ayahoueelie/" : undefined,
  trailingSlash: isPagesBuild,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
