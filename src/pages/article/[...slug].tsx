import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { getArticle, getArticles } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import { onEntryChange } from '@/config'
import {  Page } from '@/types'
import { ArticleCover, RelatedRegionTopics, RelatedArticles } from '@/components'
import { ImageCardItem } from '@/types/components'

export default function Article ({entry, locale, articles}:Page.ArticlePage) { 
    const [data, setData] = useState(entry)
    const { content, title, summary, cover_image, show_related_regions_and_topics, region, topics, show_related_articles, related_articles, $ } = data
    
    articles = articles?.filter((article)=> article.title !== entry.title) // exclude current article from the list of related articles

    const cards: ImageCardItem[] | [] =  articles?.map((article) => {
        return ({
            title: article?.title,
            content: article?.summary,
            image: article?.cover_image,
            $: article?.$,
            cta: article?.url
        })
    }) as ImageCardItem[] | []
    
    const relatedArticles = cards.splice(0, (related_articles?.number_of_articles && related_articles?.number_of_articles <= 4) ? related_articles?.number_of_articles : 4)

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
        {entry && <RenderComponents components={[{
            text: { 
                content,
                $: entry?.$
            }
        }]}
        />}
        {show_related_regions_and_topics && <RelatedRegionTopics
            region={region} 
            topics={topics} 
            $={$}/>}
        {show_related_articles && <RelatedArticles
            related_articles={related_articles}
            cards={relatedArticles}
        />}
    </>
    )

}

  
export const getServerSideProps:GetServerSideProps = async (context) => {
    try {
        const {params, locale} = context
        if (!params || !params.slug || params?.slug?.length <= 0 ) return { notFound: true }
        const paramsPath = params?.slug?.length > 0 && typeof params.slug!== 'string' 
            ? '/article/' + params?.slug?.join('/') 
            : params.slug
        const res: Page.ArticlePage = await getArticle(`${paramsPath}`,locale)
        const articles = await getArticles(locale)
        if (!res) return { notFound: true }
        return {
            props: {
                entry: {
                    ...res
                },
                locale,
                articles
            }
        }
    } catch (error) {
        console.error(error)
        return {
            notFound: true
        }
    }
}
