/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "gogocdn.net",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "s4.anilist.co",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
