import { classNames, resolveAssetPreset  } from '@/utils'
import { ImageComponent } from '@/types/components'
import { CSSProperties } from 'react'


const ImagePreset: React.FC<ImageComponent> = (props: ImageComponent) => {
    const { image, image_alt_text, className} = props

    const renderImage = () => {
        if(image?.asset && image?.metadata?.extension_uid) {
            const { asset } = image

            const resolvedImg = resolveAssetPreset({
                ...image
            })
            if(resolvedImg && resolvedImg?.url) {
                return resolvedImg
            } else {
                return asset
            }
        } else {
            console.debug ('Asset could not be resolved')
        }
        
    }
    const newImage = renderImage() as ImageComponent['image'] & {styles?: CSSProperties}

    return <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {image?.asset?.url && <img 
            src={newImage?.url}
            alt={image_alt_text !== '' ? image_alt_text : image?.asset?.title}
            className={classNames(className ? className : '')}
            style={newImage?.styles ? newImage?.styles : undefined}
        />}
    </>
}

export { ImagePreset }