/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        //domains: ['picsum.photos'],
      },
    ],
  },
  reactStrictMode: false,
}

export default nextConfig
