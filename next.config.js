/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
            },
        ],
    },
};

module.exports = nextConfig;
