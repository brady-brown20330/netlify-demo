import _ from "lodash";

import { localeCookieName } from '../config';
import { getCookie, setCookie } from "./browserStorage";

export const setLocaleCookie = (locale: string) => {
    // sets a locale cookie valid for 30 days
    setCookie(localeCookieName, locale, 30)
}
export const getLocaleCookie = () => {
    // sets a locale cookie valid for 30 days
    return getCookie(localeCookieName)
}

export const getPreferedBrowserLang = () => {
    if (navigator.languages != undefined) {
        return navigator.languages[0];
    }
    return navigator.language;
}

export const getPreferedBrowserRegions = () => {
    if (navigator.languages != undefined) {
        const preferedRegions: string[] = _.reduce(navigator.languages, function (regions: string[], lang: string) {
            try {
                const l = new Intl.Locale(lang);
                if (l.region) {
                    regions.push(l.region.toLocaleLowerCase());
                }
            } catch { }
            return regions;
        }, []);
        return preferedRegions;
    }
}
