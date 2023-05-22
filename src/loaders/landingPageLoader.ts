import _ from 'lodash'
// import { LoaderFunctionArgs, Params } from "react-router-dom";

import { teaserReferenceIncludes, heroReferenceIncludes } from '@/components'
import {  prefixReferenceIncludes } from '@/utils'
import { getEntryByUrl } from '@/services'

const newRefUids = prefixReferenceIncludes('components',
    ...prefixReferenceIncludes('hero', ...heroReferenceIncludes),
    ...prefixReferenceIncludes('teaser', ...teaserReferenceIncludes)
)

export const getLandingPageEntry = (locale: string | undefined, cmsUrlPath: string | undefined, query: any) => {
    return getEntryByUrl('landing_page',locale, `${cmsUrlPath}`, newRefUids, [], query)
}