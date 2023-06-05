import { App } from '@/types'
import React, { useEffect, useState } from 'react'
import { Link } from '@/components'
import { onEntryChange } from '@/config'
// import { getFooter } from '@/loaders'

export const Footer:React.FC<App.Footer> = (props:App.Footer) => {
    const [data, setData] =useState(props)
    const { main_menu , $} = data

    // useEffect(() => {
    //     async function fetchData () {
    //         try {
    //             const entryRes = await getFooter('en-us')
    //             setData(entryRes?.[0] || null)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     onEntryChange(fetchData)
    // }, [])
    
    const resolveLink = (link:App.menuLink) => {
        return link?.is_external_link ? link?.external_link : link?.internal_link?.url
    }
    
    return (
        <footer className='dark:bg-black' aria-labelledby='footer-heading'>
            <h2 id='footer-heading' className='sr-only'>
          Footer
            </h2>
            <div className='container border-t border-gray-400 dark:border-gray-600'>
                <div className='px-4 sm:px-6 lg:px-8'>
                        
                    <div className='mx-auto mt-16 max-w-5xl' {...$?.uid}>
                        <div className='flex justify-start flex-wrap md:justify-between'>
                            {main_menu?.map((navItem, index) => <>
                                <div
                                    key={`navItem-${index}`}
                                    className={`mb-16 ${main_menu?.length > 5 ? 'md:w-32 w-40' : 'w-44'}`}
                                > 
                                    {navItem?.main_link?.link_title && <h3 
                                        className='text-md font-medium text-gray-900 dark:text-white'
                                    >
                                        <Link
                                            url={resolveLink(navItem?.main_link)}
                                        >
                                            {navItem.main_link.link_title}
                                        </Link>
                                    </h3>}
                                    <ul 
                                        role='list' 
                                        className='mt-6 space-y-6'
                                    >
                                        {navItem?.sub_menu?.map((item, i:number) => (
                                            item?.sub_link?.link_title && <li
                                                key={`submenu-${index}-${i}`}
                                                className='text-sm'>
                                                <Link
                                                    url={resolveLink(item?.sub_link)}
                                                    className='text-gray-500 hover:text-gray-600 dark:text-white'
                                                >
                                                    {item.sub_link.link_title}
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
  