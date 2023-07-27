import { useRouter } from 'next/router'
import { classNames } from '@/utils'
import { Card } from '../Card'
import { Link } from '@/components'
import { ImageCardItem } from '@/types/components'

const CardCollectionBody = ({cards, totalCount}:{cards?: ImageCardItem[]|[], totalCount: number }) => {
    const router = useRouter()
    const isArticleListingPage = router.pathname.includes('/articles/')

    const gridConfigurator  = () => {

        if(totalCount > 12) return 'sm:grid-cols-2 lg:grid-cols-4'

        switch(cards?.length) {
        case 1:
            return 'lg:grid-cols-1'

        case 2:
            return 'sm:grid-cols-2 lg:grid-cols-2'

        case 3: 
            return 'sm:grid-cols-2 lg:grid-cols-3'

        default:
            return 'sm:grid-cols-2 lg:grid-cols-4'
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
        >
            {cards?.map((cardData: any, idx: number) => {
                //eslint-disable-next-line
                return (<Card
                    key={idx}
                    {...cardData}
                    count={cards.length}
                    totalCount={totalCount}
                />
                )
            })
            }
        </div>
            : cards && cards?.length <= 0 && isArticleListingPage ? <div className='text-sm w-full h-52 text-center px-8'>
                <p className='mx-auto my-auto pt-24 border-t-2 border-gray-200'>
            0 Article(s) Found &nbsp;
                    <Link url='/articles' className='font-semibold'>
                Browse All <span aria-hidden='true'>&rarr;</span>
                    </Link>
                </p>
            </div> : <></>
    )
}

export {CardCollectionBody}