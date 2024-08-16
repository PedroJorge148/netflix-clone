/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'occ-0-3851-3852.1.nflxso.net',
      }
    ]
  }
};

export default nextConfig;
