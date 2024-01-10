/* eslint-disable react/prop-types */

import React, { } from 'react'

import { CardCollectionHeader } from './CardCollectionHeader'
import { CardCollectionBody } from './CardCollectionBody'

import { CardCollection as CardCollectionProps } from '@/types/components'
import { CardTiles } from './CardTiles'

const CardCollection: React.FC<CardCollectionProps> = (props: CardCollectionProps) => {
    const { header, cards, totalCount, id } = props

    /**
     * ? Method to conditionally render the card collection or card tiles based on the total number of cards
     * ? INFO: If the number of cards is less than or equal to 2, then it will be rendered as cards tiles. 
     * ?       Else it will be rendered as card collection
    */
    const CardCollectionHandler = () => {
        
        if ((totalCount && totalCount > 2) || cards && cards?.length > 2) {

            return (
                <CardCollectionBody
                    id={id}
                    cards={cards}
                    totalCount={totalCount ? totalCount : (cards ? cards?.length : 0)}
                />
            )

        }

        return (
            <CardTiles
                id={id}
                cards={cards}
                totalCount={totalCount ? totalCount : (cards ? cards?.length : 0)}
            />
        )

    }

    return (

        <div
            id={id}
            className={'pb-8 px-8 sm:pb-12'}
        >
            <div className='max-w-7xl mx-auto '>

                {header && <CardCollectionHeader
                    id={id}
                    heading={header?.heading}
                    sub_heading={header?.sub_heading}
                    $={{ ...header?.$ }}
                />}

                <CardCollectionHandler />
            </div>
        </div>

    )
}

export { CardCollection }