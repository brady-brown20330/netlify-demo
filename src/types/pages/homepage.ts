import {CardCollection,Teaser, Image,Cta } from '../components'
import { Entry, MappedPreview } from '../common'

export type Homepage = Entry & {
  components?: HomepageContentBlocks[]
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
