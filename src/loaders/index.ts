import { teaserReferenceIncludes, textAndImageReferenceIncludes, imageCardsReferenceIncludes, includeheaderRefUids, textJSONRtePaths } from '@/components'
import {  prefixReferenceIncludes } from '@/utils'
import { getEntries, getEntryByUID, getEntryByUrl } from '@/services'

export const getHomePage = ( cmsUrlPath: string | undefined, locale: string | undefined) => {
    return getEntryByUrl('home_page',locale, '/', [], [])
}

export const getLandingPage = (cmsUrlPath: string | undefined, locale: string | undefined) => {
    const newRefUids = prefixReferenceIncludes('components',
        ...prefixReferenceIncludes('text_and_image', ...textAndImageReferenceIncludes),
        ...prefixReferenceIncludes('teaser', ...teaserReferenceIncludes)
        // ...prefixReferenceIncludes('card_collection', ...imageCardsReferenceIncludes)
    )
    const jsonRtePaths = prefixReferenceIncludes('components', ...textJSONRtePaths)
    return getEntryByUrl('landing_page',locale, `${cmsUrlPath}`, newRefUids, jsonRtePaths)  
}

export const getPaths = async (contentType:string, locale:string) => {
    let entries = await getEntries(contentType, locale, [], [])
    entries = entries !== null ? entries : []
    const paths: { params: { slug:string[] } }[] = []
    entries?.forEach((entry : {url:string}) => {
        paths.push({ params: { slug: [entry.url.toString()] } })
    })
    return paths
}

export const getAppConfigData = async (locale:string|undefined) => {

    const webConf=await getEntries('web_configuration', locale, [], [])
    if (!webConf || webConf === null) {
        return null
    }
    
    if(webConf?.[0]?.main_navigation?.[0]?.uid && webConf?.[0]?.main_navigation?.[0]?._content_type_uid) {
        const navData = await getEntryByUID(
            webConf?.[0]?.main_navigation?.[0]?._content_type_uid,
            locale,
            webConf?.[0]?.main_navigation?.[0]?.uid,
            includeheaderRefUids,
            []
        )
        webConf[0].main_navigation[0] = navData
        return webConf
    }
    
}
// export const getHeader = (locale: string | undefined) => {
//     return getEntries('header', locale, [], []) 
// }
// export const getNavigation = (locale: string | undefined) => {
//     return getEntries('navigation', locale, [], []) 
// }
// export const getFooter = (locale: string | undefined) => {
//     return getEntries('footer', locale, [], []) 
// }