/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "statichdrezka.ac",
        port: "",
        pathname: "/i/**"
      }
    ]
  }
};

export default nextConfig;
