/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['avatar.iran.liara.run','images.pexels.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatar.iran.liara.run',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
