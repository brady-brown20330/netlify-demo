import { GetServerSideProps } from 'next'
import { getArticleListingPage, getArticles } from '@/loaders'
import { onEntryChange } from '@/config'
import {  Page } from '@/types'
import { CardCollection } from '@/components'
import { useEffect, useState } from 'react'
import { ImageCardItem } from '@/types/components'
import RenderComponents from '@/RenderComponents'


export default function ArticleListing ({entry, articles, locale}:Page.ArticleListingPage) { 

    const [Entry, setEntry] = useState(entry)
    
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
        {Entry?.title && <div className='text-center w-full my-4'><span className='mx-auto text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white' {...Entry?.$?.title}>{Entry?.title}</span></div>}
        {Entry?.components && Object.keys(Entry.components)?.length ? (
            <RenderComponents
                components={Entry?.components}
            />
        ) : <></>}
        <div className='-mt-8'>
            <CardCollection
                cards={cards}
            />
        </div>
    </>
    )
}
  
export const getServerSideProps:GetServerSideProps = async (context) => {
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
            }
        }
    } catch (error) {
        console.error(error)
        return {
            notFound: true
        }
    }
}
