/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-us', 'fr-fr', 'nl-nl'],
    defaultLocale: 'en-us',
    localeDetection: false,
  },
  env: { // available at build time
    CONTENTSTACK_API_KEY: process.env.CONTENTSTACK_API_KEY,
    isLivePreviewEnabled: process.env.CONTENTSTACK_LIVE_PREVIEW === 'true',
    isEditButtonsEnabled: process.env.CONTENTSTACK_LIVE_EDIT_TAGS === 'true',
    LOCALSTORAGE_WEBCONFIG_KEY: process.env.LOCALSTORAGE_WEBCONFIG_KEY || 'webconfig',
    LOCALSTORAGE_WEBCONFIG_TTL: process.env.LOCALSTORAGE_WEBCONFIG_TTL || 86400 // 1 day in seconds
  }
}

module.exports = nextConfig
