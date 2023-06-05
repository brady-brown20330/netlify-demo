import {Hero,Teaser,ImageAndText, CardCollection,Text } from '../components'

export type SeoProps = {
    title?: string
    description?: string
    canonical_url?: string
    no_follow: boolean
    no_index: boolean
    locale: string | undefined
}

export interface pageBlocks {
    hero?:Hero
    teaser?:Teaser
    image_and_text?:ImageAndText
    text?: Text
    card_collection?:CardCollection
    seo?:SeoProps
  }
  
export type pageRenderProps = {
    components:pageBlocks[];
  }