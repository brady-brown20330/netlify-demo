import type {  AppProps } from 'next/app'
import { Asset, Entry, MappedPreview } from './common'
import { Link } from './components'

export interface Header extends Entry {
  logo?:Asset
  site_url?:string
  $?:MappedPreview<Header>
}
export interface Footer extends Entry {
  main_menu: {
    main_link?: Link
    sub_menu?: {
      link?: Link
    }[]
  }[]
  $?:MappedPreview<Footer>
}

export type SingleColLayout = {
  header?:Header|null
  footer?: Footer
  children: React.ReactNode
}

export interface Props extends AppProps {
  locale:string,
  header: Header;
  footer: Footer; //need to define
}