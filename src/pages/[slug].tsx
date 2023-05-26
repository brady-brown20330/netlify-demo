import { getLandingPage } from '@/loaders'

import RenderComponents from '@/RenderComponents'
import { Generic, Page } from '@/types'


export default function LandingPage (entry:Page.LandingPage) { 
    return (<>
        {entry && Object.keys(entry).length ? (
            <RenderComponents
                pageComponents={entry?.components}
            />
        ) : <></>}
    </>
    )

}

export const getServerSideProps = async (context:Generic.serverSideProps)=> {
    // eslint-disable-next-line no-useless-catch
    try {
        const {locale, resolvedUrl, query} = context
        const entry = await getLandingPage(locale, resolvedUrl, query)
        
        if (!entry) return { notFound: true }
        return {
            props: {
                ...entry
            }
        }
    } catch (error) {
        throw error
    }
}
