import React, { } from 'react'

import { Card } from '@/components'
import { CardCollectionHeader } from './CardCollectionHeader'

import { classNames } from '@/utils'
// import { isHeaderValid, isCardsValid, validationInfo } from './CardCollection.helpers'

import { CardCollection as CardCollectionProps } from '@/types/components'

const CardCollection: React.FC<CardCollectionProps> = (props: CardCollectionProps) => {
    const {$, header, card } = props

    // const isComponentValid: boolean = isCardsValid(props)

    // const { heading } = isHeaderValid(props) || isComponentValid ? props : {header: null}
    // const { cards } = isCardsValid(props) ? props : {cards: null}

    return (
        // <ComponentValidator validators={[isCardsValid(props)]} validationInfo={validationInfo}>
        <div className={'pb-8 px-8 pb-8 sm:pb-12'}>
            <div className='max-w-7xl mx-auto '>
            
                <CardCollectionHeader
                    heading={header?.[0]?.heading}
                    sub_heading={header?.[0]?.sub_heading}
                    $={$}
                />
           
                <div
                    className={classNames(
                        card?.length === 1 ? 'sm:grid-cols-1 lg:grid-cols-1'
                            : card?.length === 2 ? 'sm:grid-cols-2 lg:grid-cols-2'
                                : card?.length === 3 ? 'sm:grid-cols-2 lg:grid-cols-3'
                                    : card?.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4'
                                        : 'sm:grid-cols-2 lg:grid-cols-4',
                        'grid grid-cols-1 gap-y-12 sm:gap-x-6 xl:gap-x-8'
                    )}
                >
                    {card?.map((cardData: any, idx: number) => {
                        //eslint-disable-next-line
                        return (<Card
                            key={idx}
                            {...cardData}
                            count={card.length}
                        />
                        )
                    })
                    }
                </div>
            </div>
        </div>
        // </ComponentValidator>
    )
}

export { CardCollection }