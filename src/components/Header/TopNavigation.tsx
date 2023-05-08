
import _ from 'lodash'
import React, {  } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const currencies = ['USD', 'CAD', 'AUD', 'EUR', 'GBP']

const TopNavigation: React.FC<any> = (props: any) => {  

    return (
        <>
            <nav aria-label='utility navigation'>
                <div className='bg-white'>
                    <div className='mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
                        {/* Currency selector */}
                        <form>
                            <div>
                                <label htmlFor='desktop-currency' className='sr-only'>
                  Currency
                                </label>
                                <div className='group relative -ml-2 rounded-md border-transparent bg-gray-300 focus-within:ring-2 focus-within:ring-white'>
                                    <select
                                        id='desktop-currency'
                                        name='currency'
                                        // eslint-disable-next-line max-len
                                        className='flex items-center rounded-md border-transparent bg-gray-200 bg-none py-0.5 pl-2 pr-5 text-sm font-light text-gray-500 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-900'
                                    >
                                        {currencies.map((currency) => (
                                            <option key={currency}>{currency}</option>
                                        ))}
                                    </select>
                                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center'>
                                        <ChevronDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className='flex items-center space-x-6'>
                            <a href='#' className='text-sm font-light text-gray-500 hover:text-gray-900'>
                Sign in
                            </a>
                            <a href='#' className='text-sm font-light text-gray-500 hover:text-gray-900'>
                Create an account
                            </a>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

export { TopNavigation }