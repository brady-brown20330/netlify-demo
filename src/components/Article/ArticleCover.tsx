import { Image } from '@/components'
import { ArticleCover } from '@/types/components'
import React from 'react'

const ArticleCover:React.FC<ArticleCover> = (props:ArticleCover) => {
    const {title, summary, cover_image, $} = props
    return( <div className={'px-8 pt-16 mb-8'}>
        <div
            className='container mx-auto'
        >
            {title && <h1 {...$?.title}>{title}</h1>}
            <div className={'relative overflow-hidden mt-6'}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {cover_image?.url && <Image
                    image={cover_image}
                    className={'w-full max-auto object-cover aspect-[2] md:aspect-[5/2] object-center bg-white/5 shadow-2xl ring-1 ring-white/10 dark:text-white'}
                />}
            </div>
            {summary && <p className='mt-1 text-lg leading-8 text-gray-600 text-justify dark:text-white' {...$?.summary}>
                {summary}
            </p>}
        </div>
       
    </div>)
}

export {ArticleCover}