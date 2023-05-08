
import React from 'react'

function classNames (...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface SingleColProps {
  Header?: React.FC
  Footer?: React.FC
  Hero?: React.FC
  children: React.ReactNode
}

const SingleCol: React.FC<SingleColProps> = ({ Header, Footer, Hero, children }: React.PropsWithChildren<SingleColProps>) => {
  
    return (
        <div className='bg-white'>
            {/* Navigation */}
            {/* Hero section */}

            <main className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                {children}
            </main>

            {/* footer  */}
        </div>
    )
}

export { SingleCol }