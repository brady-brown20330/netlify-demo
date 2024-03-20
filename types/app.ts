import type { AppProps } from 'next/app'
import { Asset, Entry, MappedPreview } from './common'
import { CallToAction, InternalLink } from './components'

export interface Header extends Entry {
  logo?: Asset;
  // logo_desktop?: Asset;
  // site_url?: string;
  scrolled?: boolean;
  main_navigation?: Navigation[];
  items?: items[];
  $?: MappedPreview<Header>;
}

export interface items {
  text?:string
  link?:InternalLink[]
  mega_menu?:{
    sections?:{
      title?:string
      link:InternalLink[]
      links: {
        thumbnail?: Asset;
        $?: { text?: {'data-cslp': string} };
        text?:string
        link:InternalLink[]
      }[]
    }[];
    cta_group?: {
      call_to_action?:CallToAction[]
    }[];
  }[]
}
export interface Navigation extends Entry {
  items: {
    text?:string
    link?:InternalLink[]
    mega_menu?:{
      sections?:{
        title?:string
        link:InternalLink[]
        links: {
          thumbnail?: Asset;
          $?: { text?: {'data-cslp': string} };
          text?:string
          link:InternalLink[]
        }[]
      }[];
      cta_group?: {
        call_to_action?:CallToAction[]
      }[];
    }[]
  }[]
  // $?: MappedPreview<Header>;
}
export interface Footer extends Entry {
  sections?:FooterSection[];
  copyright_info: string;
  $?: MappedPreview<Footer>;
  logo?: Asset;
}

export interface FooterSection extends FooterLink {
  links: FooterLink[]
}

export interface FooterLink {
  $?: MappedPreview<FooterLink>
  text?: string
  link: InternalLink[]
  external_link?: {
    title?: string
    url?: string
  }
}
 
export type SingleColLayout = {
  logo?: Asset;
  main_navigation?: Navigation[];
  footer_navigation?: Footer[];
  children: React.ReactNode;
  scrolled?: boolean;
};

export type csWebConfig =   Entry & Header & {
  footer_navigation: Footer[]; 
}

export interface Props {
  appProps:  AppProps
  locale?: string;
  web_config?:csWebConfig | null
}
