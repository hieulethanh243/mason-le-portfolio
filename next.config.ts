/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "developer.mozilla.org",
      },
      {
        protocol: "https",
        hostname: "xyz.supabase.co",
      },
    ],
  },
};

export default nextConfig;
