import { MappedPreview, PageEntry } from '@/types/common'
import { Article, pageRenderProps } from './common'

export type Homepage = {
    entry: PageEntry
}

export type LandingPage = {
    entry: PageEntry & pageRenderProps 
    locale?:string
}

export type ArticlePage = {
  entry: PageEntry & Article
  locale?:string
  $?:MappedPreview<ArticlePage>
}
export type ArticleListingPage = {
  articles?: Article[] | []
  entry?:PageEntry
  locale?:string
}