import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.bitrix24.ru',
                port: '', // Leave empty if no specific port is used
                pathname: '/**', // Allows any path on this hostname
            },
        ],
    },
};

export default nextConfig;
