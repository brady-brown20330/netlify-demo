import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { getLandingPage, getPaths } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import { onEntryChange } from '@/config'
import {  Page } from '@/types'


export default function LandingPage ({entry, locale}:Page.LandingPage) { 
    const [data, setData] = useState(entry)
    
    useEffect(() => {
        async function fetchData () {
            try {
                const entryRes = await getLandingPage(entry.url,locale)
                setData(entryRes)
            } catch (error) {
                console.error(error)
            }
        }
        onEntryChange(fetchData)
    }, [entry?.url, locale])


    return (<>
        {data?.components && Object.keys(data.components)?.length ? (
            <RenderComponents
                components={data?.components}
            />
        ) : <></>}
    </>
    )

}
  
export const getServerSideProps:GetServerSideProps = async (context) => {
    try {
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
