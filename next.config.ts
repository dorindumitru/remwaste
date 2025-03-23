import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  serverRuntimeConfig: {
    wewantwaste: {
      apiEndpoint: process.env.BACKEND_URL,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
