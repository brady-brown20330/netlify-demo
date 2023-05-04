/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-us', 'fr-fr', 'nl-nl'],
    defaultLocale: 'en-us',
    localeDetection: false,
  },
  env: {
    GLOBAL_STACK_API_KEY: process.env.CONTENTSTACK_API_KEY
  }
}

module.exports = nextConfig
