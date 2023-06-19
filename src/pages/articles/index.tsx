import { GetStaticProps } from 'next'
import { getArticleListingPage, getArticles } from '@/loaders'
import { onEntryChange } from '@/config'
import {  Page } from '@/types'
import { CardCollection } from '@/components'
import { useEffect, useState } from 'react'
import { ImageCardItem } from '@/types/components'


export default function ArticleListing ({entry, articles, locale}:Page.ArticleListingPage) { 
    const [Entry, setEntry] =useState(entry)
    const cards:ImageCardItem[] | []  =  articles?.map((article) => {
        return ({
            title: article?.title,
            content: article?.summary,
            image: article?.cover_image,
            $: article?.$,
            cta: article?.url
        })
    }) as ImageCardItem[] | [] 
    
    useEffect(() => {
        async function fetchData () {
            try {
                const entryRes = await getArticleListingPage(entry?.url, locale)
                setEntry(entryRes)
            } catch (error) {
                console.error(error)
            }
        }
        onEntryChange(fetchData)
    }, [entry?.url, locale])



    return (<>
        <CardCollection 
            header={[{
                heading: Entry?.title,
                $: {
                    heading: Entry?.$?.title
                }
            }]}
            cards={cards}

        />
    </>
    )

}
  
export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const {locale} = context

        const articles = await getArticles(locale)
        const entry = await getArticleListingPage('/articles',locale)
        if (!articles) return { notFound: true }
        return {
            props: {
                entry,
                articles,
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
