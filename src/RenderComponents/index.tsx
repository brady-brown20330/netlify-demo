import { CardCollection, Teaser } from '@/components'
import {Hero} from '@/components/Hero'
import { ImageAndText } from '@/components/ImageAndText'
import { Component } from '@/types'

export default function RenderComponents (props:any) {
    const { pageComponents } = props
    return (<>
        {/* <Hero /> */}
        {/* <ImageAndText />
        <ImageAndText layout='Image-Text'/> */}
        {/* <Teaser /> */}
        {/* <CardCollection /> */}
        {pageComponents?.map((
            component: { 
                teaser: JSX.IntrinsicAttributes; 
                card_collection: JSX.IntrinsicAttributes; 
                hero: Component.Hero
        }, key: number) => {
            if (component.hero) {
                return <Hero key={`component-${key}`} {...component.hero} />
            }
            if (component.teaser) {
                return <Teaser key={`component-${key}`} {...component.teaser} />
            }
            if (component.card_collection) {
                return <CardCollection key={`component-${key}`} {...component.card_collection} />
            }
        })}</>
    )
}