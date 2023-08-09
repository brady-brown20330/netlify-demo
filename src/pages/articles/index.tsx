import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { getArticleListingPage, getArticles } from '@/loaders'
import { livePreviewQuery } from '@/config'
import { CardCollection, Pagination } from '@/components'
import RenderComponents from '@/RenderComponents'
import { ImageCardItem } from '@/types/components'
import {  Page } from '@/types'

export default function ArticleListing ({entry, articles}:Page.ArticleListingPage) { 

    const [Entry, setEntry] = useState(entry)
    const [cards, setCards] = useState<ImageCardItem[] | []>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    // eslint-disable-next-line
    const [articlesPerPage, setArticlesPerPage] = useState<number>(12)

    const RenderCardCollection = () => {

        const lastIndex = currentPage * articlesPerPage
        const firstIndex = lastIndex - articlesPerPage
        
        const articlesList: ImageCardItem[] | [] = cards?.slice(firstIndex, lastIndex)

        return(
            <CardCollection
                cards={articlesList}
                totalCount={cards?.length}
            />
        )

    }

    useEffect(() => {

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

    }, [])

    return (
        <>
            {Entry?.title && <div className='pt-16 px-8 mb-16 bg-background-primary dark:bg-white text-center max-w-7xl mx-auto'>
                <h1 className='mx-auto text-gray-900' {...Entry?.$?.title}>{Entry?.title}</h1>
            </div>}
            {Entry?.components && Object.keys(Entry.components)?.length ? (
                <RenderComponents
                    components={Entry?.components}
                />
            ) : <></>}
            <div className='card-collection mt-16' id='pagination-scroll-anchor'>
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
            
        </>
        
    )
}
  
export const getServerSideProps:GetServerSideProps = async (context) => {
    try {
        if(context?.query) {
            livePreviewQuery(context.query)
        }
        const {locale} = context
        const articles = await getArticles(locale)
        const res = await getArticleListingPage('/articles',locale)
        if (!articles && !res) return { notFound: true }
        return {
            props: {
                entry: {
                    ...res
                },
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