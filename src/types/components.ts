import { ReactNode } from "react"
import { Asset, MappedPreview, PageEntry } from "./common"
import { Market } from "./generic"

// ######################### ENUMS #########################
export enum TextPosition {
  over = 'over',
  below = 'below',
}

export enum ImagePosition {
  left = 'left',
  right = 'right',
  center_over = 'center_over',
  center_under = 'center_under',
  background_center = 'background_center',
  background_stretch = 'background_stretch'
}

export enum Color {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export enum BackgroundColor {
  none = 'none',
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export enum CtaType {
  button = 'button',
  link = 'link'
}

export enum ValidityStatus {
  valid = 'valid',
  invalid = 'invalid'
}

export interface InternalLink {
  $?: InternalLink
  uid?: string
  _content_type_uid?: string
  url: string
}
export interface Link {
  $?: MappedPreview<Link>
  internal_link?: PageEntry[]
  url?: string
}

export interface CtaCollection {
  ctas?: Cta[]
}
export type Cta = Link & {
  $?: Cta
  text: string
  type: CtaType
  color?: Color
}
export interface ImageRender {
  className?: string
  ariaHidden?: string
  auto?: boolean
  disableUpscale?: boolean
  width?: number
  height?: number
  crop?: string
  dpr?:number
  // noLazyLoad?: boolean
}

export interface Header {
  $?: Header
  title?: string
  text?: string
  ctas?: Cta[]
}

// export interface TextAsset {
//   title: string,
//   video_url?: string,
//   text_align: string,
//   subtitle: string,
//   paragraph: string,
//   image_grid_column?: string,
//   image?: Image
// }

// export interface TextMultiImage {
//   title: string,
//   theme?: string,
//   paragraph: string,
//   images: Image[],
//   cta?: Cta
// }

// export interface TitleText {
//   title: string,
//   paragraph: string
// }

// export interface Category {
//   title: string
//   uid?: string,
//   url: string
//   category_thumbnail: any
// }

// export interface CategoryList {
//   title: string,
//   description: string,
//   categories: Category[],
// }

// ######################### Teaser  #########################
export interface Teaser {
  $?: Teaser
  pre_heading?: string
  heading?: string
  text?: string
  ctas?: Cta[]
  image?: {
    image: Asset
    image_position: ImagePosition
  }
  backgroundColor?: BackgroundColor
  removeMargin?: boolean
}

// ######################### Teaser END  #########################

// ######################### CardCollection  #########################

export interface CardCollection {
  $?: MappedPreview<CardCollection>
  header?: Header[]
  cards?: ImageCardItem[] | []
  styles?: {
    text_position: TextPosition
  }
}

export type ImageCardItem = ImageCardGraphics & ImageCardText

export interface ImageCardGraphics {
  $?: MappedPreview<ImageCardGraphics>
  image: Asset
  textPosition?: TextPosition
  count?: number
}
export interface ImageCardText {
  $?: ImageCardText
  title?: string
  description?: string
  link?: Link
}

export type CardImage = Asset & {
  count?: number
}
// ######################### CardCollection END #########################


// ######################### StatusIndicator  #########################
export interface ComponentValidator {
  status?: ValidityStatus
  validators: boolean[]
  validationInfo: string[]
  children?: ReactNode
}
// ######################### StatusIndicator END #########################


// ######################### LinkComponent  #########################
export type LinkComponent = Link & {
  children?: ReactNode;
  className?: string
}
// ######################### LinkComponent END #########################

// ######################### COMPONENTS #########################

export interface HeroLanguageSelector {
  markets: Market[]
  backgroundImage?: Asset
}

// ######################### START PRIMITIVES #########################
export interface CbOption {
  value: string
  text: string
  imageUrl?: string
  emojiUnicode?: string
}
export interface Combobox {
  items: CbOption[]
  defaultItem: CbOption | null
  onValueChange?: (item: CbOption)=> void
}
export interface JsonRte {
  body?: string
}

export type Image = {
  image: Asset
  render: ImageRender
}

// ######################### PRIMITIVES END #########################