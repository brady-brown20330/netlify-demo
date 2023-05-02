
export const localStorageConfig ={
    webConfiguration : {
        key: process.env.REACT_APP_LOCALSTORAGE_WEBCONFIG_KEY ? process.env.REACT_APP_LOCALSTORAGE_WEBCONFIG_KEY : 'webconfig',
        ttl: process.env.REACT_APP_LOCALSTORAGE_WEBCONFIG_TTL ? process.env.REACT_APP_LOCALSTORAGE_WEBCONFIG_TTL : 86400 // 1 day in seconds
    }
}