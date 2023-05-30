import React from 'react'
import { Image , Link} from '@/components'
import { ImageCardItem } from '@/types/components'

const Card: React.FC<ImageCardItem> = (props: ImageCardItem) => {

    const { $, image,image_alt_text, title, cta, content, count } = props
    const imageClass = count === 1 ? 'max-h-96' :''

    return (
        <div
            className='group relative'
            {...$?.title}
        >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            {image && <Image
                image={image}
                image_alt_text={image_alt_text}
                className={`w-full object-center object-cover w-full object-cover ${imageClass}`}
            />
            }
            <div className='mt-6 text-xl text-gray-500 dark:text-white'>
                {title && <h4 className='font-semibold'
                >
                    {title}
                </h4>
                }
            </div>
            {content && <p className='mt-2 text-sm leading-8 text-gray-600 dark:text-white'
            >
                {content}
            </p>
            }
            {cta?.title && <span className='text-sm !text-purple'>
                <Link 
                    url={cta?.link}
                    className='hover:border-b-2 hover:border-purple'
                >
                    {cta.title}
                </Link> &rarr;
            </span>}
        </div>
    )
}

export { Card }