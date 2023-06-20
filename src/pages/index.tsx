import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { getHomePage } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import { onEntryChange } from '@/config'
import {  Page } from '@/types'


export default function Home ({entry, locale}:Page.LandingPage) { 
    
    const [data, setData] = useState(entry)
    
    useEffect(() => {
        async function fetchData () {
            try {
                const entryRes = await getHomePage('', locale)
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

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const {locale} = context
        const res: Page.Homepage = await getHomePage('', locale)

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