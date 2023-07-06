const { i18n } = require('./next-i18next.config');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/chatgpt';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  basePath,
  reactStrictMode: true,

  async rewrites() {
    const locales = [
      "bn",
      "de",
      "en",
      "es",
      "fr",
      "he",
      "id",
      "it",
      "ja",
      "ko",
      "pl",
      "pt",
      "ru",
      "ro",
      "sv",
      "te",
      "vi",
      "zh",
      "ar",
      "tr",
      "ca",
      "fi",
    ].join('|');
  
    return {
      fallback: [
        {
          source: `/:locale(${locales})/:path*`,
          destination: '/:locale/:path*',
        },
        {
          source: '/:path*',
          destination: `/${i18n.defaultLocale}/:path*`,
        },
      ],
    };
  },

  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
};

module.exports = nextConfig;