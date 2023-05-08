import { CardCollection, Teaser } from '@/components'

export default function RenderComponents (props:any) {const { pageComponents } = props
    return (<>
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