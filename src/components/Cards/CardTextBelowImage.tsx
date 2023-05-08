import React from 'react'

import JsonRte from '../Primitives/JsonRte'
import { Image , Link} from '@/components'

import { ImageCardItem } from '@/types/components'

const CardTextBelowImage: React.FC<ImageCardItem> = (props: ImageCardItem) => {
    const { $, image, title, link, description, count } = props

    return (<Link {...link}>
        <div className='group relative'>
            <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64 aspect-w-2 aspect-h-1 md:aspect-w-1 md:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1'>
                {image
            && <Image image={image} render={{ className: '', ariaHidden: 'true', width: count? 1152/count: 1152 ,  crop: '4:4,smart' }} />
                }
            </div>
            <div className='mt-6 text-sm text-gray-500'>
                {title
            && <h4 className='font-semibold'
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                {...$?.title}>
                {title}</h4>
                }
            </div>
            {description
          && <div className='text-base font-semibold text-gray-900'
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              {...$?.description}
          ><JsonRte body={description} /></div>
            }
        </div>
    </Link>
    )
}

export { CardTextBelowImage }