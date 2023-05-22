import { Teaser as TeaserProps } from '@/types/components'
import { Link } from '../Link'

const Teaser: React.FC<TeaserProps> = (props: TeaserProps) => {
    const { $,heading, paragraph, cta, image } = props
    
    return (
        <div
            className='relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16'
            {...$?.heading}

        >
            <div className='absolute inset-0 overflow-hidden'>
                <img
                    src={image?.asset?.url}
                    alt=''
                    className='h-full w-full object-cover object-center'
                />
            </div>
            <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
                {heading && <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>{heading}</h2>}
                {paragraph && <p className='mt-3 text-xl text-white'>
                    {paragraph}
                </p>}
                {cta && cta.title && <Link
                    url={cta?.landing_page}
                    className='btnSecondary px-8 py-3 mt-8 sm:w-auto'
                >
                    {cta.title}
                </Link>}
            </div>
        </div>
    )
}
export { Teaser }
