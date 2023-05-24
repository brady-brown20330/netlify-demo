import { Component } from '@/types'
import { Image } from '../Image/Image'

export function ImageAndText ({$,heading, content ,image, image_alt_text, image_position, image_height }:Component.ImageAndText) {
    return (
        <div className='relative py-16 px-8 mx-auto bg-[#F0F3F7] dark:bg-black'>
            <div 
                className={`flex container ${image_position === 'Top' ? 'flex-col-reverse' : 'flex-col'}`}
                {...$?.heading}
            >
                <div className='max-w-5xl lg:mx-0'>
                    {heading && <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>{heading}</h2>}
                    {content && <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
                        {content}
                    </p>}
                </div>
                <div className={`relative overflow-hidden ${image_position === 'Top' ? 'mb-8' : 'mt-8'}`}>
                    <div className='mx-auto'>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        {image?.asset?.url && <Image
                            image={image}
                            image_alt_text={image_alt_text}
                            className={`${image_height === 'Fixed'? 'h-[175px]': '' } w-full bg-white/5 shadow-2xl ring-1 ring-white/10`}
                        />}
                    </div>
                </div>
            </div>
        </div>
    )
}
  