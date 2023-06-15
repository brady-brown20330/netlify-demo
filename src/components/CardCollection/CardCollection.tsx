import React, { } from 'react'

import { Card } from '@/components'
import { CardCollectionHeader } from './CardCollectionHeader'

import { classNames } from '@/utils'

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

                <div
                    className={
                        classNames(
                            cards?.length === 1 ? 'grid-cols-1 lg:grid-cols-1'
                                : cards?.length === 2 ? 'grid-cols-2 lg:grid-cols-2'
                                    : cards?.length === 3 ? 'grid-cols-2 lg:grid-cols-3'
                                        : cards && cards?.length >= 4 ? 'grid-cols-2 lg:grid-cols-4'
                                            : '',
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
                        />
                        )
                    })
                    }
                </div>
            </div>
        </div>

    )
}

export { CardCollection }