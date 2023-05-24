import { Teaser as TeaserProps } from '@/types/components'
import { Link } from '../Link'
import { Image } from '../Image'

const Teaser: React.FC<TeaserProps> = (props: TeaserProps) => {
    const { $,heading, content, cta, image, text_color } = props
    const textColor = text_color === 'Black' ? '!text-black' : '!text-white'
    
    return (
        <div
            className={'relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16'}
            {...$?.heading}

        >
            <div className='absolute inset-0 overflow-hidden'>
                {image?.[0]?.image?.asset?.url
                    // eslint-disable-next-line jsx-a11y/alt-text
                    && <Image 
                        {...image[0]}
                        className='h-full w-full object-cover object-center'
                    />
                }
            </div>
            <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
                {heading && <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${textColor}`}>{heading}</h2>}
                {content && <p className={`mt-3 text-xl ${textColor}`}>
                    {content}
                </p>}
                {cta?.[0]?.title && <Link
                    url={cta?.[0]?.link}
                    className={`${text_color === 'Black' ? 'btnTertiary': 'btnSecondary'} px-8 py-3 mt-8 sm:w-auto`}
                >
                    {cta[0].title}
                </Link>}
            </div>
        </div>
    )
}
export { Teaser }
