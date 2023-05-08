import _ from 'lodash'
import { getMockTitle, getMockShortParagraphs, getSampleImage } from '@/utils'

import {  ImageCardItem, TextPosition } from '@/types/components'

export const getCardDefaultValues = () => {
    return {
        image: {
            title: getMockTitle(),
            url: getSampleImage()
        },
        title: getMockTitle(),
        description: getMockShortParagraphs(1),
        link: {
            internal_link: [{
                url: '#',
                title: getMockTitle(),
                locale: ''
            }],
            url: '#'
        },
        textPosition: TextPosition.below
    }
}

export const defaultValues: ImageCardItem = getCardDefaultValues()

