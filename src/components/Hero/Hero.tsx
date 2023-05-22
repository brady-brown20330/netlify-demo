/* eslint-disable react/prop-types */
import { Component } from '@/types'
import { Link } from '../Link'

const Hero = (props:Component.Hero) => {
    const { heading, paragraph, image_position, cta, $ } = props

    const TextBlock = () => (
        <div className={`mx-auto max-w-2xl ${image_position === 'Left' ? 'lg:ml:0 ' : 'lg:ml-8' }`}>
                        
            {heading && <h1 className='xl:mt-0 mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:mt-0 sm:text-6xl dark:text-white'>
                {heading}
            </h1>}
            {paragraph && <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
                {paragraph}
            </p>}
            {cta?.title && <div className='mt-10 flex items-center gap-x-6'>
                <Link
                    url={cta?.landing_page}
                    className='btnPrimary px-6 py-2.5 '
                >
                    {cta.title}
                </Link>
            </div>}
        </div>)


    return (<>
        {image_position === 'Left' ? <div className='container mb-16 mt-8 p-8 xl:p-0 xl:mt-16 sm:p-0 lg:p-8 pb-0'>
            <div 
                className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8' 
                {...$?.heading}
            >
                <div className='px-6 pb-6 pb-12 pt-4 sm:pb-16 lg:px-0 lg:pt-0 lg:pb-4 lg:col-span-7 xl:col-span-6'>
                    <TextBlock />
                </div>
                <div className='relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2'>
                    <img
                        className='xl:aspect-[3] aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full xl:pl-5 dark:bg-black'
                        src='https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80'
                        alt=''
                    />
                </div>
            </div>
        </div>
            : <div className='container my-16 p-8 xl:p-0 sm:p-0 lg:p-8'>
                <div
                    className='mx-auto max-w-7xl lg:grid lg:grid-cols-12'
                    {...$?.heading}
                >
                    <div className='lg:col-span-5 xl:col-span-6'>
                        <img
                            className='xl:aspect-[3] aspect-[3/2] w-full bg-gray-50 object-cover lg:inset-0 lg:aspect-auto lg:h-full'
                            src='https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80'
                            alt=''
                        />
                    </div>
                    <div className='relative lg:col-span-7 xl:col-span-6 px-6 pb-6 pb-12 pt-4 sm:pt-16 lg:px-0 lg:pt-0 lg:pb-8'>
                        <TextBlock />
                    </div>
                </div>
            </div>}
    </> 
    )
}

export {Hero}
