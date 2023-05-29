import { teaserReferenceIncludes, heroReferenceIncludes, imageCardsReferenceIncludes } from '@/components'
import {  prefixReferenceIncludes } from '@/utils'
import { getEntryByUrl } from '@/services'

export const getHomePage = ( cmsUrlPath: string | undefined, locale: string | undefined) => {
    return getEntryByUrl('home_page',locale, '/', [], [])
}

export const getLandingPage = (cmsUrlPath: string | undefined, locale: string | undefined) => {
    const newRefUids = prefixReferenceIncludes('components',
        ...prefixReferenceIncludes('hero', ...heroReferenceIncludes),
        ...prefixReferenceIncludes('teaser', ...teaserReferenceIncludes),
        ...prefixReferenceIncludes('card_collection', ...imageCardsReferenceIncludes)
    ) 
    return getEntryByUrl('landing_page',locale, `${cmsUrlPath}`, newRefUids, [])  
}
