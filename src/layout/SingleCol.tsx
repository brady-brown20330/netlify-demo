
import React from 'react'
import * as _ from 'lodash'
import { Footer } from '@/components/Footer'
// import { Navigation } from '@/components/Navigation'
import { Header } from '@/components/Header'
import { App } from '@/types'

function classNames (...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const SingleCol: React.FC<App.SingleColLayout> = (
    { header, navigation, footer, children }: React.PropsWithChildren<App.SingleColLayout>
) => {  
    return (
        <>
            {!_.isEmpty(header) && <Header {...header} navigation={navigation}/>}

            <div className='mx-auto' >
                {children}
            </div>

            {!_.isEmpty(footer) && <Footer {...footer}/>}
        </>
    )
}

export { SingleCol }