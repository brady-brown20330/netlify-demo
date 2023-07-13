import React, { } from 'react'

import { CardCollectionHeader } from './CardCollectionHeader'
import { CardCollectionBody } from './CardCollectionBody'

import { CardCollection as CardCollectionProps } from '@/types/components'

const CardCollection: React.FC<CardCollectionProps> = (props: CardCollectionProps) => {
    const { header, cards, totalCount } = props

    return (

        <div className={'pb-8 px-8 sm:pb-12'}>
            <div className='max-w-7xl mx-auto '>

                {header && <CardCollectionHeader
                    heading={header?.heading}
                    sub_heading={header?.sub_heading}
                    $={{ ...header?.$ }}
                />}
                <CardCollectionBody 
                    cards={cards}
                    totalCount={totalCount ? totalCount : 0}
                />
                
            </div>
        </div>

    )
}

export { CardCollection }