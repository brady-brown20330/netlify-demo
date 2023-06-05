import { CardCollection, Teaser, Hero,ImageAndText, Text} from '@/components'
import { Page } from '@/types'


export default function RenderComponents ({components}: Page.pageRenderProps) {
    return (<>
        {components?.map((
            component, key: number) => {
            if (component.hero) {
                return <Hero key={`component-${key}`} {...component.hero} />
            }
            if (component.teaser) {
                return <Teaser key={`component-${key}`} {...component.teaser} />
            }
            if (component.image_and_text) {
                return <ImageAndText key={`component-${key}`} {...component.image_and_text} />
            }
            if (component.card_collection) {
                return <CardCollection key={`component-${key}`} {...component.card_collection} />
            }
            if (component.text) {
                return <Text key={`component-${key}`} {...component.text} />
            }
        })}</>
    )
}