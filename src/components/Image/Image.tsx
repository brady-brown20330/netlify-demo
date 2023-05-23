import _ from 'lodash'

import { resolvePresetByPresetName  } from '@/utils'

import { ImageComponent } from '@/types/components'
import { useEffect, useState } from 'react'


const Image: React.FC<ImageComponent> = (props: ImageComponent) => {
    const { image, image_alt_text, className} = props
    const [device, setDevice] = useState<string>('')

    const renderImage = (deviceT:string) => {
        if(image?.asset && image?.metadata?.extension_uid) {
            const { asset, metadata } = image
            const resolvedImg = resolvePresetByPresetName({
                asset,
                presetName: deviceT,
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

    const setBreakPoint = () => {
        if (window?.innerWidth < 640) {
            setDevice('mobile')
        } else if (window?.innerWidth > 641 && window?.innerWidth < 1024) {
            setDevice('tablet')
        } else {
            setDevice('desktop')
        }
    }

    useEffect(() => {
        setBreakPoint()
        window?.addEventListener('resize', setBreakPoint)
    }, [])
   

    return <>
        {/* {<source media='(max-width: 640px)' srcSet={renderImage('mobile')} />}
        <source media='(min-width: 641px) and (max-width: 856px)' srcSet={renderImage('tablet')} /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
            src={renderImage(device)}
            alt={image_alt_text || ''}
            className={className || ''}
        />
    </>
}

export { Image }