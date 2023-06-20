import { RelatedRegionTopics } from '@/types/components'
import { Link } from '@/components'
import React from 'react'

const RelatedRegionTopics:React.FC<RelatedRegionTopics> = (props:RelatedRegionTopics) => {
    const { region, topics, $} = props

    return( <div className={'px-8'}>
        <div className='container mx-auto'>
            {region && region.length > 0 && <div {...$?.region}><span className='font-semibold text-sm'>Region:</span> {region.map((item:string, i:number) => 
                <span key={`region-link-${i}`}>
                    <Link url={`/articles/region/${item}`}
                        className='!text-purple hover:border-b-2 hover:border-purple cursor-pointer font-semibold text-sm capitalize'
                    >
                        {item}
                    </Link>
                    <span className=' mr-2'>{region[i+1] ? ',' : ''}</span>
                </span>               
            )}
            </div>}
            {topics && topics.length > 0 && <div {...$?.topics}><span className='font-semibold text-sm'>Topics:</span> {topics.map((item:string, i:number) => 
                <span key={`topic-link-${i}`}>
                    <Link url={`/articles/topic/${item}`}
                        className='!text-purple hover:border-b-2 hover:border-purple cursor-pointer font-semibold text-sm capitalize'
                    >
                        {item}
                    </Link>
                    <span className=' mr-2'>{topics[i+1] ? ',' : ''}</span>
                </span>               
            )} 
            </div>}
        </div>       
    </div>)
}

export { RelatedRegionTopics }