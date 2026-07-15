/** @type {import('next').NextConfig} */

// NOTE: with `output: "export"` (static hosting on Hostinger), Next cannot set
// HTTP response headers — those are configured at the host level. See
// `public/.htaccess` for the security headers + caching applied by Apache.

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // required for static export
  },
  output: "export",
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      }
    );
    return config;
  },
};

export default nextConfig;
