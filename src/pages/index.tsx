// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import { getHomepageEntry } from '@/loaders'
import _ from 'lodash'
// import { inIframe } from '@/utils';
import RenderComponents from '@/RenderComponents';
import { Generic, Page } from '@/types';


export default function Home(entry:Page.Homepage) {

  return (<>
    <div style={{height:'100vh'}}>Home Page</div>
    {entry && Object.keys(entry).length ? (
      <RenderComponents
        pageComponents={entry?.content_blocks}
      />
    ) : <></>}
  </>
  )

}

export const getServerSideProps = async(context:Generic.serverSideProps)=> {
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
