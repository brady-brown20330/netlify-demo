/* eslint-disable react/prop-types */
import { Component } from '@/types'
import { Image, Link } from '@/components'
import { classNames, resolveCta } from '@/utils'

export function TextAndImage (props:Component.TextAndImage) {
    const {$, heading, content, image, image_alt_text, cta, styles: {image_position, theme}} = props

    const ctaLink = resolveCta(cta)
    const TextBlock = () => (
        <div 
            className={classNames(
                image_position === 'right' ? 'lg:ml:0 pr-4 lg:pr-8' : 'xs:ml-4 md:ml-8',
                'mx-auto my-auto w-2xl'
            )}
        >
            {heading && <h2
                className='xs:text-3xl sm:text-[44px] xl:mt-0 mt-4 text-gray-900 sm:mt-0'>
                {heading}
            </h2>}
            {content && <p
                className='mt-4 text-lg leading-5 text-gray-600 dark:text-white'>
                {content}
            </p>}
            <div
                className={classNames(
                    image_position === 'right' && cta?.[0]?.text ? 'my-8 xs:mt-8 xs:mb-0' : 'mt-8',
                    'flex items-center gap-x-6'
                )}
            >
                {cta?.[0]?.text && ctaLink && <Link
                    url={ctaLink}
                    className='btnPrimary px-6 py-2.5'
                >
                    {cta[0].text}
                </Link>}
            </div>

        </div>
    )

    return (
        <div className={`${theme === 'dark' ? 'dark': ''}`}>
            <div className='relative py-16 px-8 mx-auto bg-white dark:bg-black'>
                {image_position && ['top', 'bottom'].includes(image_position) ? <div 
                    className={classNames(
                        `${image_position === 'top' ? 'flex-col-reverse' 
                            : image_position === 'bottom'?  'flex-col'
                                : ''}`,
                        'flex container'
                    )}
                    {...$?.heading}
                >
                    <div className='max-w-7xl lg:mx-0'>
                        {heading && <h2>{heading}</h2>}
                        {content && <p className='mt-6 text-lg leading-5 text-gray-600'>
                            {content}
                        </p>}
                        {cta?.[0]?.text && ctaLink && <div className='mt-6 flex items-center gap-x-6'>
                            <Link
                                url={ctaLink}
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
                                className={'w-full object-cover aspect-[2] md:aspect-[3/1] object-center bg-white/5 shadow-2xl ring-1 ring-white/10 dark:text-white'}
                            />}
                        </div>
                    </div>
                </div>
                    : image_position && ['right', 'left'].includes(image_position) ? <div 
                        className={classNames(
                            `${image_position === 'right' ? 'xs:flex-row flex-col' 
                                : image_position === 'left'?  'xs:flex-row-reverse flex-col-reverse'
                                    : ''}`,
                            'flex container'
                        )}
                        {...$?.heading}
                    >
                        <div className='w-full xs:w-[50%] max-w-7xl'>
                            <TextBlock />
                        </div>
                        <div className={'relative flex-[0_0_50%]'}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            {image?.url && <Image
                                image={image}
                                image_alt_text={image_alt_text}
                                className={'w-full h-full xl:aspect-[6/3] aspect-[3/2] bg-white/5 shadow-2xl ring-1 ring-white/10 object-cover object-center dark:text-white'}
                            />}
                        </div>
                    </div> : <></>
            
                }

            </div>
        </div>
    )
}
  