// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import { getHomepageEntry } from '@/loaders'
// import _ from 'lodash'
// import { inIframe } from '@/utils';
import RenderComponents from '@/RenderComponents'
import { Generic, Page } from '@/types'


export default function Home (entry:Page.Homepage) {
 
    return (<>
        {entry?.title && <div 
            className='h-[200px] text-center pt-20'
            {...entry?.$?.title}
        >
            {entry.title}
        </div>}
    </>
    )

}

export const getServerSideProps = async (context:Generic.serverSideProps)=> {
    // eslint-disable-next-line no-useless-catch
    try {
        const {locale, resolvedUrl, query} = context
        const entry = await getHomepageEntry(locale, resolvedUrl, query)

        if (!entry) {
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
        throw error
    }
}
