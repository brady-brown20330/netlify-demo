import type { AppProps } from 'next/app'
import { Asset, Entry, MappedPreview } from './common'
import { InternalLink } from './components'

export interface Header extends Entry {
  logo?: Asset;
  // site_url?: string;
  main_navigation?: Navigation[];
  $?: MappedPreview<Header>;
}
export interface Navigation extends Entry {
  items: {
    text?:string
    link?:InternalLink[]
    mega_menu?:{
      section?:{
        title?:string
        link:InternalLink[]
        links: {
          text?:string
          link:InternalLink[]
        }[]
      }[]
    }[]
  }[]
  // $?: MappedPreview<Header>;
}
export interface Footer extends Entry {
  section?:{
    title?: string
    link: InternalLink[]
    links: {
      text?: string
      link: InternalLink[]
    }[]
  }[];
  copyright_info: string;
  $?: MappedPreview<Footer>;
}

export type SingleColLayout = {
  logo?: Asset;
  main_navigation?: Navigation[];
  footer_navigation?: Footer[];
  children: React.ReactNode;
};

export type csWebConfig =   Entry & Header & {
  footer_navigation: Footer[]; 
}

export interface Props extends AppProps {
  locale: string;
  web_config:csWebConfig | null
}
