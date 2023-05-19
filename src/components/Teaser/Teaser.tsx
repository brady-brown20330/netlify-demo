import parse from 'html-react-parser'
import { classNames } from '@/utils'
import { Teaser as TeaserProps } from '@/types/components'
import { Link } from '../Link'

const Teaser: React.FC<TeaserProps> = (props: TeaserProps) => {
    const { $,pre_heading,heading, text, ctas, image, backgroundColor,removeMargin } = props
    
    // image?: {
    //   image : Asset
    //   image_alignment: ImageAlignment
    // }
    
    return (
        <div className='relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16'>
            <div className='absolute inset-0 overflow-hidden'>
                <img
                    src='https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg'
                    alt=''
                    className='h-full w-full object-cover object-center'
                />
            </div>
            <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>Long-term thinking</h2>
                <p className='mt-3 text-xl text-white'>
          We&apos;re committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to
          focus on quality and reduce our impact. We&apos;re doing our best to delay the inevitable heat-death of the
          universe.
                </p>
                <Link
                    url='#'
                    className='btnSecondary px-8 py-3 mt-8 sm:w-auto'
                >
          Read our story
                </Link>
                <Link
                    url='#'
                    className='btnTertiary px-8 py-3 mt-8 sm:w-auto'
                >
          Read our story
                </Link>
            </div>
        </div>
    )
}
export { Teaser }
