const Hero = () => {
    return (<>
        <div className='relative my-16  max-w-7xl mx-auto'>
            <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8'>
                <div className='px-6 pb-6 pb-12 pt-4 sm:pb-16 lg:px-0 lg:pt-0 lg:pb-4 lg:col-span-7 xl:col-span-6'>
                    <div className='mx-auto max-w-2xl lg:mx-0'>
                        
                        <h1 className='xl:mt-0 mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:mt-0 sm:text-6xl dark:text-white'>
                      Data to enrich your online business
                        </h1>
                        <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                      fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className='mt-10 flex items-center gap-x-6'>
                            <a
                                href='#'
                                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                focus-visible:outline-indigo-600'
                            >
                        Get started
                            </a>
                            <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
                        Learn more <span aria-hidden='true'>→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-4'>
                    <img
                        className='xl:aspect-[3] aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full xl:pl-5'
                        src='https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80'
                        alt=''
                    />
                </div>
            </div>
        </div>

        <div className='relative my-16 max-w-7xl mx-auto'>
            <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12'>
                <div className='lg:col-span-5 xl:col-span-6'>
                    <img
                        className='xl:aspect-[3] aspect-[3/2] w-full bg-gray-50 object-cover lg:inset-0 lg:aspect-auto lg:h-full'
                        src='https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80'
                        alt=''
                    />
                </div>
                <div className='relative lg:col-span-7 xl:col-span-6 px-6 pb-6 pb-12 pt-4 sm:pt-16 lg:px-0 lg:pt-0 lg:pb-8'>
                    <div className='mx-auto max-w-2xl lg:ml-8 '>
                        
                        <h1 className='xl:mt-0 mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:mt-0 sm:text-6xl dark:text-white'>
                      Data to enrich your online business
                        </h1>
                        <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                      fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className='mt-10 flex items-center gap-x-6'>
                            <a
                                href='#'
                                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                focus-visible:outline-indigo-600'
                            >
                        Get started
                            </a>
                            <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
                        Learn more <span aria-hidden='true'>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
        
    )
}

export {Hero}
