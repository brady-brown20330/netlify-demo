import { CardCollection, Teaser } from '@/components'
import {Hero} from '@/components/Hero'

export default function RenderComponents (props:any) {const { pageComponents } = props
    return (<>
        <Hero />
        {/* <Teaser /> */}
        {pageComponents?.map((component: { teaser: JSX.IntrinsicAttributes; card_collection: JSX.IntrinsicAttributes; }, key: number) => {
            if (component.teaser) {
                return <Teaser key={`component-${key}`} {...component.teaser} />
            }
            if (component.card_collection) {
                return <CardCollection key={`component-${key}`} {...component.card_collection} />
            }
        })}</>
    )
}