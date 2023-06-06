import { resolveAssetPreset  } from '@/utils'
import { ImageComponent } from '@/types/components'


const ImagePreset: React.FC<ImageComponent> = (props: ImageComponent) => {
    const { image, image_alt_text, className} = props

    const renderImage = () => {
        if(image?.asset && image?.metadata?.extension_uid) {
            const { asset } = image

            const resolvedImg = resolveAssetPreset({
                ...image
            })
            if(resolvedImg && resolvedImg?.url) {
                return resolvedImg.url
            } else {
                return asset?.url
            }
        } else {
            console.debug ('Asset could not be resolved')
        }
        
    }

    return <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {image?.asset?.url && <img 
            src={renderImage()}
            alt={image_alt_text || ''}
            className={className || ''}
        />}
    </>
}

export { ImagePreset }