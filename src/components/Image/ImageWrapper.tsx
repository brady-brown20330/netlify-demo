import { Image } from './Image'
import { ImagePreset } from './ImagePreset'
import { ImageComponent } from '@/types/components'
 
const ImageWrapper:React.FC<ImageComponent> = (props:ImageComponent) => {

    return <>
        {
            props?.image?.asset ? <ImagePreset {...props}/>
                // eslint-disable-next-line jsx-a11y/alt-text
                : props?.image?.url ? <Image {...props}/>
                    : <></>
        }
    </>
}
export {ImageWrapper}
