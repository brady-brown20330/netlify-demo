
import {Footer} from '@/components/Footer'
import { Header } from '@/components/Header'
import React from 'react'

function classNames (...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface SingleColProps {
  header?: any
  footer?: any
  children: React.ReactNode
}

const SingleCol: React.FC<SingleColProps> = ({ header, footer, children }: React.PropsWithChildren<SingleColProps>) => {
  
    return (
        <>
            {/* <Header /> */}

            {/* Navigation */}


            <div className='mx-auto' >
                {children}
            </div>

            {/* footer  */}
            {/* <Footer /> */}
        </>
    )
}

export { SingleCol }