'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import {isNull}  from 'lodash'
import { getLandingPage } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import { Page } from '@/types'
import { isDataInLiveEdit } from '@/utils'
import { NotFoundComponent, PageWrapper } from '@/components'
import { onEntryChange } from '@/config'

export default function LandingPage () {

    const [data, setData] = useState<Page.LandingPage['entry'] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const path = usePathname()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getLandingPage(path, 'en')
                setData(res)
                if (!res && !isNull(res)) {
                    throw '404'
                }
            }
            catch (err) {
                console.error('Error while fetching Landing page : ', err)
                setLoading(false)
            }
        }
        onEntryChange(fetchData)
    }, [path])


    return (<>
        {data
            ? <PageWrapper {...data}>
                {data?.components && Object.keys(data.components)?.length
                    ? <RenderComponents
                        components={data?.components}
                    /> : ''}
            </PageWrapper>
            : <>
                {!loading && !isDataInLiveEdit() && <NotFoundComponent />}
            </>}
    </>
    )
}
