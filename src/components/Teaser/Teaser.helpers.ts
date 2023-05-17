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

