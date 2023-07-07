import { CardCollection, Teaser,TextAndImage, Text, Preset} from '@/components'
import { Page } from '@/types'


export default function RenderComponents ({components}: Page.pageRenderProps) {

    return (<>
        {components?.map((
            component, key: number) => {
            if (component.teaser) {
                return <Teaser key={`component-${key}`} {...component.teaser} />
            }
            if (component.text_and_image) {
                return <TextAndImage key={`component-${key}`} {...component.text_and_image} />
            }
            if (component.card_collection) {
                return <CardCollection key={`component-${key}`} {...component.card_collection} />
            }
            if (component.text) {
                return <Text key={`component-${key}`} {...component.text} />
            }
            if (component.image_preset) {
                return <Preset key={`component-${key}`} {...component.image_preset}/>
            }
        })}</>
    )
}