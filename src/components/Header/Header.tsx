/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, ChevronUpIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { App } from '@/types'
import { Link } from '@/components'
import { onEntryChange } from '@/config'
import { getAppConfigData } from '@/loaders'
import React from 'react'
// import { getHeader, getNavigation } from '@/loaders'
// import { Navigation } from '../Navigation'

function classNames (...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function Header (props: App.Header) {
    const [data, setData] = useState(props)
    const [open, setOpen] = useState(false)
    const [currPanel, setCurrPanel] = useState('')
    const { logo, main_navigation: navigation, $ } = data

    const handleMouseOver = (e: React.MouseEvent) => {
        const title=(e.target as HTMLElement).getAttribute('data-title')
        if(title && title !== null){
            setCurrPanel(title)
        }
    }

    const handleClose=()=>{
        // setCurrPanel('')
    }

    useEffect(() => {
        async function fetchData () {
            try {
                const entryRes = await getAppConfigData('en-us')
                entryRes && entryRes?.[0] && setData({...entryRes?.[0]})
                
            } catch (error) {
                console.error(error)
            }
        }
        onEntryChange(fetchData)
    }, [])

    return (
        <div className='sticky z-50 top-0 bg-white dark:bg-black' {...$?.title}>
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter='transition-opacity ease-linear duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition-opacity ease-linear duration-300'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 z-40 flex'>
                        <Transition.Child
                            as={Fragment}
                            enter='transition ease-in-out duration-300 transform'
                            enterFrom='-translate-x-full'
                            enterTo='translate-x-0'
                            leave='transition ease-in-out duration-300 transform'
                            leaveFrom='translate-x-0'
                            leaveTo='-translate-x-full'
                        >
                            <Dialog.Panel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-black pb-12 shadow-xl'>
                                <div className='border-b border-gray-200'>
                                    
                                    <div className='absolute pt-16 -mb-px flex flex-col items-start px-4 py-4 w-full'>
                                        {/* <button
                                        type='button'
                                        className='relative left-[90%] pt-16 '
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className='sr-only'>Close menu</span>
                                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                                    </button> */}
                                        {/* Links */}

                                        {navigation && navigation?.length > 0 && navigation?.[0]?.items?.map((item) => (
                                            item?.text 
                                                && <>
                                                    <div className={'flex items-center py-4 hover:!text-purple'}>
                                                        <Link
                                                            url={item?.link}
                                                            className={`${currPanel=== item?.text ? 'text-purple border-b-2 border-purple' : ''} hover:border-b-2 hover:border-purple`}
                                                        >
                                                            {item.text}
                                                        </Link>
                                                        { currPanel=== item?.text
                                                            ? <ChevronUpIcon
                                                                data-title={item?.text}
                                                                className='block h-4 px-4 text-purple cursor-pointer'
                                                                onClick={handleClose}
                                                            />
                                                            :<ChevronDownIcon
                                                                data-title={item?.text}
                                                                className='block h-4 px-4 cursor-pointer'
                                                                onClick={(e:React.MouseEvent) => {handleMouseOver(e)}}
                                                            />}
                                                        
                                                    </div>
                                                    <div className='flex flex-col items-start px-4'>
                                                        {item && item?.mega_menu?.[0]?.section?.map((sect, ind) => (
                                                            <div
                                                                key={`section-${ind}`}
                                                                className={`py-6 !items-start ${currPanel === item?.text ? '': 'hidden'}`}>
                                                                {sect?.title && <Link 
                                                                    url={sect?.link}
                                                                    className='font-medium text-base flex  items-start text-gray-900 hover:text-purple hover:underline'>
                                                                    {sect.title}
                                                                </Link>}
                                                                <ul
                                                                    role='list'
                                                                    aria-labelledby={`section-${ind}-heading-mobile`}
                                                                    className='mt-6 flex flex-col items-start space-y-6'
                                                                >
                                                                    {sect?.links?.map((subitem) => (
                                                                        subitem?.text && <li key={subitem.text} className='flow-root'>
                                                                            <Link url={subitem.link} className='-m-2 block p-2 text-gray-500 hover:text-purple hover:underline'>
                                                                                {subitem.text}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                        ))}
                                    </div>
                                </div>
                                   
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className='relative'>
                <nav aria-label='Top'>
                    {/* Top navigation */}
                    <div className='bg-white dark:bg-black'>
                        <div className='mx-auto max-w-7xl px-4 sm:px-0 lg:px-0'>
                            <div className='border-b border-gray-400 dark:border-gray-600'>
                                <div className='flex h-16 items-center justify-between'>
                                    {/* Logo (lg+) */}
                                    <div className='hidden lg:flex lg:flex-1 lg:items-center'>
                                        <Link url='/'>
                                            <span className='sr-only'>Site Logo</span>
                                            <img
                                                className='h-8 w-auto m-2 ml-4'
                                                src={logo?.url}
                                                alt={logo?.title}
                                            />
                                        </Link>
                                    </div>

                                    <div className='hidden h-full items-center lg:flex' onMouseLeave={handleClose}>
                                        {/* Flyout menus */}
                                        <Popover.Group className='inset-x-0 bottom-0 px-4'>
                                            <div className='flex justify-center space-x-8'>
                                                {navigation?.[0]?.items?.map((item, i) => (
                                                    <Popover key={item?.text} className='flex'>
                                                        {() => (
                                                            <>
                                                                <div
                                                                    className='relative flex'
                                                                    data-title={item?.text}
                                                                    onMouseOver = {(e:React.MouseEvent) => handleMouseOver(e)}
                                                                >
                                                                    <Link
                                                                        url={item?.link}
                                                                        className={classNames(
                                                                            currPanel == item?.text ? 'border-b-2 border-purple text-purple' : '',
                                                                            'relative z-10 text-black py-5 transition-colors duration-200 ease-out'
                                                                        )}
                                                                        data-title={item?.text}
                                                                    >
                                                                        {item?.text}
                                                                    </Link>
                                                                </div>

                                                                <Transition
                                                                    show={currPanel !== '' ? true : false}
                                                                    as={Fragment}
                                                                    enter='transition ease-out duration-200'
                                                                    enterFrom='opacity-0'
                                                                    enterTo='opacity-100'
                                                                    leave='transition ease-in duration-150'
                                                                    leaveFrom='opacity-100'
                                                                    leaveTo='opacity-0'
                                                                >
                                                                    <Popover.Panel className={`absolute inset-x-0 top-full text-sm text-gray-500 ${item?.text === currPanel ? 'block': 'hidden'}`}>
                                                                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                        <div className='absolute inset-0 top-1/2 bg-white dark:bg-black shadow' aria-hidden='true' />

                                                                        {item && item?.mega_menu?.[0]?.section?.length 
                                                                            ? <div className='relative bg-white dark:bg-black'>
                                                                                {/* in above css h-1 has tobe deleted for secondary navigation to appear */}
                                                                                <div className='mx-auto max-w-7xl px-8'>
                                                                                    <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                                                                                        {item && item?.mega_menu?.[0]?.section?.map((sect, ind) => (
                                                                                            <div key={`section-${ind}`}>
                                                                                                {sect?.title && <Link 
                                                                                                    url={sect?.link}
                                                                                                    className='font-medium text-base text-gray-900 hover:text-purple hover:underline'>
                                                                                                    {sect.title}
                                                                                                </Link>}
                                                                                                <ul
                                                                                                    role='list'
                                                                                                    aria-labelledby={`section-${ind}-heading-mobile`}
                                                                                                    className='mt-6 flex flex-col space-y-6'
                                                                                                >
                                                                                                    {sect?.links?.map((subitem) => (
                                                                                                        subitem?.text && <li key={subitem.text} className='flow-root'>
                                                                                                            <Link url={subitem.link} className='-m-2 block p-2 text-gray-500 hover:text-purple hover:underline'>
                                                                                                                {subitem.text}
                                                                                                            </Link>
                                                                                                        </li>
                                                                                                    ))}
                                                                                                </ul>
                                                                                            </div>
                                                                                        ))}

                                                                                    </div>
                                                                                </div>
                                                                            </div> 
                                                                            : <></>
                                                                        }
                                                                    </Popover.Panel>
                                                                </Transition>
                                                            </>
                                                        )}
                                                    </Popover>
                                                ))}
                                            </div>
                                        </Popover.Group>
                                    </div>

                                    {/* Mobile menu and search (lg-) */}
                                    <div className='flex flex-1 items-center lg:hidden'>
                                        <button
                                            type='button'
                                            className='rounded-md bg-white dark:bg-black p-2 text-gray-400 dark:text-white'
                                            onClick={() => setOpen(true)}
                                        >
                                            <span className='sr-only'>Open menu</span>
                                            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                                        </button>
                                    </div>

                                    {/* Logo (lg-) */}
                                    <Link url='/' className='lg:hidden'>
                                        <span className='sr-only'>Site Logo</span>
                                        <img
                                            src={logo?.url}
                                            alt={logo?.title}
                                            className='h-8 w-auto'
                                        />
                                    </Link>

                                    <div className='flex flex-1 items-center justify-end'>
                                        <div className='flex items-center lg:ml-8'>
                                            <div className='ml-4 flow-root lg:ml-8'>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export { Header }
