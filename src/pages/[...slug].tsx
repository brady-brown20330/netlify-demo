import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { getLandingPage } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import {  Page } from '@/types'
import { isDataInLiveEdit } from '@/utils'
import { NotFoundComponent } from '@/components'
import { livePreviewQuery } from '@/config'


export default function LandingPage ({entry}:Page.LandingPage) { 
    const [data, setData] = useState<Page.LandingPage['entry'] | null>(entry)


    return (
        data
            ? data?.components && Object.keys(data.components)?.length ? (
                <RenderComponents
                    components={data?.components}
                /> 
            ) : '' 
            :<>
                {isDataInLiveEdit(data) && <NotFoundComponent />}
            </>
    )
}
  
export const getServerSideProps:GetServerSideProps = async (context) => {
    try {
        if(context?.query) {
            livePreviewQuery(context.query)
        }
        const {params, locale} = context
        if (!params || !params.slug || params?.slug?.length <= 0 ) return { notFound: true }
        const paramsPath = params?.slug?.length > 0 && typeof params.slug!== 'string' ? '/' + params?.slug?.join('/') : params.slug
        const res: Page.LandingPage = await getLandingPage(`${paramsPath}`,locale)
        if (!res) return { notFound: true }
        return {
            props: {
                entry: {
                    ...res
                },
                locale
            }
        }
    } catch (error) {
        console.error(error)
        return {
            notFound: true
        }
    }
}