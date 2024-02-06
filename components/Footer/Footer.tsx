'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { App } from '@/types'
import { isFooterValid, Link } from '@/components'

export const Footer: React.FC<App.Footer> = (props: App.Footer) => {
    const { sections }: any = props

    // ? Method to render the Region Links column
    const renderFooterLinks = () => {
        const chunkedArray = []
        for (let i = 0; i < sections?.length; i += 2) {
            const chunk = sections.slice(i, i + 2)
            chunkedArray.push(chunk)
        }

        const renderLinks = (links: any) => {
            return links?.map((link: any, index:number) => {
                return (
                    <li key={`link-${index}`}>
                        {
                            link?.link?.[0]?.url
                                ? (
                                    <Link
                                        url={link?.link?.[0]?.url || link?.external_link?.url}
                                        className='text-sm leading-6 text-gray-700 hover:font-bold'
                                        target={link?.external_link?.url && link?.external_link?.url?.charAt(0) !== '/' ? '_blank' : '_self'}
                                    >
                                        {link?.text}
                                    </Link>
                                )
                                : (
                                    <Link
                                        url={link?.external_link?.href}
                                        className='text-sm leading-6 text-gray-700 hover:font-bold'
                                        target={link?.external_link?.href?.charAt(0) !== '/' ? '_blank' : '_self'}
                                    >
                                        {link?.text || link?.external_link?.title}
                                    </Link>
                                )
                        }
                    </li>

                )

            })

        }

        const renderLinkColumns = (chunk: any) => {
            return chunk?.map((link: any, index: number) => {
                return (
                    <div className='mb-10 md:mb-0' key={`footer-col-${index}`}>
                        <h3 className='text-sm font-semibold leading-6 text-black font-systemUI'>{link.title}</h3>
                        <ul role='list' className='mt-6 space-y-4'>
                            {
                                renderLinks(link?.links)
                            }
                        </ul>
                    </div>
                )
            })
        }

        return chunkedArray?.map((chuck: any, index:number) => {
            return (
                <div className='gap-8 md:grid md:grid-cols-2 md:gap-8' key={`chunk-${index}`}>
                    {renderLinkColumns(chuck)}
                </div>
            )
        })

    }

    return (
        <footer
            aria-labelledby='footer-heading'
            className='bg-[#F3f3f3] mt-16'
            id='footer-component'
        >
            <h2 id='footer-heading' data-id='h2-text' className='sr-only'>
                Footer
            </h2>
            {isFooterValid(props) && <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-24'>
                <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
                    {
                        props?.logo?.title
                        && <div className='flex flex-row mt-0 mb-0 items-start justify-start sm:items-start sm:justify-start'>
                            <Link url='/'>
                                <span className='sr-only'>Site Logo</span>
                                <img
                                    className='h-12 w-auto'
                                    // src={props?.logo?.url}
                                    src='https://images.contentstack.io/v3/assets/blt16efa74d600de969/blt4769e838a9f5e9f2/6515d89d549cbd83e7b9eea7/compass-logo-v3c.png?branch=uat'
                                    alt={props?.logo?.title}
                                    {...props?.logo?.$?.url}
                                />
                            </Link>
                        </div>
                    }
                    <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 font-systemUI'>
                        {renderFooterLinks()}
                    </div>
                </div>
            </div>
            }
            <div className='mx-auto max-w-7xl border-t border-gray-900/10 w-full px-6 pt-4 pb-8 md:pt-4 md:pb-4'>
                <span className='text-gray-700'>
                    ©  {new Date().getFullYear()}. Contentstack All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}  