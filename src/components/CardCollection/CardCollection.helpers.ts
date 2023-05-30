import _ from 'lodash'

import { CardCollection } from '@/types/components'

// export const validationInfo = ['Include at least 1 Image card']

export const isHeaderValid = (obj: CardCollection): boolean => {
    return !_.isEmpty(obj?.heading)
}

export const isCardsValid = (obj: CardCollection): boolean => {
    return !((_.isEmpty(obj.card) || !_.some(obj.card, 'image')))
}

export const imageCardsReferenceIncludes = [
    'card.cta.link'
]