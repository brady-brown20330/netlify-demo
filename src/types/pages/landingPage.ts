import {CardCollection,Teaser, Image,Cta } from '../components';
import { Entry, Asset } from '../common';

export type LandingPage = Entry & {
  content_blocks: LandingPageContentBlocks[]
}

export interface LandingPageContentBlocks {
    card_collection?: CardCollection
    teaser?: Teaser,
}

export type LandingPageRenderProps = {
    // contentTypeUid: string;
    // entryUid: string;
    // locale: string;
    pageComponents:LandingPageContentBlocks[];
  }
