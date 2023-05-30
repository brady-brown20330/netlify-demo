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
}

export interface CtaCollection {
  ctas?: Cta[];
}
export type Cta = {
  title?: string;
  link?: InternalLink[];
};

export interface Hero {
  key?: Key | null;
  heading?: string;
  image: AssetPreset;
  image_alt_text: string;
  image_position?: string;
  content: string;
  cta: Cta;
  $?: MappedPreview<Hero>;
}

export interface Image {
  image?: AssetPreset;
  image_alt_text?: string;
  image_position?: string;
}
export interface ImageComponent extends Image {
  className?: string;
}

export interface Rte {
  content?: string;
  $? : MappedPreview<Rte>;
}

export interface ImageAndText {
  heading?: string;
  image: AssetPreset;
  image_alt_text: string;
  image_position?: string;
  image_height?: string;
  content?: string;
  $?: MappedPreview<ImageAndText>;
}
export interface Teaser {
  $?: MappedPreview<Teaser>;
  heading?: string;
  content?: string;
  cta?: Cta[];
  image?: Image[];
}

export interface CardCollectionHeader {
  $?: MappedPreview<CardCollectionHeader>;
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

export interface ImageCardGraphics {
  image: AssetPreset;
  image_alt_text: string;
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
