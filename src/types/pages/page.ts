import { MappedPreview, PageEntry } from '@/types/common'
import { pageRenderProps } from './common'
import { ArticleCover } from '../components'

export type Homepage = {
    entry: PageEntry
}

export type LandingPage = {
    entry: PageEntry & pageRenderProps 
    locale?:string
}

export type Article = {
  entry: PageEntry & ArticleCover
  locale?:string
  $?:MappedPreview<Article>
}