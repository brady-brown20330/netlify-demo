import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { getLandingPage } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import { isEditButtonsEnabled, onEntryChange } from '@/config'
import {  Page } from '@/types'
import { isDataInLiveEdit } from '@/utils'
import { NotFoundComponent } from '@/components'


export default function LandingPage ({entry, locale}:Page.LandingPage) { 
    const [data, setData] = useState<Page.LandingPage['entry'] | null>(entry)
    
    useEffect(() => {
        async function fetchData () {
            try {
                const entryRes = await getLandingPage(entry.url,locale)
                setData(entryRes ?? null)
            } catch (error) {
                console.error(error)
            }
        }
        isEditButtonsEnabled && onEntryChange(fetchData)
    }, [entry?.url, locale])


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
        const {params, locale} = context
        if (!params || !params.slug || params?.slug?.length <= 0 ) return { notFound: true }
        const paramsPath = params?.slug?.length > 0 && typeof params.slug!== 'string' ? '/' + params?.slug?.join('/') : params.slug
        const res: Page.LandingPage = await getLandingPage(`${paramsPath}`,locale)
        if (!isEditButtonsEnabled && !res) return { notFound: true }
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
