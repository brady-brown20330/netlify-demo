import { PageEntry } from '@/types/common'
import { pageRenderProps } from './common'

export type Homepage = {
    entry: PageEntry
}

export type LandingPage = {
    entry: PageEntry & pageRenderProps
    locale?:string
}