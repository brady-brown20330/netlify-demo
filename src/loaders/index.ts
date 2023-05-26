import { teaserReferenceIncludes, heroReferenceIncludes, imageCardsReferenceIncludes } from '@/components'
import {  prefixReferenceIncludes } from '@/utils'
import { getEntryByUrl } from '@/services'

export const getHomePage = (locale: string | undefined, cmsUrlPath: string | undefined, query: any) => {
    return getEntryByUrl('home_page',locale, '/', [], [], query)
}

export const getLandingPage = (locale: string | undefined, cmsUrlPath: string | undefined, query: any) => {
    const newRefUids = prefixReferenceIncludes('components',
        ...prefixReferenceIncludes('hero', ...heroReferenceIncludes),
        ...prefixReferenceIncludes('teaser', ...teaserReferenceIncludes),
        ...prefixReferenceIncludes('card_collection', ...imageCardsReferenceIncludes)
    ) 
    return getEntryByUrl('landing_page',locale, `${cmsUrlPath}`, newRefUids, [], query)  
}
