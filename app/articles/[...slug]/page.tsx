'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { isNull } from 'lodash'
import { getArticleListingPage, getArticles } from '@/loaders'
import {  Page } from '@/types'
import { CardCollection, NoArticles, NotFoundComponent, PageWrapper, Pagination } from '@/components'
import RenderComponents from '@/RenderComponents'
import { ImageCardItem } from '@/types/components'
import { Article } from '@/types/pages'
import { filterArticles, isDataInLiveEdit } from '@/utils'
import { onEntryChange } from '@/config'

export default function Article () {
    const [data, setData] = useState<Page.ArticleListingPage['entry'] | null>(null)
    const [articles, setArticles] = useState<Page.ArticleListingPage['articles'] | null>(null)
    const noArticles = articles && articles?.length > 0 ? false : true
    const [cards, setCards] = useState<ImageCardItem[] | []>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    // eslint-disable-next-line
    const [articlesPerPage, setArticlesPerPage] = useState<number>(12)
    const path = usePathname()
    
    const RenderCardCollection = () => {
        const lastIndex = currentPage * articlesPerPage
        const firstIndex = lastIndex - articlesPerPage
        const articlesList: ImageCardItem[] | [] = cards?.slice(firstIndex, lastIndex)
        return(
            !isNull(articles) && noArticles
                ? typeof data !=='undefined' ? <NoArticles /> 
                    : <> {!isDataInLiveEdit() && <NotFoundComponent />} </> // No articles, no entryData and not in live edit mode will render NotFound component
                : <>
                    {cards?.length > 0
                    && <CardCollection
                        cards={articlesList}
                        totalCount={cards?.length}
                    /> }
                </>
        )
    }

    const fetchData = async () => {
        try{
            const res = await getArticleListingPage(path, 'en-us')
            setData(res)
        } catch(error) {
            console.error('Error while fetching ArticleListingPage:', error)
        }
    }
    const fetchArticles = async () => {
        try{
            const articleCollection = await getArticles('en-us')
            const filteredArticles:Article[] | [] = filterArticles(articleCollection, path) as Article[]
            setArticles(filteredArticles)
        } catch(error) {
            console.error('Error while fetching Articles:', error)
        }
    }

    useEffect(() => {
        fetchArticles()
        onEntryChange(fetchData)
    }, [])

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
    }, [articles])

    return (
        <PageWrapper {...data}>
            {data?.title && <div className='pt-16 px-8 mb-16 bg-background-primary dark:bg-white text-center max-w-7xl mx-auto'>
                <h1 className='mx-auto text-black' {...data?.$?.title}>{data?.title}</h1>
            </div>}
            {data?.components && Object.keys(data.components)?.length ? (
                <RenderComponents
                    components={data?.components}
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
        </PageWrapper>
    )
}

