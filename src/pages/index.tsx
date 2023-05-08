// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import { getHomepageEntry } from '@/loaders'
// import _ from 'lodash'
// import { inIframe } from '@/utils';
import RenderComponents from '@/RenderComponents'
import { Generic, Page } from '@/types'


export default function Home (entry:Page.Homepage) {

    return (<>
        <div
            style={{height: '50vh'}}
            // {...entry?.$?.title}
            {...entry?.$?.title}
        >
            <br/><br/>
            {entry.title}
        </div>
        {entry && Object.keys(entry).length ? (
            <RenderComponents
                pageComponents={entry?.content_blocks}
            />
        ) : <></>}
    </>
    )

}

export const getServerSideProps = async (context:Generic.serverSideProps)=> {
    // eslint-disable-next-line no-useless-catch
    try {
        const {locale, resolvedUrl, query} = context
        const entry = await getHomepageEntry(locale, resolvedUrl, query)
        console.log('🚀 ~ file: index.tsx:36 ~ getServerSideProps ~ entry:', entry)

        if (!entry) {
            console.log('🚀 ~ file: index.tsx:39 ~ getServerSideProps ~ null:', entry=== null)
            return {
                notFound: true
            }
        }
        return {
            props: {
                ...entry
            }
        }
    } catch (error) {
        console.error('🚀 ==============:', error)
        throw error
    }
}
