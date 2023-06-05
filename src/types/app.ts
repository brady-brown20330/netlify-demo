import type { AppProps } from 'next/app'
import { Asset, Entry, MappedPreview } from './common'
import { Link, InternalLink } from './components'

export type menuLink = {
  link_title?: string | null;
  is_external_link?: boolean;
  external_link? : string;
  internal_link?: InternalLink;
}
export interface Header {
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
  main_menu: {
    main_link?: menuLink
    sub_menu?: {
      sub_link?: menuLink
    }[];
  }[];
  $?: MappedPreview<Footer>;
}

export type SingleColLayout = {
  logo?: Asset;
  main_navigation?: Navigation[];
  // footer?: Footer;
  children: React.ReactNode;
};

export type csWebConfig =   Entry & Header & {
  footer_navigation: Footer; 
}

export interface Props extends AppProps {
  locale: string;
  web_config:csWebConfig | null
}
