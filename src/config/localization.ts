const fallbackLocaleName = 'en-us';
const fallbackLocaleCookieName = "locale";

const configuredLocale = () => {
    if (process.env.REACT_APP_DEFAULT_LOCALE) {
        try {
            return new Intl.Locale(process.env.REACT_APP_DEFAULT_LOCALE);
        } catch
        {
            console.warn("Error parsing configured locale, falling back to: ", fallbackLocaleName)
        }
    }
    return new Intl.Locale(fallbackLocaleName)
}

export const defaultLocale = configuredLocale();

export const defaultLocaleName = configuredLocale().baseName.toLocaleLowerCase();

export const localeCookieName = process.env.REACT_APP_LOCALE_COOKIE_NAME ? process.env.REACT_APP_LOCALE_COOKIE_NAME : fallbackLocaleCookieName;