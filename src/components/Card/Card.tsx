import React from 'react'
import { Image, Link } from '@/components'
import { ImageCardItem } from '@/types/components'
import { resolveCardCta, resolveCtaText } from './Card.helper'
import { classNames } from '@/utils'

// ? TSOND-153 | Revamp code for demo purpose
import { useRouter } from 'next/router'

const Card: React.FC<ImageCardItem> = (props: ImageCardItem) => {
    const { $, image, image_alt_text, title, cta, content, count, totalCount } = props
    
    // ? TSOND-153 | Revamp code for demo purpose
    const router = useRouter()

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

    // ? TSOND-174 | Revamp code for demo purpose
    return (
        <div
            className={`group h-full relative flex flex-col justify-between ${totalCount && totalCount  > 1 && router?.pathname === '/articles/revamp' ? 'card-styled' : ''}`}
            {...$?.title}
        >
            <div className='flex flex-col'>
                {cta ? <Link
                    url={resolveCardCta(cta)}
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
                {content && <p className='mt-2 text-base leading-5 text-gray-600 dark:text-white card-content'
                >
                    {content}
                </p>
                }
            </div>
            <div>
                {cta && <p className='mt-3 text-base font-semibold !text-purple'>
                    <Link
                        url={resolveCardCta(cta)}
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