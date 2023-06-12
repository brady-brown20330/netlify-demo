import { App } from '@/types'
import React, { useState, useEffect } from 'react'
import { Link } from '@/components'
import { onEntryChange } from '@/config'
import { getAppConfigData } from '@/loaders'

export const Footer:React.FC<App.Footer> = (props:App.Footer) => {
    const [data, setData] = useState(props)
    const locale = props?.locale || 'en-us'
    const { section , $ } = data

    useEffect(() => {
        async function fetchData () {
            try {
                const footerData = await getAppConfigData(locale)
                setData(footerData?.[0]?.footer_navigation?.[0] || {})
                
            } catch (error) {
                console.error(error)
            }
        }
        onEntryChange(fetchData)
    }, [])
    
    return (
        <footer className='dark:bg-black' aria-labelledby='footer-heading'>
            <h2 id='footer-heading' className='sr-only'>
          Footer
            </h2>
            <div className='container border-t border-gray-400 dark:border-gray-600'>
                <div className='px-4 sm:px-6 lg:px-8'>
                        
                    <div className='mx-auto mt-16 max-w-5xl' {...$?.uid}>
                        <div className='flex justify-start flex-wrap md:justify-between'>
                            {section?.map((navItem, index) => <>
                                <div
                                    key={`navItem-${index}`}
                                    className={`mb-16 ${section?.length > 5 ? 'md:w-32 w-40' : 'w-44'}`}
                                > 
                                    {navItem?.title && <h3 
                                        className='text-md font-medium text-gray-900 dark:text-white'
                                    >
                                        <Link
                                            url={navItem?.link}
                                        >
                                            {navItem?.title}
                                        </Link>
                                    </h3>}
                                    <ul 
                                        role='list' 
                                        className='mt-6 space-y-6'
                                    >
                                        {navItem?.links?.map((item, i:number) => (
                                            item?.text && <li
                                                key={`submenu-${index}-${i}`}
                                                className='text-sm'>
                                                <Link
                                                    url={item?.link?.[0]?.url}
                                                    className='text-gray-500 hover:text-gray-600 dark:text-white'
                                                >
                                                    {item?.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </>)}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}  