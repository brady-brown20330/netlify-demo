'use client'
import { useEffect, useState } from 'react'
import {notFound} from 'next/navigation'
import { getHomePage } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import { Page } from '@/types'
import { PageWrapper } from '@/components'
import { onEntryChange } from '@/config'

export default function Home () {

    const [data, setData] = useState<Page.LandingPage['entry'] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const fetchData = async () => {
        try {
            const res = await getHomePage('/', 'en')
            setData(res) 
            if (!res) {
                throw '404'
            }
        } catch(err) {
            console.error('🚀 ~ fetchData ~ err:', err)
            setLoading(false)
            return notFound()
        }
    }

    useEffect(() => {
        onEntryChange(fetchData)
    }, [])

    return (
        data ? <PageWrapper {...data}>
            {data?.components && Object.keys(data.components)?.length 
                && <RenderComponents
                    components={[
                        // eslint-disable-next-line no-unsafe-optional-chaining
                        ...data?.components,
                        {featured_articles: data?.featured_articles}
                    ]}
                />}
        </PageWrapper> : ''
    )
}