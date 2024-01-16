import { Image } from '@/components'
import { ArticleCover } from '@/types/components'
import React from 'react'

const ArticleCover:React.FC<ArticleCover> = (props:ArticleCover) => {
    const {title, summary, cover_image, $} = props
    return( <div className={'px-8 pt-16 mb-8'}>
        <div
            className='container mx-auto'
            id='article-cover'
        >
            {title && <h1 data-id='h1-text' {...$?.title}>{title}</h1>}
            <div className={'relative overflow-hidden mt-6'}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {cover_image?.url && <Image
                    image={cover_image}
                    className={'w-full max-auto object-cover aspect-[2] md:aspect-[5/2] object-center bg-white/5 shadow-2xl ring-1 ring-white/10 dark:text-white'}
                />}
            </div>
            {summary && <p data-id='paragraph-text' className='mt-2 !text-lg leading-5 text-gray-600 dark:text-white' {...$?.summary}>
                {summary}
            </p>}
        </div>
       
    </div>)
}

export {ArticleCover}