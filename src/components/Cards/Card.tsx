import React from 'react'
import { Image, Link } from '@/components'
import { ImageCardItem } from '@/types/components'
import { classNames } from '@/utils'

const Card: React.FC<ImageCardItem> = (props: ImageCardItem) => {
    const { $, image, image_alt_text, title, cta, content, count } = props

    return (
        <div
            className='group relative flex flex-col justify-between'
            {...$?.title}
        >
            <div>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {image && <Image
                    image={image}
                    image_alt_text={image_alt_text}
                    // className={'w-full object-center object-fit object-cover h-48 xl:h-40'}
                    className={classNames(
                        count === 1 ? 'h-auto w-auto'
                            :count === 2 ? 'lg:h-64' 
                                :count === 3 ? 'lg:h-52'
                                    : count && count >= 4 ? 'h-48 lg:h-40'
                                        : '',
                        'w-full object-center object-fit object-cover'
                    )}
                />
                }
                <div className='mt-6 text-xl text-gray-500 dark:text-white'>
                    {title && <h4 className='font-bold'
                    >
                        {title}
                    </h4>
                    }
                </div>
                {content && <p className='mt-2 text-base leading-8 text-gray-600 dark:text-white'
                >
                    {content}
                </p>
                }

                {cta?.link?.length !== 0 && cta?.text && <p className='mt-3 text-base font-semibold !text-purple'>
                    <Link
                        url={cta?.link}
                        className='!text-purple hover:border-b-2 hover:border-purple cursor-pointer'
                    >
                        {cta.text}
                    </Link> &rarr;
                </p>
                }
            </div>


        </div>
    )
}

export { Card }