import { ImagePreset as ImagePresetType } from '@/types/components'
import { ImagePreset } from '../Image/ImagePreset'

/**
 * Image Preset Section Component 
 * @param props: ImagePresetType 
 */ 
const Preset: React.FC<ImagePresetType> = (props: ImagePresetType) => {

    const { $, image, image_alt_text } = props

    return(
        <div
            className={'relative py-16 px-8 mx-auto bg-white dark:bg-black flex flex-col items-center text-center justify-center'}
        >   
            <div
                {...$?.image_alt_text}
            >
                <ImagePreset 
                    image={image}
                    image_alt_text={image_alt_text}
                />
            </div>
        </div>
    )

}

export { Preset }