import { Component } from '@/types'

export function ImageAndText ({$,heading, paragraph ,image, image_alt_text, image_position }:Component.ImageAndText) {
    console.log('------------', image)
    return (
        <div className='relative py-16 px-8 mx-auto bg-[#F0F3F7] dark:bg-black'>
            <div 
                className={`flex container ${image_position === 'Top' ? 'flex-col-reverse' : 'flex-col'}`}
                {...$?.heading}
            >
                <div className='max-w-5xl lg:mx-0'>
                    {heading && <h2 className='text-3xl font-bold tracking-tight dark:text-white sm:text-4xl'>{heading}</h2>}
                    {paragraph && <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
                        {paragraph}
                    </p>}
                </div>
                <div className={`relative overflow-hidden ${image_position === 'Top' ? 'mb-8' : 'mt-8'}`}>
                    <div className='mx-auto'>
                        {image?.asset?.url && <img
                            src={image.asset.url}
                            alt='App screenshot'
                            className='h-[200px] w-full bg-white/5 shadow-2xl ring-1 ring-white/10'
                        />}
                    </div>
                </div>
            </div>
        </div>
    )
}
  