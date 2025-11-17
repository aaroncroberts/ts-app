/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    experimental: {
        mdxRs: true,
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        }
        return config
    },
}

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

module.exports = withMDX(nextConfig)