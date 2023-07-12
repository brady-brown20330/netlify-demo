import { App } from '@/types'
import React, { useState, useEffect } from 'react'
import { Link, isFooterValid } from '@/components'
import { onEntryChange } from '@/config'
import { getAppConfigData } from '@/loaders'
import parse from 'html-react-parser'

export const Footer:React.FC<App.Footer> = (props:App.Footer) => {
    const [data, setData] = useState<App.Footer>(props)
    const locale = props?.locale || 'en-us'
    const { sections, copyright_info , $ } = data

    useEffect(() => {
        async function fetchData () {
            try {
                const footerData = await getAppConfigData(locale)
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                footerData?.[0]?.footer_navigation?.[0] ? setData(footerData?.[0]?.footer_navigation?.[0]) : setData({})
                
            } catch (error) {
                console.error(error)
            }
        }
        onEntryChange(fetchData)
    }, [locale])
    
    return (
        <footer aria-labelledby='footer-heading'>
            <h2 id='footer-heading' className='sr-only'>
          Footer
            </h2>
            {isFooterValid(data) && <div className='mx-auto max-w-7xl  py-8  border-t border-gray-300 '>
                <div className='px-6 lg:px-8 lg:grid lg:grid-cols-6 lg:gap-8'>
                    <span />
                    <div className='py-2 grid sm:grid-cols-4 gap-8 lg:col-span-4 grid-rows-2 sm:grid-rows-1 grid-cols-2' {...$?.title} >
                        {sections?.map((navItem, index: number) => <div
                            className='ml-0 sm:ml-4 md:ml-8'
                            key={`footer-section-${index}`}
                        >
                            {navItem?.title ? <h3 
                                className='text-sm font-semibold leading-6'
                            >
                                <Link
                                    url={navItem?.link}
                                >
                                    {navItem?.title}
                                </Link>
                            </h3>: <>&nbsp;</>}
                            <ul 
                                role='list' 
                                className='mt-6 space-y-6'
                            >
                                {navItem?.links?.map((item, i: number) => (
                                    item?.text && <li
                                        key={`footer-links-${index}-${i}`}
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

                        </div>)}
                    </div>
                </div>
                {
                    copyright_info && copyright_info !== ''
                        && <div className='mt-8 border-t border-gray-300 pt-8 text-center px-6 lg:px-8 text-gray-500'>
                            <div  {...$?.copyright_info}> {parse(copyright_info)}</div>
                        </div>
                }
            </div>}
        </footer>
    )
}  