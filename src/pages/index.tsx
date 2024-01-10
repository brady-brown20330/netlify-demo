import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { getHomePage } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import { livePreviewQuery } from '@/config'
import { Page } from '@/types'

export default function Home ({ entry }: Page.LandingPage) {

    const [data, setData] = useState(entry)

    useEffect(() => {

        if(entry?.featured_articles) {

            const featuredArticlesAppended = data?.components.some(o => 'featured_articles' in o)

            const updated = data

            if (!featuredArticlesAppended) {
                
                updated.components && updated?.components?.push({ featured_articles: entry?.featured_articles })

                setData(updated)
                
            }

        }

    }, [entry])


    return (
        data?.components && Object.keys(data.components)?.length ? (
            <RenderComponents
                components={data?.components}
            />
        ) : ''

    )

}

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        if (context?.query) {
            livePreviewQuery(context.query)
        }
        const { locale } = context
        const res: Page.Homepage = await getHomePage('', locale)

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