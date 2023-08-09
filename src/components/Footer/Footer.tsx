/* eslint-disable @next/next/no-img-element */
import { App } from '@/types'
import React from 'react'
import { Link, isFooterValid } from '@/components'
import parse from 'html-react-parser'

export const Footer: React.FC<App.Footer> = (props: App.Footer) => {
    const { sections, copyright_info, $ } = props || {}

    return (
        <footer aria-labelledby='footer-heading'>
            <h2 id='footer-heading' className='sr-only'>
                Footer
            </h2>
            {isFooterValid(props) && <div className='mx-auto max-w-7xl pt-0 pb-[30px] border-t border-gray-300 '>
                <div className='w-full'>
                    <div className='md:mx-auto max-w-2xl px-6 sm:py-[51px] lg:px-8'>
                        <div className='flex flex-col items-start justify-start mt-5 mb-10 gap-[14px] sm:gap-10 sm:flex-row sm:items-start sm:justify-center sm:my-0' {...$?.title}>
                            {
                                props?.logo?.title
                                && <div className='flex flex-row items-center justify-start mt-[20px] mb-[26px] sm:mt-0 sm-mb-0 sm:items-start sm:justify-center'>
                                    <Link url='/'>
                                        <span className='sr-only'>Site Logo</span>
                                        <img
                                            className='h-[38.4px] w-[43.2px]'
                                            src={props?.logo?.url}
                                            alt={props?.logo?.title}
                                            {...props?.logo?.$?.url}
                                        />
                                    </Link>
                                </div>
                            }
                            {
                                sections?.map((navItem, index: number) => {
                                    return (
                                        <div
                                            className=''
                                            key={`footer-section-${index}`}
                                        >
                                            {navItem?.title ? <p
                                                className='text-sm font-bold leading-6 mb-[23px]'
                                            >
                                                <Link
                                                    url={navItem?.link}
                                                    className='text-base text-sm leading-[18px] text-[#254143]'
                                                >
                                                    {navItem?.title}
                                                </Link>
                                            </p> : <p
                                                className='text-base text-sm leading-[18px] text-[#254143] mb-5 min-h-[1.5rem]'
                                            >
                                                <Link
                                                    url={navItem?.link}
                                                >

                                                </Link>
                                            </p>}
                                            <ul
                                                role='list'
                                                className=''
                                            >
                                                {navItem?.links?.map((item, i: number) => (
                                                    item?.text && <li
                                                        key={`footer-links-${index}-${i}`}
                                                        className='text-sm'>
                                                        <Link
                                                            url={item?.link?.[0]?.url}
                                                            className='text-sm font-normal leading-[18px] text-[#254143] dark:text-white'
                                                        >
                                                            {item?.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className='mt-0 sm:mt-0 border-t border-gray-900/10 pt-2 flex flex-col items-start justify-start gap-2 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-0 px-6 sm:px-4 xl:px-0'>
                        {
                            copyright_info && copyright_info !== ''
                            && <div  {...$?.copyright_info} className='text-[#254143] text-xs xl:text-sm leading-[18px]'> {parse(copyright_info)}</div>
                        }
                        <div className='flex space-x-3 text-[#254143] text-xs xl:text-sm leading-[18px]'>
                            <a href='https://www.contentstack.com/legal/' target='_blank' rel='noreferrer'>Legal</a>
                            <p className='text-gray-500'>|</p>
                            <a href='https://www.contentstack.com/legal/terms-of-service/' target='_blank' rel='noreferrer'>Terms</a>
                            <p className='text-gray-500'>|</p>
                            <a href='https://www.contentstack.com/legal/privacy/' target='_blank' rel='noreferrer'>Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
            }
        </footer>
    )
}  