import _ from 'lodash'

import { resolveAssetPreset  } from '@/utils'

import { ImageComponent } from '@/types/components'


const Image: React.FC<ImageComponent> = (props: ImageComponent) => {
    const { image, image_alt_text, className} = props

    const renderImage = () => {
        if(image?.asset && image?.metadata?.extension_uid) {
            const { asset, metadata } = image

            const resolvedImg = resolveAssetPreset({
                asset,
                extension_uid: metadata.extension_uid
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
        {/* {<source media='(max-width: 640px)' srcSet={renderImage('mobile')} />}
        <source media='(min-width: 641px) and (max-width: 856px)' srcSet={renderImage('tablet')} /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
            src={renderImage()}
            alt={image_alt_text || ''}
            className={className || ''}
        />
    </>
}

export { Image }