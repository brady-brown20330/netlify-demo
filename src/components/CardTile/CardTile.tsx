import React from 'react'
import { Image, Link } from '@/components'
import { ImageCardItem } from '@/types/components'
import { resolveCardCta } from './CardTile.helper'
import { classNames } from '@/utils'
import styles from './cardTile.module.css'

// ? TSOND-153 | Revamp code for demo purpose
import { useRouter } from 'next/router'
import { isString } from 'lodash'

const CardTile: React.FC<ImageCardItem> = (props: ImageCardItem) => {
    const { $, image, image_alt_text, title, subtitle, cta, content, count, totalCount, id, key } = props

    // ? TSOND-153 | Revamp code for demo purpose
    const router = useRouter()

    {/* eslint-disable-next-line jsx-a11y/alt-text */ }
    const cardImage = image ? <Image
        image={image}
        image_alt_text={image_alt_text}
        className={classNames(
            count === 1 ? 'h-auto w-auto'
                : count === 2 ? 'h-48 lg:h-64'
                    : count === 3 ? 'h-48 lg:h-52'
                        : count && count >= 4 ? 'h-48 lg:h-52'
                            : '',
            'w-full object-center object-fit object-cover hover:opacity-90 hover:cursor-pointer rounded'
        )}
    /> : <></>

    // ? TSOND-174 | Revamp code for demo purpose
    return (
        <div
            id={`card-tile-${id}-${key}`}
            className={`group h-full relative flex flex-col justify-between ${styles.card} ${totalCount && totalCount > 1 && router?.pathname === '/articles/revamp' ? 'card-styled' : ''}`}
            {...$?.title}
        >
            <div className='flex flex-col'>
                <div className='text-xl text-gray-500 dark:text-white text-center'>
                    {title
                        && <h4
                            data-id='h4-text'
                            className='text-4xl font-montserrat font-semibold text-black'>
                            {title}
                        </h4>
                    }
                </div>

                <div className=' mt-4 text-center'>
                    <span
                        data-id='span-text'
                        className='text-2xl font-montserrat text-black font-normal'>
                        {subtitle ? subtitle : '\xa0'}
                    </span>
                </div>

                {cta ? <Link
                    url={resolveCardCta(cta)}
                    className='mt-6 rounded'
                >
                    {cardImage}
                </Link> : <>
                    {cardImage}
                </>}

                {content && <p data-id='paragraph-text' className='mt-6 p-0 text-base leading-5 text-black dark:text-white card-content'
                >
                    {content}
                </p>
                }
            </div>
            <div>
                {cta?.text && cta?.link && !isString(cta) && cta?.text && <p className='mt-6 text-base font-semibold !text-black/50 flex flex-row items-center gap-[8px] '>
                    <Link
                        url={resolveCardCta(cta)}
                        className='!text-black/50 font-montserrat border-b-2 border-transparent  hover:border-black/50 cursor-pointer'
                    >
                        {(cta.text).toUpperCase()}
                    </Link>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        aria-hidden='true'
                        className='h-5 text-black/50'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                        />
                    </svg>
                </p>
                }
            </div>
        </div>
    )
}

export { CardTile }