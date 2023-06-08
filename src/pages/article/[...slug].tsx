import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { getArticle, getPaths } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import { onEntryChange } from '@/config'
import {  Page } from '@/types'
import { ArticleCover } from '@/components'


export default function Article ({entry, locale}:Page.Article) { 
    const [data, setData] = useState(entry)
    const { content } = data
    
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
            title= {entry?.title}
            summary={entry?.summary}
            cover_image={entry?.cover_image}
            $={entry?.$}
        />
        {entry && <RenderComponents components={[
            {
                text: { content }
            }
            // {
            //     card_collection: {
            //         header: [{
            //             heading: '',
            //             sub_heading: ''
            //         }]
            //     }
            // }
        ]}
        />}
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
        const res: Page.Article = await getArticle(`${paramsPath}`,locale)
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
