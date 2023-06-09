import { MappedPreview, PageEntry } from '@/types/common'
import { ArticleProps, pageRenderProps } from './common'

export type Homepage = {
    entry: PageEntry
}

export type LandingPage = {
    entry: PageEntry & pageRenderProps 
    locale?:string
}

export type Article = {
  entry: PageEntry & ArticleProps
  locale?:string
  $?:MappedPreview<Article>
}