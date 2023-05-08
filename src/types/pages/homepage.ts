import {CardCollection,Teaser, Image,Cta } from '../components'
import { Entry } from '../common'

export type Homepage = Entry & {
  content_blocks?: HomepageContentBlocks[]
}

export interface HomepageContentBlocks {
    card_collection?: CardCollection
    teaser?: Teaser,
}

export type HomepageRenderProps = {
    // contentTypeUid: string;
    // entryUid: string;
    // locale: string;
    pageComponents:HomepageContentBlocks[];
  }
