import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { getHomePage } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import { livePreviewQuery } from '@/config'
import {  Page } from '@/types'

export default function Home ({entry}:Page.LandingPage) { 
    
    const [data, setData] = useState(entry)

    return (
        data?.components && Object.keys(data.components)?.length ? (
            <RenderComponents
                components={data?.components}
            /> 
        ) : '' 
            
    )

}

export const getServerSideProps:GetServerSideProps = async (context) => {
    try {
        if(context?.query) {
            livePreviewQuery(context.query)
        }
        const {locale} = context
        const res: Page.Homepage = await getHomePage('', locale)

        if (!res ) return { notFound: true }
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