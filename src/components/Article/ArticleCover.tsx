import { Image } from '@/components'
import { ArticleCover } from '@/types/components'
import React from 'react'

const ArticleCover:React.FC<ArticleCover> = (props:ArticleCover) => {
    const {title, summary, cover_image, $} = props
    return( <div className={'px-8 pt-16'}>
        <div
            className='container mx-auto'
        >
            {title && <h2 className='text-3xl font-bold tracking-tight sm:text-4xl' {...$?.title}>{title}</h2>}
            <div className={'relative overflow-hidden mt-6'}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {cover_image?.url && <Image
                    image={cover_image}
                    className={'w-full max-auto object-cover aspect-[2] md:aspect-[3/1] object-center bg-white/5 shadow-2xl ring-1 ring-white/10 dark:text-white'}
                />}
            </div>
            {summary && <p className='mt-6 text-lg leading-8 font-semibold text-gray-700 dark:text-white' {...$?.summary}>
                {summary}
            </p>}
        </div>
       
    </div>)
}

export {ArticleCover}