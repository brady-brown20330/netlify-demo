// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import { getHomepageEntry } from '@/loaders/homeLoaders'
import _ from 'lodash'
// import { inIframe } from '@/utils';
import { SingleCol } from '@/layout';
import RenderComponents from '@/RenderComponents';

import { Homepage } from '@/types/pages/homepage'


export default function Home(entry:Homepage) {

  return (<>
    Home Page
    {JSON.stringify(entry)?.replace(',', '\n')}
    {entry && Object.keys(entry).length ? (
      <RenderComponents
        pageComponents={entry?.content_blocks}
      />
    ) : <></>}
  </>
  )

}

export const getServerSideProps = async(context:any)=> {
  try {
    let {locale, resolvedUrl, query} = context
    const entry = await getHomepageEntry(locale, resolvedUrl, query)

    if (!entry) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        ...entry
      }
    }
  } catch (error) {
    console.log("🚀 ~ file: index.tsx: ~ getServerSideProps ~ error:", error)
  }
}
