import { teaserReferenceIncludes, heroReferenceIncludes, imageCardsReferenceIncludes, includeheaderRefUids, textJSONRtePaths } from '@/components'
import {  prefixReferenceIncludes } from '@/utils'
import { getEntries, getEntryByUrl } from '@/services'

export const getHomePage = ( cmsUrlPath: string | undefined, locale: string | undefined) => {
    return getEntryByUrl('home_page',locale, '/', [], [])
}

export const getLandingPage = (cmsUrlPath: string | undefined, locale: string | undefined) => {
    const newRefUids = prefixReferenceIncludes('components',
        ...prefixReferenceIncludes('hero', ...heroReferenceIncludes),
        ...prefixReferenceIncludes('teaser', ...teaserReferenceIncludes),
        ...prefixReferenceIncludes('card_collection', ...imageCardsReferenceIncludes)
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

export const getAppConfigData = (locale:string|undefined) => {
    const refUids = prefixReferenceIncludes('main_navigation', ...includeheaderRefUids)
    return getEntries('web_configuration', locale, refUids, [])
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