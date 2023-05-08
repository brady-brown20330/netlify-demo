import _ from 'lodash'

import { BackgroundColor, Teaser } from '@/types/components'

export const isTextValid = (obj: Teaser): boolean => {
    // console.log(obj.images, _.some(obj.images, 'image'))
    return !_.isEmpty(obj.heading)
}

export const referenceIncludes = [
    'ctas.internal_link'
]

export const jsonRtePaths = [
    'text'
]

export const defaultValues: Teaser = {
    // title: getMockTitle(),
    // paragraph: getMockShortParagraphs(1),
    // cta: {
    //   text: 'See more',
    //   link: [{
    //     url: '#'
    //   }]
    // },
    // text_position: TextPosition.below,
    // images: _.sampleSize(images, _.random(2, 4))
    backgroundColor: BackgroundColor.none,
    removeMargin: false
}

