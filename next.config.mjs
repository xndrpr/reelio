/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**"
      }
    ]
  },
  staticPageGenerationTimeout: 60 * 10,
};

export default nextConfig;
