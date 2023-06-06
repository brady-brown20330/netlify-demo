import React from 'react'
import { Image, Link } from '@/components'
import { ImageCardItem } from '@/types/components'

const Card: React.FC<any> = (props: any) => {

    const { $, image, image_alt_text, title, cta, content, count } = props
    const imageClass = count === 1 ? 'max-h-96' : ''

    return (
        <div
            className='group relative'
            {...$?.title}
        >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            {image &&
                <Image
                    image={image}
                    image_alt_text={image_alt_text}
                    className={`w-full object-center object-cover w-full object-cover ${imageClass}`}
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
            <div className='mt-3'>

                {cta?.text && <span className='text-base font-semibold !text-purple'>
                    <Link
                        url={cta?.link}
                        className='!text-purple hover:border-b-2 hover:border-purple cursor-pointer'
                    >
                        {cta.text}
                    </Link> &rarr;
                </span>}
            </div>
        </div>
    )
}

export { Card }