'use client'

import React, { useEffect, useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { App } from '@/types'

import { getAppConfigData } from '@/loaders'
import { onEntryChange } from '@/config'

const SingleCol: React.FC<App.SingleColLayout> = (
    props: React.PropsWithChildren<App.SingleColLayout>
) => {
      
    const [appConfig, setAppConfig] = useState<App.csWebConfig>()

    const fetchAppConfig = async () => {

        const web_config : App.csWebConfig[] = await getAppConfigData('en') || null

        setAppConfig(web_config[0])

    }

    useEffect(() => {

        onEntryChange(fetchAppConfig)

    }, [])

    return (
        appConfig
        ? <>
            <Header
                {...appConfig?.main_navigation?.[0]}
                logo={appConfig?.logo}
            />
            <div className='single-col mx-auto h-10 !min-h-[100vh]'>
                {props.children}
            </div>

            <Footer
                {...appConfig?.footer_navigation?.[0]}
                logo={appConfig?.logo}
            />
        </> : <></>
    )
}

export { SingleCol }