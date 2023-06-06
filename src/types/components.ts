/* eslint-disable no-shadow */
import { Key, ReactNode } from 'react'
import { Asset, MappedPreview } from './common'
import { Market } from './generic'
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
  link?: InternalLink[];
};

export interface Hero {
  key?: Key | null;
  heading?: string;
  image: globalImage;
  image_alt_text: string;
  image_position?: string;
  content: string;
  cta: Cta;
  $?: MappedPreview<Hero>;
}

export type globalImage  =  Asset & AssetPreset

export interface Image {
  image?: globalImage;
  image_alt_text?: string;
  image_position?: string;
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
  header?: Array<any>;
  heading?: string;
  sub_heading?: string;
}
export interface CardCollection extends CardCollectionHeader {
  $?: MappedPreview<CardCollection>;
  card?: ImageCardItem[] | [];
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
  cta?: Cta;
}

export type CardImage = Asset & {
  count?: number;
};

// ######################### COMPONENTS END #########################


// ######################### StatusIndicator  #########################
// export interface ComponentValidator {
//   status?: ValidityStatus;
//   validators: boolean[];
//   validationInfo: string[];
//   children?: ReactNode;
// }
// ######################### StatusIndicator END #########################

export interface HeroLanguageSelector {
  markets: Market[];
  backgroundImage?: Asset;
}
