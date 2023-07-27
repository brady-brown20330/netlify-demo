import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { getHomePage } from '@/loaders'
import RenderComponents from '@/RenderComponents'
import { isEditButtonsEnabled, onEntryChange } from '@/config'
import {  Page } from '@/types'
import { NotFoundComponent } from '@/components'
import { isDataInLiveEdit } from '@/utils'


export default function Home ({entry, locale}:Page.LandingPage) { 
    
    const [data, setData] = useState(entry)
    
    useEffect(() => {
        async function fetchData () {
            try {
                const entryRes = await getHomePage('', locale)
                setData(entryRes)
            } catch (error) {
                console.error(error)
            }
        }
        onEntryChange(fetchData)
    }, [entry?.url, locale])

    return (
        data
            ? data?.components && Object.keys(data.components)?.length ? (
                <RenderComponents
                    components={data?.components}
                /> 
            ) : '' 
            :<>
                {isDataInLiveEdit(data) && <NotFoundComponent />}
            </>
    )

}

export const getServerSideProps:GetServerSideProps = async (context) => {
    try {
        const {locale} = context
        const res: Page.Homepage = await getHomePage('', locale)

        if (!res && !isEditButtonsEnabled) return { notFound: true }
        return {
            props: {
                entry: {
                    ...res
                },
                locale
            }
        }
    } catch (error) {
        console.error(error)
        return {
            notFound: true
        }
    }
}