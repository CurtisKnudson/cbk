/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Basic `path-to-regexp` usage
      // Query object shape: { id: string }
      { source: "/user/:id", destination: "/user_profile" },

      // Optional Language
      // Query object shape: { lang?: string }
      { source: "/:lang(en|es)?/about", destination: "/about" },

      // Advanced rewrite
      // Query object shape: { id: string } (in addition to dynamic route param)
      { source: "/u/:id", destination: "/user/:id" },
      { source: "/api/", destination: "/user/:id" },
    ];
  },
};

module.exports = nextConfig;
