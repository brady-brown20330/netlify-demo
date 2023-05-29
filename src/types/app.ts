import type { AppProps } from 'next/app'
import { Asset, Entry, MappedPreview } from './common'
import { Link, InternalLink } from './components'

export type menuLink = {
  link_title?: string | null;
  is_external_link?: boolean;
  external_link? : string;
  internal_link?: InternalLink;
}
export interface Header extends Entry {
  logo?: Asset;
  site_url?: string;
  navigation?: Navigation | null;
  $?: MappedPreview<Header>;
}
export interface Navigation extends Entry {
  main_menu: {
    main_link?: menuLink
    sub_menu?: {
      sub_link?: Link;
      child_menu?: {
        child_link?: Link;
      }[];
    }[];
  }[];
  $?: MappedPreview<Header>;
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
  header?: Header | null;
  navigation?: Navigation | null;
  footer?: Footer;
  children: React.ReactNode;
};

export interface Props extends AppProps {
  locale: string;
  header: Header;
  navigation: Navigation;
  footer: Footer; //need to define
}
