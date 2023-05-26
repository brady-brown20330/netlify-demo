import { CardCollection, Teaser, Hero,ImageAndText, Rte} from '@/components'
import { Component } from '@/types'


export default function RenderComponents (props:any) {
    const { pageComponents } = props
    return (<>
        {pageComponents?.map((
            component: { 
                teaser: Component.Teaser; 
                card_collection: JSX.IntrinsicAttributes; 
                hero: Component.Hero;
                image_and_text:Component.ImageAndText
                rte: Component.Rte
        }, key: number) => {
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
            if (component.rte) {
                return <Rte key={`component-${key}`} {...component.rte} />
            }
        })}</>
    )
}