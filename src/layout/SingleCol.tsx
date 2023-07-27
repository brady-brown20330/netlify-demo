
import React from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { App } from '@/types'

const SingleCol: React.FC<App.SingleColLayout> = (
    props: React.PropsWithChildren<App.SingleColLayout>
) => {
    const footer = { ...props?.footer_navigation }
    return (
        <>
            <Header
                {...props}
            />
            <div className='mx-auto h-full min-h-[50vh]'>
                {props.children}
            </div>

            <Footer
                {...footer[0]}
                logo={props?.logo}
            />
        </>
    )
}

export { SingleCol }