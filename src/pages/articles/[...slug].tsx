import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { getArticleListingPage, getArticles } from '@/loaders'
import {  Page } from '@/types'
import { CardCollection, NoArticles, Pagination } from '@/components'
import RenderComponents from '@/RenderComponents'
import { ImageCardItem } from '@/types/components'
import { Article } from '@/types/pages'
import { filterArticles } from '@/utils'
import { livePreviewQuery } from '@/config'


export default function Article ({entry, articles, locale}:Page.ArticleListingPage) { 

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
            cards?.length > 0 ? <CardCollection
                cards={articlesList}
                totalCount={cards?.length}
            /> : <NoArticles />
        )

    }
    
    useEffect(() => {

        const cardsData: ImageCardItem[] | [] =  articles?.map((article) => {
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
        <>{Entry?.title && <div className='pt-16 px-8 mb-16 bg-background-primary dark:bg-white text-center max-w-7xl mx-auto'>
            <h1 className='mx-auto text-gray-900' {...Entry?.$?.title}>{Entry?.title}</h1>
        </div>}
        {Entry?.components && Object.keys(Entry.components)?.length ? (
            <RenderComponents
                components={Entry?.components}
            />
        ) : <></>}
        <div className='card-collection mt-8' id='pagination-scroll-anchor'>
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
        const {params, locale} = context
        if (!params || !params.slug || params?.slug?.length <= 0 ) return { notFound: true }
        const paramsPath = params?.slug?.length > 0 && typeof params.slug!== 'string' 
            ? '/articles/' + params?.slug?.join('/') 
            : params.slug
        
        if (params?.slug?.[0] && !['region', 'topic'].includes(params?.slug?.[0])) return { notFound: true }

        const res = await getArticleListingPage(`${paramsPath}`, locale)
        const articles = await getArticles(locale)
        const filteredArticles:Article[] | [] = filterArticles(articles, params) as Article[]

        if (!filteredArticles?.length && !res) return {notFound: true}
        return {
            props: {
                entry: {
                    ...res
                },
                articles: filteredArticles,
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
