import _ from 'lodash'
// import { LoaderFunctionArgs, Params } from "react-router-dom";

// import {  teaserReferenceIncludes } from '@/components'
import {  prefixReferenceIncludes } from '@/utils'
import { getEntryByUrl } from '@/services'

// const newRefUids =prefixReferenceIncludes('components',
//     ...prefixReferenceIncludes('card_collection', ...imageCardsReferenceIncludes),
//     ...prefixReferenceIncludes('teaser', ...teaserReferenceIncludes)
// )

export const getHomepageEntry = (locale: string | undefined, cmsUrlPath: string | undefined, query: any) => {
    return getEntryByUrl('home_page',locale, '/', [], [], query)
    // return getEntryByUrl('home_page',locale, `/`, newRefUids, jsonRtePaths, query);

}