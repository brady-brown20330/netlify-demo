/* eslint-disable no-shadow */
import { ReactNode, Dispatch, SetStateAction } from 'react'
import { Asset, MappedPreview } from './common'
import { AssetPreset } from './extensions'

export type Link = {
  title?: string;
  href?: string;
  $?: MappedPreview<Link>;
};

export interface InternalLink {
  $?: MappedPreview<InternalLink>;
  uid?: string;
  _content_type_uid?: string;
  url?: string;
}
export interface pageLink {
  $?: MappedPreview<pageLink>;
  url?: string | InternalLink[];
}

// ######################### COMPONENTS #########################
export interface LinkComponent extends pageLink {
  children?: ReactNode;
  className?: string;
  'data-title'?:string
}

export interface CtaCollection {
  ctas?: Cta[];
}
export type Cta = {
  text?: string;
  external_url?: string;
  link?: InternalLink[];
};

export interface Image {
  image?: AssetPreset & Asset;
  image_alt_text?: string;
  image_position?: string;
  $? : MappedPreview<Image>;
}
export interface ImageComponent extends Image {
  className?: string;
}

export interface Text {
  content?: string;
  styles?: {
    background_color?: string;
  }
  $? : MappedPreview<Text>;
}

export interface TextAndImage extends Image {
  heading?: string;
  styles:{
    image_position?: string;
    theme?:string;
  }
  cta: Cta[];
  content?: string;
  $?: MappedPreview<TextAndImage>;
}

export interface Teaser {
  $?: MappedPreview<Teaser>;
  heading?: string;
  content?: string;
  cta?: Cta[];
  image?: Image[];
  styles?: {
    full_screen?: boolean;
  }
}

export interface CardCollectionHeader {
  $?: MappedPreview<CardCollectionHeader>;
  heading?:string
  sub_heading?:string
  
}
export interface CardCollection {
  $?: MappedPreview<CardCollection>;
  cards?: ImageCardItem[] | [];
  header?: CardCollectionHeader;
  totalCount?: number;
}

export type ImageCardItem = ImageCardGraphics &
  ImageCardText & {
    $: MappedPreview<ImageCardGraphics & ImageCardText>;
  };

export interface ImageCardGraphics extends Image {
  count?: number;
}
export interface ImageCardText {
  title?: string;
  content?: string;
  cta?: Cta | string;
}

export type CardImage = Asset & {
  count?: number;
};

export type ArticleCover = {
  title?: string
  summary?: string
  cover_image?: Image['image']
  $?: MappedPreview<ArticleCover>
}

export type RelatedRegionTopics = {
  region?:string[]
  topics?:string[]
  $?:MappedPreview<RelatedRegionTopics>
}

export type RelatedArticles = {
  related_articles?: related_articles
  cards?:  ImageCardItem[] | []
}

export interface related_articles {
  heading?:string
  sub_heading?:string
  number_of_articles?:number
  related_article_tags?:string[]
  $?: MappedPreview<related_articles>
}

export interface pagination {
  length: number
  dataPerPage: number
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}

// ######################### COMPONENTS END #########################


// ######################### StatusIndicator  #########################
// export interface ComponentValidator {
//   status?: ValidityStatus;
//   validators: boolean[];
//   validationInfo: string[];
//   children?: ReactNode;
// }
// ######################### StatusIndicator END #########################

// export interface HeroLanguageSelector {
//   markets: Market[];
//   backgroundImage?: Asset;
// }
