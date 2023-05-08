import _ from 'lodash'
import React, { } from 'react'

import { Card } from '../Cards'
import { CardCollectionHeader } from './CardCollectionHeader'
import { ComponentValidator } from '../ComponentValidator'

import { classNames } from '@/utils'
import { isHeaderValid, isCardsValid, defaultValues, validationInfo } from './CardCollection.helpers'

import { CardCollection as CardCollectionProps, TextPosition } from '@/types/components'

const CardCollection: React.FC<CardCollectionProps> = (props: CardCollectionProps) => {
    const isComponentValid: boolean = isCardsValid(props)

    const { header } = isHeaderValid(props) || isComponentValid ? props : defaultValues
    const { cards } = isCardsValid(props) ? props : defaultValues
    const { styles } = props

    const getTextPosition = () => {
        return _.isEmpty(styles?.text_position) ? TextPosition.below : styles?.text_position
    }

    return (
        <ComponentValidator validators={[isCardsValid(props)]} validationInfo={validationInfo}>
            <div className={'md:px-3 px-4 mx-auto max-w-7xl py-8 sm:py-12 sm:px-6 lg:px-8'}>
                {header && header.map((h, idx) => {
                    return (
                        <CardCollectionHeader
                            key={idx}
                            {...h} />
                    )
                })
                }
                <div
                    className={classNames(
                        cards?.length === 1 ? 'sm:grid-cols-1 lg:grid-cols-1'
                            : cards?.length === 2 ? 'sm:grid-cols-2 lg:grid-cols-2'
                                : cards?.length === 3 ? 'sm:grid-cols-2 lg:grid-cols-3'
                                    : cards?.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4'
                                        : 'sm:grid-cols-2 lg:grid-cols-4',
                        'grid grid-cols-1 gap-y-12 sm:gap-x-6 xl:gap-x-8'
                    )}
                >
                    {cards?.map((card, idx) => {
                        return (<Card
                            key={idx}
                            {...card}
                            count={cards.length}
                            textPosition={getTextPosition()}
                        />
                        )
                    })
                    }
                </div>
            </div>
        </ComponentValidator>
    )
}

export { CardCollection }