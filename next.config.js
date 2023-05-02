/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-us', 'fr-fr', 'nl-nl'],
    defaultLocale: 'en-us',
    localeDetection: false,
  },
}

module.exports = nextConfig
