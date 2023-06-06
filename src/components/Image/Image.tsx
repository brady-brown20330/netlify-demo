import { ImageComponent } from '@/types/components'


const Image: React.FC<ImageComponent> = (props: ImageComponent) => {
    const { image, image_alt_text, className} = props
   

    return <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {image?.url && <img 
            src={image.url}
            alt={image_alt_text || ''}
            className={className || ''}
        />}
    </>
}

export { Image }