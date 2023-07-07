import { Teaser, TextAndImage, CardCollection, Text, ArticleCover, ImagePreset } from '../components'
import { MappedPreview, PageEntry } from '../common'

export type SeoProps = {
  title: string
  url: string
  seo?: {
    title?: string
    description?: string
    canonical_url?: string
    no_follow: boolean
    no_index: boolean
  }
  summary?: string
  locale: string | undefined
}

export interface pageBlocks {
    teaser?:Teaser
    text_and_image?:TextAndImage
    text?: Text
    card_collection?:CardCollection
    image_preset?: ImagePreset
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