import { GetStaticPaths, GetStaticProps } from 'next'
import { getArticleListingPage, getArticles, getPaths } from '@/loaders'
import { onEntryChange } from '@/config'
import {  Page } from '@/types'
import { CardCollection } from '@/components'
import { filterArticles } from '@/utils/articles'


export default function Article ({entry, articles}:Page.ArticleListingPage) { 
    const cards:any =  articles?.map((article) => {
        return ({
            title: article?.title,
            content: article?.summary,
            image: article?.cover_image,
            $: article?.$,
            cta: article?.url
        })
    })


    
    // useEffect(() => {
    //     async function fetchData () {
    //         try {
    //             const entryRes = await getArticle(entry.url,locale)
    //             setData(entryRes)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     onEntryChange(fetchData)
    // }, [entry?.url, locale])


    return (<>
        <CardCollection 
            header={[{
                heading: entry?.title
            }]}
            cards={cards}
        />
    </>
    )

}

export const getStaticPaths: GetStaticPaths = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const paths = await getPaths('articles_listing_page', 'en-us')
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
            ? '/articles/' + params?.slug?.join('/') 
            : params.slug

        const entry = await getArticleListingPage(`${paramsPath}`, locale)
        const res = await getArticles(locale)

        // let filterArr = res.map((elem) => elem?.region?.length > 0 && params?.slug?.[1] && elem.region.includes(params.slug[1]) ? elem : false).filter((x) => x)

        // console.log("🚀 ~ file: [...slug].tsx:70 ~ constgetStaticProps:GetStaticProps= ~ filterArr:", filterArr.length )

        if (params?.slug?.[0] && !['region', 'topic'].includes(params?.slug?.[0])) return { notFound: true }
        return {
            props: {
                entry,
                articles: filterArticles(res, params),
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
