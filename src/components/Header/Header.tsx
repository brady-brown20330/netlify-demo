/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { App } from '@/types'
import { Link } from '@/components'
// import { Navigation } from '../Navigation'

function classNames (...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


function Header (props: App.Header) {
    const { logo, site_url, title, navigation } = props
    const [open, setOpen] = useState(false)

    return (
        <div className='sticky z-50 top-0 bg-white dark:bg-black'>
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
                                <div className='flex px-4 pb-2 pt-5'>
                                    <button
                                        type='button'
                                        className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className='sr-only'>Close menu</span>
                                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as='div' className='mt-2'>
                                    <div className='border-b border-gray-200' {...navigation?.$?.uid}>
                                        <Tab.List className='-mb-px flex flex-col items-start px-4'>
                                            {navigation?.main_menu.map((category) => (                                                
                                                <Tab
                                                    key={category?.main_link?.link_title}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'border-purple border-b-4 text-purple' : 'border-transparent text-gray-900 dark:!text-white outline-0',
                                                            'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium outline-0'
                                                        )
                                                    }
                                                >
                                                    {category?.main_link?.is_external_link 
                                                        ? <Link
                                                            url={category?.main_link?.external_link}
                                                            className='hover:border-purple hover:text-purple'
                                                        >
                                                            {category?.main_link?.link_title}
                                                        </Link>
                                                        : <Link
                                                            url={category?.main_link?.internal_link?.url}
                                                            className='hover:border-purple hover:text-purple'
                                                        >
                                                            {category?.main_link?.link_title}
                                                        </Link>}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {/* Secondary navigation for mobile tobe added in sprint 2*/}
                                        <></>
                                        {/* {navigation1.categories.map((category) => (
                                            <Tab.Panel key={category.name} className='space-y-12 px-4 py-6'>
                                                <div className='grid grid-cols-2 gap-x-4 gap-y-10'>
                                                    {category.featured.map((item) => (
                                                        <div key={item.name} className='group relative'>
                                                            <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75'>
                                                                <img src={item.imageSrc} alt={item.imageAlt} className='object-cover object-center' />
                                                            </div>
                                                            <a href={item.href} className='mt-6 block text-sm font-medium text-gray-900'>
                                                                <span className='absolute inset-0 z-10' aria-hidden='true' />
                                                                {item.name}
                                                            </a>
                                                            <p aria-hidden='true' className='mt-1 text-sm text-gray-500'>
                                Shop now
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Tab.Panel>
                                        ))} */}
                                    </Tab.Panels>
                                </Tab.Group>
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
                                    <div className='hidden lg:flex lg:flex-1 lg:items-center' {...logo?.$?.url}>
                                        <Link url={site_url}>
                                            <span className='sr-only'>{title}</span>
                                            <img
                                                className='h-8 w-auto m-2 ml-4'
                                                src={logo?.url}
                                                alt={title}
                                            />
                                        </Link>
                                    </div>

                                    <div className='hidden h-full lg:flex'  {...navigation?.$?.uid}>
                                        {/* Flyout menus */}
                                        <Popover.Group className='inset-x-0 bottom-0 px-4'>
                                            <div className='flex h-full justify-center space-x-8'>
                                                {navigation?.main_menu.map((category) => (
                                                    <Popover key={category?.main_link?.link_title} className='flex'>
                                                        {({ open }: any) => (
                                                            <>
                                                                <div className='relative flex'>
                                                                    <Popover.Button
                                                                        className={classNames(
                                                                            open
                                                                                ? 'border-purple text-purple'
                                                                                : 'border-transparent text-gray-700 dark:text-white hover:text-gray-800 outline-0',
                                                                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-0'
                                                                        )}
                                                                    >
                                                                        {category?.main_link?.is_external_link 
                                                                            ? <Link
                                                                                url={category?.main_link?.external_link}
                                                                                className='hover:border-purple hover:text-purple'
                                                                            >
                                                                                {category?.main_link?.link_title}
                                                                            </Link>
                                                                            : <Link
                                                                                url={category?.main_link?.internal_link?.url}
                                                                                className='hover:border-purple hover:text-purple'
                                                                            >
                                                                                {category?.main_link?.link_title}
                                                                            </Link>}
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
                                                                    <Popover.Panel className='absolute inset-x-0 top-full text-sm text-gray-500'>
                                                                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                        <div className='absolute inset-0 top-1/2 bg-white dark:bg-black shadow' aria-hidden='true' />

                                                                        <div className='relative bg-white dark:bg-black h-1'>
                                                                            {/* in above css h-1 has tobe deleted for secondary navigation to appear */}
                                                                            <div className='mx-auto max-w-7xl px-8'>
                                                                                <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                                                                                    {/* Secondary navigation tobe added in sprint 2*/}
                                                                                    <></>
                                                                                    {/* {category.featured.map((item) => (
                                                                                        <div key={item.name} className='group relative'>
                                                                                            <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75'>
                                                                                                <img
                                                                                                    src={item.imageSrc}
                                                                                                    alt={item.imageAlt}
                                                                                                    className='object-cover object-center'
                                                                                                />
                                                                                            </div>
                                                                                            <a href={item.href} className='mt-4 block font-medium text-gray-900'>
                                                                                                <span className='absolute inset-0 z-10' aria-hidden='true' />
                                                                                                {item.name}
                                                                                            </a>
                                                                                            <p aria-hidden='true' className='mt-1'>
                                                                                            Shop now
                                                                                            </p>
                                                                                        </div>
                                                                                    ))} */}

                                                                                </div>
                                                                            </div>
                                                                        </div>
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
                                    <a href={site_url} className='lg:hidden'>
                                        <span className='sr-only'>{title}</span>
                                        <img
                                            src={logo?.url}
                                            alt={title}
                                            className='h-8 w-auto'
                                        />
                                    </a>

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
