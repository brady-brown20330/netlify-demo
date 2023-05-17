import _ from 'lodash'

import { BackgroundColor, Teaser } from '@/types/components'

export const isTextValid = (obj: Teaser): boolean => {
    return !_.isEmpty(obj.heading)
}

export const referenceIncludes = [
    'ctas.internal_link'
]

export const jsonRtePaths = [
    'text'
]

