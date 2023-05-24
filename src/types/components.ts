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
export type Cta = {
  title?:string
  link?:InternalLink[]
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



export interface Hero {
  key?:Key|null
  heading?:string
  image:presetImage
  image_alt_text:string
  image_position?:string
  content:string
  cta: Cta
  $?:MappedPreview<Hero>
}

export interface presetImage {
  asset?: Asset
  metadata?: {
    extension_uid:string
  }
}
export interface image {
  image?: presetImage
  image_alt_text?: string
  image_position?:string
}
export interface ImageComponent extends image {
  className?:string
}

// ######################### Teaser  #########################

export interface ImageAndText {
  heading?:string
  image: presetImage;
  image_alt_text:string
  image_position?:string
  image_height?:string
  content?:string
  $?:MappedPreview<ImageAndText>
}
export interface Teaser {
  $?: MappedPreview<Teaser>
  heading?: string
  content?: string
  cta?: Cta[];
  image?:image[];
}

// ######################### Teaser END  #########################

// ######################### CardCollection  #########################

export interface CardCollectionHeader {
  heading?: string
  sub_heading?:string
}
export interface CardCollection extends CardCollectionHeader {
  $?: MappedPreview<CardCollection>
  card?: ImageCardItem[] | []
  styles?: {
    text_position: TextPosition
  }
}

export type ImageCardItem = ImageCardGraphics & ImageCardText & {
    $: MappedPreview<ImageCardGraphics & ImageCardText>
}

export interface ImageCardGraphics {
  image: Asset
  count?: number
}
export interface ImageCardText {
  title?: string
  content?: string
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