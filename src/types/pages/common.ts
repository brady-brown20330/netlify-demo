import {Hero,Teaser,TextAndImage, CardCollection,Text, ArticleCover } from '../components'
import { MappedPreview, PageEntry } from '../common'

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
    text_and_image?:TextAndImage
    text?: Text
    card_collection?:CardCollection
    seo?:SeoProps
  }
  
export type pageRenderProps = {
    components:pageBlocks[];
  }
export interface Article extends PageEntry,ArticleCover {
  region?: string[] | [] 
  content?:string
  $?: MappedPreview<Article>
}