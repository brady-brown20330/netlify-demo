// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import _ from 'lodash'
// import { inIframe } from '@/utils';
import { Page } from '@/types'
import { getHomePage } from '@/loaders'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { onEntryChange } from '@/config'


export default function Home ({entry}:Page.Homepage) {
    const [data, setData] = useState(entry)

    
    useEffect(() => {
        async function fetchData () {
            try {
                const entryRes = await getHomePage( entry?.url,'en-us')
                setData(entryRes)
            } catch (error) {
                console.error(error)
            }
        }
        onEntryChange(fetchData)
    }, [entry.url])
 
    return (<>
        {data?.title && <div 
            className='h-[200px] text-center pt-20'
            {...data?.$?.title}
        >
            {data.title}
        </div>}
    </>
    )

}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const res: Page.Homepage = await getHomePage('/','en-us')
  
        if (!res) return { notFound: true }
  
        return {
            props: {
                entry: {...res}
            },
            revalidate: 1000
        }
    } catch (error) {
        console.error(error)
        return {
            notFound: true
        }
    }
}