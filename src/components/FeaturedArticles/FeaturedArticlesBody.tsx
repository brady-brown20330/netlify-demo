import { classNames } from '@/utils'
import { Card } from '../Card'
import { ArticleCardItem, FeaturedArticles } from '@/types/components'
import { ArticleCard } from './ArticleCard'
import { MappedPreview } from '@/types/common'

const FeaturedArticlesBody = ({cards, totalCount, id, $}:{ id?: string, cards?: ArticleCardItem[]|[], totalCount: number, $?: MappedPreview<FeaturedArticles> }) => {

    const gridConfigurator  = () => {

        if(totalCount > 12) return 'sm:grid-cols-2 lg:grid-cols-3'

        switch(cards?.length) {
        case 1:
            return 'lg:grid-cols-1'

        case 2:
            return 'sm:grid-cols-2 lg:grid-cols-2'

        case 3: 
            return 'sm:grid-cols-2 lg:grid-cols-3'

        default:
            return 'sm:grid-cols-2 lg:grid-cols-3'
        }

    }

    return (
        cards && cards?.length > 0 ? <div
            className={
                classNames(
                    gridConfigurator(),
                    'grid grid-cols-1 gap-y-12 sm:gap-x-6 xl:gap-x-8'
                )
            }
            {...$?.heading}
        >
            {cards?.map((cardData: any, idx: number) => {
                //eslint-disable-next-line
                return (<ArticleCard
                    id={id}
                    key={idx}
                    {...cardData}
                    count={cards.length}
                    totalCount={totalCount}
                />
                )
            })
            }
        </div> : <></>
    )
}

export {FeaturedArticlesBody}