import React, { } from 'react'

import { CardCollectionHeader } from './CardCollectionHeader'
import { CardCollectionBody } from './CardCollectionBody'

import { CardCollection as CardCollectionProps } from '@/types/components'

const CardCollection: React.FC<CardCollectionProps> = (props: CardCollectionProps) => {
    const { header, cards } = props

    return (

        <div className={'py-8 px-8 sm:pb-12'}>
            <div className='max-w-7xl mx-auto '>

                <CardCollectionHeader
                    heading={header?.[0]?.heading}
                    sub_heading={header?.[0]?.sub_heading}
                    $={{ ...header?.[0]?.$ }}
                />
                <CardCollectionBody 
                    cards={cards}
                />
                
            </div>
        </div>

    )
}

export { CardCollection }