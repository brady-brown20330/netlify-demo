import { ImageComponent } from '@/types/components'
import NextImage from 'next/image'

const Image: React.FC<ImageComponent> = (props: ImageComponent) => {
    const { image, image_alt_text, className} = props
   

    return <>
        {image?.url && <NextImage 
            src={image.url}
            alt={image_alt_text || ''}
            className={className || ''}
            width='0'
            height='0'
            sizes='100vw'
        />}
    </>
}

export { Image }