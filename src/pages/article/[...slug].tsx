import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { getArticle, getPaths } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import { onEntryChange } from '@/config'
import {  Page } from '@/types'
import { ArticleCover, RelatedRegionTopics, RelatedArticles } from '@/components'


export default function Article ({entry, locale}:Page.ArticlePage) { 
    const [data, setData] = useState(entry)
    const { content, title, summary, cover_image, show_related_regions_and_topics, region, topics, show_related_articles, related_articles, $ } = data

    useEffect(() => {
        async function fetchData () {
            try {
                const entryRes = await getArticle(entry.url,locale)
                setData(entryRes)
            } catch (error) {
                console.error(error)
            }
        }
        onEntryChange(fetchData)
    }, [entry?.url, locale])

    return (<>
        <ArticleCover
            title={title}
            summary={summary}
            cover_image={cover_image}
            $={$}
        />
        {entry && <RenderComponents components={[
            {
                text: { 
                    content,
                    $: entry?.$
                }
            }
        ]}
        />}
        {show_related_regions_and_topics && <RelatedRegionTopics region={region} topics={topics} $={$}/>}
        {// eslint-disable-next-line max-len
            show_related_articles && <RelatedArticles locale={locale} heading={related_articles?.heading} sub_heading={related_articles?.sub_heading} number_of_articles={related_articles?.number_of_articles} $={related_articles?.$} />}
    </>
    )

}

export const getStaticPaths: GetStaticPaths = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const paths = await getPaths('article', 'en-us')
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
        const paramsPath = params?.slug?.length > 0 && typeof params.slug!== 'string' 
            ? '/article/' + params?.slug?.join('/') 
            : params.slug
        const res: Page.ArticlePage = await getArticle(`${paramsPath}`,locale)
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
