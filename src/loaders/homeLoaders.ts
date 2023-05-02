import _ from "lodash";
// import { LoaderFunctionArgs, Params } from "react-router-dom";

import { imageCardsReferenceIncludes, imageCardsJsonRtePaths, teaserRtePaths, teaserReferenceIncludes } from '@/components';
import {  prefixReferenceIncludes } from '@/utils';
import { getEntryByUrl } from '@/services';

const newRefUids =
    prefixReferenceIncludes('content_blocks',
        ...prefixReferenceIncludes('card_collection', ...imageCardsReferenceIncludes),
        ...prefixReferenceIncludes('teaser', ...teaserReferenceIncludes)
    );

const jsonRtePaths = prefixReferenceIncludes('content_blocks',
    ...prefixReferenceIncludes('card_collection', ...imageCardsJsonRtePaths),
    ...prefixReferenceIncludes('teaser', ...teaserRtePaths)
);

export const getHomepageEntry = (locale: string | undefined, cmsUrlPath: string | undefined, query: any) => {
    return getEntryByUrl('home_page',locale, `/`, [], [], query);
    // return getEntryByUrl('home_page',locale, `/`, newRefUids, jsonRtePaths, query);

}