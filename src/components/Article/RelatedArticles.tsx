import { RelatedArticles } from '@/types/components'
import { CardCollection } from '../CardCollection'
import React from 'react'

const RelatedArticles:React.FC<RelatedArticles> = (props:RelatedArticles) => {

    const { related_articles, cards } = props
    const { heading, sub_heading, $ } = {...related_articles} //related_article_tags
    
    return(<div>
        <CardCollection header={{heading, sub_heading, $}} cards={cards} />
    </div>
    )
}

export { RelatedArticles }