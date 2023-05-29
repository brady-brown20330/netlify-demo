import { getLandingPage } from '@/loaders'

import RenderComponents from '@/RenderComponents'
import { onEntryChange } from '@/config'
import { getEntries } from '@/services'
import { Common, Page } from '@/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

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

    useEffect(() => {    
        if(document) {
            document.querySelector('html')?.removeAttribute('class')
            document.querySelector('html')?.classList.add(data?.theme?.toLowerCase() || 'light')
        }
    }, [data?.theme])

    return (<>
        {data?.components && Object.keys(data.components)?.length ? (
            <RenderComponents
                components={data?.components}
            />
        ) : <></>}
    </>
    )

}

export const getStaticPaths: GetStaticPaths = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const entryPaths: Common.PageEntry[] = await getEntries('landing_page', 'en-us', [], [])
        const paths: { params: { slug: any } }[] = []
        entryPaths.forEach((entry) => {
            paths.push({ params: { slug: [entry.url.toString()] } })
        })
  
        return {
            paths,
            fallback: 'blocking'
        }
    } catch (error) {
        throw error
    }
}
  
export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const {params, locale} = context
        if (!params || !params.slug || params?.slug?.length <= 0 ) return { notFound: true }
        const paramsPath = params?.slug?.length > 0 && typeof params.slug!== 'string' ? '/' + params?.slug?.join('/') : params.slug
        const res: Page.LandingPage = await getLandingPage(`${paramsPath}`,'en-us')
        if (!res) return { notFound: true }
        return {
            props: {
                entry: {
                    ...res
                },
                locale
            },
            revalidate: 1000
        }
    } catch (error) {
        console.error(error)
        return {
            notFound: true
        }
    }
}
