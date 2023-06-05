
import React from 'react'
import * as _ from 'lodash'
import { Footer } from '@/components/Footer'
// import { Navigation } from '@/components/Navigation'
import { Header } from '@/components/Header'
import { App } from '@/types'

// function classNames (...classes: string[]) {
//     return classes.filter(Boolean).join(' ')
// }

const SingleCol: React.FC<App.SingleColLayout> = (
    props : React.PropsWithChildren<App.SingleColLayout>
) => {  
    return (
        <>
            <Header 
                {...props}
            />

            <div className='mx-auto' >
                {props.children}
            </div>

            {/* {!_.isEmpty(footer) && <Footer {...footer}/>} */}
        </>
    )
}

export { SingleCol }