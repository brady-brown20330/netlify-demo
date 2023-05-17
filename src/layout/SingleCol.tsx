
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


            <main className='mx-auto dark:text-white dark:bg-black' >
                {children}
            </main>

            {/* footer  */}
            {/* <Footer /> */}
        </>
    )
}

export { SingleCol }