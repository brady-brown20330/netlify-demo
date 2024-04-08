import React from 'react'
import { Link } from '@/components'
import { RelatedRegionTopics } from '@/types/components'

const RelatedRegionTopics:React.FC<RelatedRegionTopics> = (props:RelatedRegionTopics) => {
    const { relatedLinks, $} = props

    return( <div className={'px-8 my-16'} id='related-region-topics'>
        <div className='container mx-auto'>
            {relatedLinks && relatedLinks.length > 0 && <div {...$?.taxonomies}><span data-id='span-text' className='font-semibold text-sm inline-block mt-2'>Related Links: &nbsp;</span> 
                {relatedLinks.map((elem:any, ind:number) => (
                    <span key={`related-link-${ind}`}>
                        <Link url={elem.url}
                            className='font-montserrat border-b-2 border-transparent text-purple hover:border-purple cursor-pointer font-semibold text-sm capitalize'
                        >
                            {elem.title}
                        </Link>
                        <span className='mr-2'>{relatedLinks[ind+1] ? ',' : ''}</span>
                    </span> 
                )) }
            </div>}
            
        </div>       
    </div>)
}

export { RelatedRegionTopics }