import { App } from '@/types'
import React from 'react'

export const Footer:React.FC<App.Footer> = (props:App.Footer) => {
    const { main_menu , $} = props
    
    return (
        <footer className='dark:bg-balck' aria-labelledby='footer-heading'>
            <h2 id='footer-heading' className='sr-only'>
          Footer
            </h2>
            <div className='container'>
                <div className='border-t border-gray-200 px-4 sm:px-6 lg:px-8'>
                        
                    <div className='mx-auto mt-16 max-w-5xl' {...$?.uid}>
                        <div className='flex justify-start flex-wrap md:justify-between'>
                            {main_menu.map((navItem, index) => <>
                                <div
                                    key={`navItem-${index}`}
                                    className={`mb-16 ${main_menu?.length > 5 ? 'md:w-32 w-40' : 'w-44'}`}
                                > 
                                    {/*  */}
                                    {navItem?.main_link?.title && <h3 
                                        className='text-md font-medium text-gray-900 dark:text-white'
                                    >
                                        {navItem.main_link.title}
                                    </h3>}
                                    <ul 
                                        role='list' 
                                        className='mt-6 space-y-6'
                                    >
                                        {navItem?.sub_menu?.map((item, i:number) => (
                                            item?.link?.title && <li
                                                key={`submenu-${index}-${i}`}
                                                className='text-sm'>
                                                <a 
                                                    href={item.link.href}
                                                    className='text-gray-500 hover:text-gray-600 dark:text-white'>
                                                    {item.link.title}
                                                </a>
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
  