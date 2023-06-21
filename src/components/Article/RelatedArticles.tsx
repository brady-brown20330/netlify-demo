import { RelatedArticles } from '@/types/components'
import { CardCollection } from '../CardCollection'
import React, { useEffect, useState } from 'react'
import { Article } from '@/types/pages'
import { ImageCardItem } from '@/types/components'
import { getArticles } from'@/loaders'

const RelatedArticles:React.FC<RelatedArticles> = (props:RelatedArticles) => {
    const { locale, heading, sub_heading, number_of_articles, $ } = props //related_article_tags
    const [articles, setArticles] = useState<ImageCardItem[]>([])

    async function fetchdata () {
        const allArticles = await getArticles(locale)
        const cards: ImageCardItem[] | [] =  allArticles?.map((article: Article) => {
            return ({
                title: article?.title,
                content: article?.summary,
                image: article?.cover_image,
                $: article?.$,
                cta: article?.url
            })
        }) as ImageCardItem[] | []
        setArticles(cards.splice(0, number_of_articles ? number_of_articles : 4))
    }

    useEffect(() => {
        fetchdata()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return( <>
        <div className='-mt-24'>
            <CardCollection header={[{heading, sub_heading, $}]} cards={articles} />
        </div>       
    </>)
}

export { RelatedArticles }