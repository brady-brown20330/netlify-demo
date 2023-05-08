/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-us', 'fr-fr', 'nl-nl'],
    defaultLocale: 'en-us',
    localeDetection: false,
  },
  publicRuntimeConfig: {
    
    CONTENTSTACK_API_KEY: process.env.CONTENTSTACK_API_KEY,
    CONTENTSTACK_DELIVERY_TOKEN: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_MANAGEMENT_TOKEN: process.env.CONTENTSTACK_MANAGEMENT_TOKEN,
    CONTENTSTACK_ENVIRONMENT: process.env.CONTENTSTACK_ENVIRONMENT,
    CONTENTSTACK_REGION: process.env.CONTENTSTACK_REGION || 'NA',
    CONTENTSTACK_CDN_HOST: process.env.CONTENTSTACK_REGION === 'EU' ? 'eu-cdn.contentstack.com': 'cdn.contentstack.io',
    CONTENTSTACK_API_HOST: process.env.CONTENTSTACK_REGION === 'EU' ? 'eu-api.contentstack.com': 'api.contentstack.io',

    isLivePreviewEnabled: process.env.CONTENTSTACK_LIVE_PREVIEW === 'true',
    isEditButtonsEnabled: process.env.CONTENTSTACK_LIVE_EDIT_TAGS === 'true',

    DEFAULT_LOCALE: process.env.DEFAULT_LOCALE,
    LOCALE_COOKIE_NAME: process.env.LOCALE_COOKIE_NAME,

    LOCALSTORAGE_WEBCONFIG_KEY: process.env.LOCALSTORAGE_WEBCONFIG_KEY || 'webconfig',
    LOCALSTORAGE_WEBCONFIG_TTL: process.env.LOCALSTORAGE_WEBCONFIG_TTL || 86400 // 1 day in seconds

  }
}

module.exports = nextConfig
