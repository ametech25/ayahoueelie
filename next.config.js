/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/ayahoueelie' : '',
  assetPrefix: isProd ? '/ayahoueelie/' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/ayahoueelie' : '',
  },
};

module.exports = nextConfig;
