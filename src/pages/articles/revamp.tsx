/**
 * !!!!!!!!!!
 * * This is a temporary PAGE/FILE for the purpose of demo for ticket TSOND-153 | Article Listing Page : Visual enhancement
 * * This file will be removed 
 * !!!!!!!!!!
 * **/ 
import { GetServerSideProps } from 'next'
import { getArticleListingPage, getArticles } from '@/loaders'
import { onEntryChange } from '@/config'
import {  Page } from '@/types'
import { CardCollection } from '@/components'
import { useEffect, useState } from 'react'
import { ImageCardItem } from '@/types/components'
import RenderComponents from '@/RenderComponents'
import { Pagination } from '@/components'
import _, { Dictionary } from 'lodash'
import { Article } from '@/types/pages'


export default function ArticleListing ({entry, articles, locale}:Page.ArticleListingPage) { 

    const [Entry, setEntry] = useState(entry)
    const [cards, setCards] = useState<ImageCardItem[] | []>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    // eslint-disable-next-line
    const [articlesPerPage, setArticlesPerPage] = useState<number>(12)
    const [topicsList, setTopicsList] = useState<string[]>([])
    const [topicFilter, setTopicFiler] = useState<string>('all-articles')
    const [groupedArticles, setGroupedArticles] = useState<Dictionary<Article[]>>()

    type groupedArticlesKey = keyof typeof groupedArticles

    const RenderCardCollection = () => {

        const lastIndex = currentPage * articlesPerPage
        const firstIndex = lastIndex - articlesPerPage
        
        const articlesList: ImageCardItem[] | [] = cards.slice(firstIndex, lastIndex)

        return(
            <CardCollection
                cards={articlesList}
                totalCount={cards?.length}
            />
        )

    }

    // Function to convert hypenated text to Regular text
    const textConverter = (string: string): string => {
    
        return string.replace(/-([a-z])/g, (_m, s) =>  ` ${s.toUpperCase()}`)
    
    }

    // Returns number in 2 digits -- Might be used in the future
    const padNumber = (number: number, places: number): string => String(number).padStart(places, '0')

    const renderArticleCount = (count: number | undefined) => {

        if(!count) return padNumber(0, String(cards?.length).length as number)

        return padNumber(count as number, String(cards?.length).length as number)

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

        const groupedArticlesList = _.groupBy(articles, (article) => article?.topics)
        const topics = Object?.keys(groupedArticlesList)

        setGroupedArticles(groupedArticlesList)
        setTopicsList(topics)

    }, [entry?.url, locale])

    useEffect(() => {

        const filteredTopic: string = topicFilter

        let cardsData: ImageCardItem[] | [] = [] 


        if(filteredTopic === 'all-articles') {
            
            cardsData =  articles?.map((article) => {
                
                return ({
                    title: article?.title,
                    content: article?.summary,
                    image: article?.cover_image,
                    $: article?.$,
                    cta: article?.url
                })
            }) as ImageCardItem[] | [] 
            
        } else {

            // cardsData =  articles?.filter((article) => {

            //     if(article?.topics && article?.topics?.length > 0 && article?.topics?.includes(filteredTopic)) {
            //         return true
            //     }

            //     return false
            // }).map((article) => {
                

            //     return ({
            //         title: article?.title,
            //         content: article?.summary,
            //         image: article?.cover_image,
            //         $: article?.$,
            //         cta: article?.url
            //     })

            // }) as ImageCardItem[] | [] 

            // cardsData = groupedArticles?.[filteredTopic as string]?.map((article) => {
                

            //     return ({
            //         title: article?.title,
            //         content: article?.summary,
            //         image: article?.cover_image,
            //         $: article?.$,
            //         cta: article?.url
            //     })

            // }) as ImageCardItem[] | [] 

            const filteredAtricles = groupedArticles?.[filteredTopic as groupedArticlesKey] as Article[]

            cardsData = filteredAtricles && filteredAtricles.map((article: any) => {

                return ({
                    title: article?.title,
                    content: article?.summary,
                    image: article?.cover_image,
                    $: article?.$,
                    cta: article?.url
                })

            }) as ImageCardItem[] | [] 

        }

        setCards(cardsData)

    }, [topicFilter])

    return (<>
        {Entry?.title && <div className='pt-16 px-8 bg-background-primary dark:bg-white text-center max-w-7xl mx-auto'>
            <h1 className='mx-auto text-gray-900' {...Entry?.$?.title}>{Entry?.title}</h1>
        </div>}
        {Entry?.components && Object.keys(Entry.components)?.length ? (
            <RenderComponents
                components={Entry?.components}
            />
        ) : <></>}
        
        <div className='card-collection mt-8'>
            <div className='flex flex-row justify-center mb-12'>
                <select 
                    id='topics-filter-select' 
                    className='capitalize min-w-[270px] !border-none focus:!border-none bg-[#F0F3F7] !ring-transparent focus:!ring-transparent !text-[#253143] 
                    text-base rounded-lg block py-1 px-5 dark:placeholder-gray-400 dark:text-white cursor-pointer leading-[38px]'
                    onChange={e => setTopicFiler(e.target.value)}
                    defaultValue={'all-articles'}
                >
                    <option className='capitalize !text-[#253143] leading-[38px]' value='all-articles'>All Articles {`(${renderArticleCount(articles && articles?.length)})`}</option>
                    {
                        topicsList 
                        && topicsList.length > 0 
                        && topicsList?.map((topic: string) => <option value={topic} className='capitalize !text-[#253143] leading-[38px]'>
                            { textConverter(topic) } { `(${renderArticleCount(groupedArticles && groupedArticles[topic as groupedArticlesKey]?.length)})`}
                        </option>)
                    }
                </select>
            </div>

            <div className={`${ (cards?.length > 4) ? 'mb-0 sm:mb-20' : '' }`}>
                <RenderCardCollection />
            </div>
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
