import getConfig from "next/config";
const fallbackLocaleName = 'en-us';
const fallbackLocaleCookieName = "locale";

const {
    DEFAULT_LOCALE,
    LOCALE_COOKIE_NAME
 } = getConfig().publicRuntimeConfig

const configuredLocale = () => {
    if (DEFAULT_LOCALE) {
        try {
            return new Intl.Locale(DEFAULT_LOCALE);
        } catch
        {
            console.warn("Error parsing configured locale, falling back to: ", fallbackLocaleName)
        }
    }
    return new Intl.Locale(fallbackLocaleName)
}

export const defaultLocale = configuredLocale();

export const defaultLocaleName = configuredLocale().baseName.toLocaleLowerCase();

export const localeCookieName = LOCALE_COOKIE_NAME ? LOCALE_COOKIE_NAME : fallbackLocaleCookieName;