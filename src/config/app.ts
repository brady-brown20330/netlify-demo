import getConfig from "next/config"

const {
    LOCALSTORAGE_WEBCONFIG_KEY,
    LOCALSTORAGE_WEBCONFIG_TTL
} = getConfig().publicRuntimeConfig

export const localStorageConfig ={
    webConfiguration : {
        key: LOCALSTORAGE_WEBCONFIG_KEY,
        ttl: LOCALSTORAGE_WEBCONFIG_TTL
    }
}