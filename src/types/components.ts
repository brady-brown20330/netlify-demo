/* eslint-disable no-shadow */
import { Key, ReactNode } from 'react'
import { Asset, MappedPreview, PageEntry } from './common'
import { Market } from './generic'

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

export type Link = {
  title?:string
  href?:string
  $?:MappedPreview<Link>
} 


export interface InternalLink {
  $?: MappedPreview<InternalLink>
  uid?: string
  _content_type_uid?: string
  url?:string
}
export interface pageLink {
  $?: MappedPreview<pageLink>
  // internal_link?: PageEntry[]
  url?: string|InternalLink[]
}

export interface CtaCollection {
  ctas?: Cta[]
}
export type Cta = pageLink & {
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

export interface ImageAndText {
  heading?:string
  image: {
    asset: Asset
  }
  image_alt_text:string
  image_position?:string
  paragraph?:string
  $?:MappedPreview<ImageAndText>
}

export interface Hero {
  key?:Key|null
  heading?:string
  image:Asset
  image_alt_text:string
  image_position?:string
  paragraph:string
  cta: {
    title?:string
    landing_page?:InternalLink[]
  }
  $?:MappedPreview<Hero>
}

// ######################### Teaser  #########################
export interface Teaser {
  $?: MappedPreview<Teaser>
  heading?: string
  paragraph?: string
  cta?: {
    title: string
    landing_page: InternalLink[]
  }
  image?: {
    asset?: {
      url:string
    }
  }
    
  backgroundColor?: BackgroundColor
  removeMargin?: boolean
}

// ######################### Teaser END  #########################

// ######################### CardCollection  #########################

export interface CardCollection {
  $?: MappedPreview<CardCollection>
  header?: any[]
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
  link?: pageLink
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
export interface LinkComponent extends pageLink  {
  children?: ReactNode;
  className?: string;
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
  asset: Asset
  metadata: ImageRender
}

// ######################### PRIMITIVES END #########################