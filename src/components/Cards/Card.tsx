import React from 'react'

import JsonRte from '../Primitives/JsonRte'
import { Image , Link} from '@/components'

import { ImageCardItem } from '@/types/components'

const Card: React.FC<ImageCardItem> = (props: ImageCardItem) => {
    const { $, image, title, link, content, count } = props

    return (<Link {...link}>
        <div className='group relative'>
            <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64 aspect-w-2 aspect-h-1 md:aspect-w-1 md:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1'>
                {/* {image
            && <Image image={image} render={{ className: '', ariaHidden: 'true', width: count? 1152/count: 1152 ,  crop: '4:4,smart' }} />
                } */}
            </div>
            <div className='mt-6 text-sm text-gray-500'>
                {title
            && <h4 className='font-semibold'
                {...$?.title}>
                {title}</h4>
                }
            </div>
            {content && <div className='text-base font-semibold text-gray-900'
                {...$?.content}
            >
                {content}
            </div>
            }
        </div>
    </Link>
    )
}

export { Card }