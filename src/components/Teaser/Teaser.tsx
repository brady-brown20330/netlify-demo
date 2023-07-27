import { Teaser as TeaserProps } from '@/types/components'
import { Link } from '@/components'
import { Image } from '../common/Image'
import { resolveCta } from '@/utils'

const Teaser: React.FC<TeaserProps> = (props: TeaserProps) => {
    const { $, heading, content, cta, image} = props

    const ctaLink = resolveCta(cta)

    return (
        <div
            className={'relative bg-gray-600 px-6 py-32 sm:px-12 sm:py-40 lg:px-16 flex flex-col items-center text-center justify-center'}
            {...$?.heading}
        >
            <div className='absolute inset-0 overflow-hidden'>
                {image?.[0]?.image?.url
                    // eslint-disable-next-line jsx-a11y/alt-text
                    && <Image 
                        {...image[0]}
                        className='h-full w-full object-cover object-center opacity-60'
                    />
                }
            </div>
            <div className='relative mx-auto flex max-w-5xl flex-col items-center text-center'>
                {heading && <h2 className={'mb-3 text-center text-white'}>{heading}</h2>}
                {content && <p className={'text-lg text-center text-white'}>
                    {content}
                </p>}
                {cta?.[0]?.text && ctaLink && <Link
                    url={ctaLink}
                    className={'btnSecondary px-8 py-3 mt-8 sm:w-auto'}
                >
                    {cta[0].text}
                </Link>}
            </div>
        </div>
    )
}

export { Teaser }