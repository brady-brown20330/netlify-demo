import _ from 'lodash'
// import { LoaderFunctionArgs, Params } from "react-router-dom";

import { imageCardsReferenceIncludes, imageCardsJsonRtePaths, teaserRtePaths, teaserReferenceIncludes, heroReferenceIncludes } from '@/components'
import {  prefixReferenceIncludes } from '@/utils'
import { getEntryByUrl } from '@/services'

const newRefUids =prefixReferenceIncludes('components',
    ...prefixReferenceIncludes('hero', ...heroReferenceIncludes)
)

// const jsonRtePaths = prefixReferenceIncludes('content_blocks',
//     ...prefixReferenceIncludes('card_collection', ...imageCardsJsonRtePaths),
//     ...prefixReferenceIncludes('teaser', ...teaserRtePaths)
// )

export const getLandingPageEntry = (locale: string | undefined, cmsUrlPath: string | undefined, query: any) => {
    return getEntryByUrl('landing_page',locale, `${cmsUrlPath}`, ['components.hero.cta.landing_page'], [], query)
}