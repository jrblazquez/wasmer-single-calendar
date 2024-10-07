/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: "./",
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
