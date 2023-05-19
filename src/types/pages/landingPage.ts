import {Hero } from '../components'
import { Entry, Asset } from '../common'

export type LandingPage = Entry & {
  components: LandingPageContentBlocks[]
}

export interface LandingPageContentBlocks {
    hero:Hero
}

// export type LandingPageRenderProps = {
//     // contentTypeUid: string;
//     // entryUid: string;
//     // locale: string;
//     pageComponents:LandingPageContentBlocks[];
//   }
