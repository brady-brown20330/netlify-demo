
import React from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { App } from '@/types'

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