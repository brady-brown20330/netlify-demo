import React from 'react'

import JsonRte from '../Primitives/JsonRte'
import { Link, Image } from '@/components'


import { ImageCardItem } from '@/types/components'

const CardTextOverImage: React.FC<ImageCardItem> = (props: ImageCardItem) => {
    const { $, title, link, image, description, count } = props
  
    return (<Link {...link}>
        <div className='group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2'>
            {/* {image
        && <Image image={image} render={{ className: '', ariaHidden: 'true', width: count? 1152/count: 1152 ,  crop: '4:4,smart' }} />
            } */}
            <div aria-hidden='true' className='bg-gradient-to-b from-transparent to-black opacity-50' />
            <div className='flex items-end p-6'>
                <div>
                    <h3 className='font-semibold text-white'
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        {...$?.title}
                    >
                        {/* <span className="absolute inset-0" /> */}
                        {title}
                    </h3>
                    <div aria-hidden='true' className='mt-1 text-sm text-white'
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        {...$?.description}>
                        {description && <div className=''><JsonRte body={description} /></div>}
                    </div>
                </div>
            </div>
        </div>
    </Link>
    )
}

export { CardTextOverImage }