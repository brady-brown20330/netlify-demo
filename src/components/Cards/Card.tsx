import _ from 'lodash'

import { CardTextBelowImage } from './CardTextBelowImage'
import { CardTextOverImage } from './CardTextOverImage'

import { ImageCardItem as ImageCardItemProps, TextPosition } from '@/types/components'

const Card: React.FC<ImageCardItemProps> = (props: ImageCardItemProps) => {
    const { textPosition } = props
    return (<>
        {textPosition === TextPosition.below
            ? <CardTextBelowImage {...props} />
            :          <CardTextOverImage {...props} />
        }
    </>
    )
}

export { Card }