import React from 'react'
import { Image, Link } from '@/components'
import { ImageCardItem } from '@/types/components'
import { resolveCtaLink, resolveCtaText } from './Card.helper'
import { classNames } from '@/utils'

const Card: React.FC<ImageCardItem> = (props: ImageCardItem) => {
    const { $, image, image_alt_text, title, cta, content, count } = props
    
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    const cardImage = image ? <Image
        image={image}
        image_alt_text={image_alt_text}
        className={classNames(
            count === 1 ? 'h-auto w-auto'
                :count === 2 ? 'h-48 lg:h-64' 
                    :count === 3 ? 'h-48 lg:h-52'
                        : count && count >= 4 ? 'h-48 lg:h-40'
                            : '',
            'w-full object-center object-fit object-cover hover:opacity-90 hover:cursor-pointer'
        )}
    /> : <></>

    return (
        <div
            className='group h-full relative flex flex-col justify-between'
            {...$?.title}
        >
            <div className='flex flex-col'>
                {cta ? <Link
                    url={resolveCtaLink(cta)}
                >
                    {cardImage}
                </Link> : <>
                    {cardImage}
                </>}

                <div className='mt-6 text-xl text-gray-500 dark:text-white'>
                    {title && <h4 className='font-bold card-title'
                    >
                        {title}
                    </h4>
                    }
                </div>
                {content && <p className='mt-2 text-base leading-8 text-gray-600 dark:text-white card-content'
                >
                    {content}
                </p>
                }
            </div>
            <div>
                {cta && <p className='mt-3 text-base font-semibold !text-purple'>
                    <Link
                        url={resolveCtaLink(cta)}
                        className='!text-purple hover:border-b-2  hover:border-purple cursor-pointer'
                    >
                        {resolveCtaText(cta)}
                    </Link> &rarr;
                </p>
                }
            </div>
        </div>
    )
}

export { Card }