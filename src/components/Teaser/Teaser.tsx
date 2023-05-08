import { CtaCollection } from '../Cta'
import parse from 'html-react-parser'
import { classNames } from '@/utils'
import { Teaser as TeaserProps } from '@/types/components'

const Teaser: React.FC<TeaserProps> = (props: TeaserProps) => {
    const { $,pre_heading,heading, text, ctas, image, backgroundColor,removeMargin } = props
    
    // image?: {
    //   image : Asset
    //   image_alignment: ImageAlignment
    // }
    
    return (
        <div
            className={classNames(
                removeMargin ? '' : 'py-16 px-4 sm:py-20 sm:px-6 lg:px-8',
                'max-w-2xl mx-auto text-center'
            )}>
            {heading ? (
                <h2 className='text-2xl lg:text-3xl font-extrabold sm:text-4xl'
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    {...$?.heading}>
                    <span>{heading}</span>
                </h2>
            ) : (
                ''
            )}
            {text
                && (
                    <div className='py-2 leading-6 text-lg'
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        {...$?.text}
                    >   
                        {parse(text)}
                    </div>
                )}
            <CtaCollection ctas={ctas}/>
        </div>
    )
}
export { Teaser }
