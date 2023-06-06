/* eslint-disable react/prop-types */
import { Component } from '@/types'
import { Image, Link } from '@/components'
import { classNames } from '@/utils'

export function TextAndImage (props:Component.TextAndImage) {
    const {$,heading, content ,image, image_alt_text,cta, styles: {image_position, theme}} = props

    const TextBlock = () => (
        <div className={`mx-auto max-w-2xl ${image_position === 'left' ? 'lg:ml:0 pr-4 lg:pr-8' : 'ml-4 md:ml-8' }`}>
            <>         
                {heading && <h1 className='xl:mt-0 mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:mt-0 sm:text-6xl dark:text-white'>
                    {heading}
                </h1>}
                {content && <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
                    {content}
                </p>}
                {cta?.[0]?.text && <div className='mt-10 flex items-center gap-x-6'>
                    <Link
                        url={cta?.[0]?.link}
                        className='btnPrimary px-6 py-2.5'
                    >
                        {cta[0].text}
                    </Link>
                </div>}
            </> 

        </div>
    )

    
    return (
        <div className={`${theme === 'dark' ? 'dark': ''}`}>
            <div className='relative py-16 px-8 mx-auto bg-[#F0F3F7] dark:bg-black'>
                {image_position && ['top', 'bottom'].includes(image_position) ? <div 
                    className={classNames(
                        `${image_position === 'top' ? 'flex-col-reverse' 
                            : image_position === 'bottom'?  'flex-col'
                            // : image_position === 'left'? 'flex-row-reverse'
                                : ''}`,
                        'flex container'
                    )}
                    {...$?.heading}
                >
                    <div className='max-w-7xl lg:mx-0'>
                        {heading && <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>{heading}</h2>}
                        {content && <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
                            {content}
                        </p>}
                        {cta?.[0]?.text && <div className='mt-6 flex items-center gap-x-6'>
                            <Link
                                url={cta?.[0]?.link}
                                className='btnPrimary px-6 py-2.5'
                            >
                                {cta[0].text}
                            </Link>
                        </div>}
                    </div>
                    <div className={`relative  overflow-hidden ${image_position === 'top' ? 'mb-8' : 'mt-8'}`}>
                        <div className='mx-auto'>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            {image?.url && <Image
                                image={image}
                                image_alt_text={image_alt_text}
                                className={'w-full object-cover aspect-[2] xl:aspect-[3/1] object-center bg-white/5 shadow-2xl ring-1 ring-white/10'}
                            />}
                        </div>
                    </div>
                </div>
                    : image_position && ['right', 'left'].includes(image_position) ? <div 
                        className={classNames(
                            `${image_position === 'right' ? 'flex-row-reverse' 
                                : image_position === 'left'?  'flex-row'
                                // : image_position === 'left'? 'flex-row-reverse'
                                    : ''}`,
                            'flex container'
                        )}
                        {...$?.heading}
                    >
                        <div className='max-w-7xl lg:mx-0'>
                            <TextBlock />
                        </div>
                        <div className={'relative flex-[0_0_50%]'}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            {image?.url && <Image
                                image={image}
                                image_alt_text={image_alt_text}
                                className={'w-full h-full xl:aspect-[6/3] aspect-[3/2] bg-white/5 shadow-2xl ring-1 ring-white/10 object-cover object-center'}
                            />}
                        </div>
                    </div> : <></>
            
                }

            </div>
        </div>
    )
}
  