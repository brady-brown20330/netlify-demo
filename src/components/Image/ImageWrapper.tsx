import { Image } from './Image'
import { ImagePreset } from './ImagePreset'
import { ImageComponent } from '@/types/components'
 
const ImageWrapper:React.FC<ImageComponent> = (props:ImageComponent) => {

    return <>
        {
            props?.image?.asset ? <ImagePreset {...props}/>
                : props?.image?.url ? <Image {...props}/>
                    : <></>
        }
    </>
}
export {ImageWrapper}
