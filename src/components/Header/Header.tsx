/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { App } from '@/types'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
// import { Navigation } from '../Navigation'

export default function Header (props: App.Header) {
    // console.log('🚀 ~ file: Header.tsx:9 ~ Header ~ props:', props.navigation)
    const { logo, site_url, title, navigation } = props
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    function classNames (...classes:string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <header className='relative sticky border-b border-gray-200 top-0 z-50'>
            <nav aria-label='Top' className='max-w-7xl sm:px-6 lg:px-8 w-full'>
                <div className='flex px-4 pb-14 sm:px-0 sm:pb-0 w-full'>
                    <div className='flex h-16 items-center w-full justify-between'>
                        {/* Logo */}
                        <div className='flex flex-1'>
                            {logo && <a href={site_url}>
                                {title && <span className='sr-only'>{title}</span>}
                                <img
                                    className='h-8 w-auto mx-2'
                                    src={logo?.url}
                                    alt={logo?.title}
                                />
                            </a>} 
                        </div>

                        {/* Flyout menus */}
                        <Popover.Group className='absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch'>
                            <div className='flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0'>
                                {navigation?.main_menu.map((item) => (
                                    <Popover key={item?.main_link?.title} className='flex'>
                                        {({ open }) => (
                                            <>
                                                <div className='relative flex w-24 mx-2'>
                                                    <Popover.Button
                                                        className={classNames(
                                                            open
                                                                ? 'border-indigo-600 text-indigo-600'
                                                                : 'border-transparent text-gray-700 hover:text-gray-800',
                                                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-0'
                                                        )}
                                                    >
                                                        {item?.main_link?.title}
                                                    </Popover.Button>
                                                </div>
                                                
                                                <Transition
                                                    as={Fragment}
                                                    enter='transition ease-out duration-200'
                                                    enterFrom='opacity-0'
                                                    enterTo='opacity-100'
                                                    leave='transition ease-in duration-150'
                                                    leaveFrom='opacity-100'
                                                    leaveTo='opacity-0'
                                                >
                                                    <Popover.Panel className='absolute inset-x-0 top-full text-gray-500 sm:text-sm'>
                                                        {/* <>Sub Navigation to be added in Sprint2</> */}
                                                        {/* <Navigation main_menu={item} /> */}
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                ))}
                            </div>
                        </Popover.Group>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export { Header }
