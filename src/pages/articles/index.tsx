import { GetServerSideProps } from 'next'
import { getArticleListingPage, getArticles } from '@/loaders'
import { onEntryChange } from '@/config'
import {  Page } from '@/types'
import { CardCollection } from '@/components'
import { useEffect, useState } from 'react'
import { ImageCardItem } from '@/types/components'
import RenderComponents from '@/RenderComponents'
import { Pagination } from '@/components/Pagination'


export default function ArticleListing ({entry, articles, locale}:Page.ArticleListingPage) { 

    const [Entry, setEntry] = useState(entry)
    const [cards, setCards] = useState<ImageCardItem[] | []>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    // eslint-disable-next-line
    const [articlesPerPage, setArticlesPerPage] = useState<number>(12)

    const RenderCardCollection = () => {

        const lastIndex = currentPage * articlesPerPage
        const firstIndex = lastIndex - articlesPerPage
        
        const articlesList: ImageCardItem[] | [] = cards.slice(firstIndex, lastIndex)

        return(
            <CardCollection
                cards={articlesList}
            />
        )

    }

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

        const cardsData: ImageCardItem[] | []  =  articles?.map((article) => {
            return ({
                title: article?.title,
                content: article?.summary,
                image: article?.cover_image,
                $: article?.$,
                cta: article?.url
            })
        }) as ImageCardItem[] | [] 

        setCards(cardsData)

    }, [entry?.url, locale])

    return (<>
        {Entry?.title && <div className='py-16 px-8 bg-background-primary dark:bg-transparent text-center max-w-7xl mx-auto'>
            <h1 className='mx-auto text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white' {...Entry?.$?.title}>{Entry?.title}</h1>
        </div>}
        {Entry?.components && Object.keys(Entry.components)?.length ? (
            <RenderComponents
                components={Entry?.components}
            />
        ) : <></>}
        <div className='-mt-8'>
            <RenderCardCollection />
            {
                cards?.length > 12 && <div className='py-8 px-8 xl:px-0 bg-background-primary dark:bg-transparent text-center max-w-7xl mx-auto'>
                    <Pagination
                        length={cards?.length}
                        dataPerPage={articlesPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            }
        </div>
    </>)
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
