/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useEffect } from 'react'
import { App } from '@/types'
import { Carousel, Link, CTAGroup } from '@/components'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'

function Header (props: App.Header) {
    const [data] = useState(props)
    const { logo, main_navigation: navigation } = data
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [Opac, setOpac] = useState(true)
    const [currPanel, setCurrPanel] = useState('')
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const isHome:boolean = (pathname === '/') ? true : false 

    const listenScrollEvent = () => {
        if(window?.scrollY > 0)
            setOpac(false)
        else
            setOpac(true)
    }

    useEffect(() => {
        const top = document.querySelector('.teaser-container')?.getBoundingClientRect()?.top
        if( top && top < 100) {
            setOpac(true)
        }

        window.addEventListener('scroll', listenScrollEvent)
        return () => {
            window.removeEventListener('scroll', listenScrollEvent)
        }
    }, [])

    const handleMouseOver = (e: React.MouseEvent) => {
        const title = (e.target as HTMLElement).getAttribute('data-title')
        if (title && title !== null) {
            setCurrPanel(title)
        }
    }

    const resetNav = () => {
        setCurrPanel('')
    }

    const handleClose = (e: React.MouseEvent) => {
        const boundingRect = document.querySelector('.panel.block')?.getBoundingClientRect()
        let isSectionActive = false
        boundingRect && (e.clientY < boundingRect?.bottom) ? isSectionActive = true : isSectionActive = false
        !isSectionActive && resetNav()
    }

    const resetMobileNav = () => {
        setOpen(false)
    }


    return (
        <header id='header-component' className={`${isHome ? 'mt-[-80px]' : ''} bg-white sticky top-0 z-50 hover:bg-white ${(!Opac) ? 'bg-opacity-100' : 'bg-opacity-20'}`}>
            <nav className='mx-auto flex items-center justify-between px-4 py-5 lg:px-8' aria-label='Global'>
                <div className='flex lg:flex-1'>
                    {logo?.url && <Link url='/' className='-m-1.5 ml-1.5 p-1.5'>
                        <span className='sr-only'>Site Logo</span>
                        <img
                            className='h-8 w-auto'
                            src={logo?.url}
                            alt={logo?.title}
                            {...logo?.$?.url}
                        />
                    </Link>}
                </div>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                        onClick={() => {
                            setMobileMenuOpen((prevState) => !prevState)
                        }}
                    >
                        <span className='sr-only'>Open main menu</span>
                        {!mobileMenuOpen && <Bars3Icon className='h-6 w-6' aria-hidden='true' />}
                    </button>
                </div>

                {/* DESKTOP MENU */}
                <Popover.Group className='hidden lg:flex lg:gap-x-12'>
                    {navigation?.[0]?.items?.map((item, itemInd) => (
                        item?.mega_menu?.length ? <Popover key={item.text} data-id={`navItem-${itemInd}`}>
                            <Popover.Button className='flex items-center gap-x-1 text-m font-semibold leading-6 text-gray-900 outline-none'>
                                {item.text}
                                <ChevronDownIcon className='h-5 w-5 flex-none text-gray-900' aria-hidden='true' />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0 -translate-y-1'
                                enterTo='opacity-100 translate-y-0'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100 translate-y-0'
                                leaveTo='opacity-0 -translate-y-1'
                            >
                                <Popover.Panel 
                                    className='absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 opacity-100 translate-y-0'
                                >
                                    {item?.mega_menu?.[0]?.sections?.[0]?.links?.length && <div className='px-8'>
                                        <Carousel
                                            className='mx-auto px-6 xl:pr-0 xl:pl-8 py-10'
                                        >
                                            {item?.mega_menu?.[0]?.sections?.[0]?.links?.map((linkData, ind) => (
                                                <div 
                                                    key={linkData?.text}
                                                    className={'mb-8 mt-4 w-72 xl:w-40 xl:pr-8 pr-14'}
                                                    data-id={`navItem-${itemInd}-card-${ind}`}
                                                >
                                                    <div {...linkData?.$?.text}>
                                                        {linkData?.text && <p
                                                            data-id='paragraph-text'
                                                            className='font-semibold text-gray-900 text-m mb-4'
                                                        >{linkData.text}
                                                        </p>}
                                                        <Link
                                                            url={linkData?.link?.[0]?.url}
                                                            className='flex flex-col outline-none'
                                                        >
                                                            {linkData?.thumbnail?.url && <img
                                                                src={linkData.thumbnail.url} className='object-cover h-40'
                                                                alt={linkData?.thumbnail?.title}></img>
                                                            }
                                                            {linkData?.link?.[0]?.url && <span
                                                                className='mt-4 font-light inline'
                                                            >
                                                                Visit <ChevronRightIcon className='h-4 my-auto inline-block mb-1' />
                                                            </span>}
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>}
                                    {item?.mega_menu?.[0]?.cta_group?.[0] && CTAGroup(item.mega_menu[0].cta_group[0])}
                                </Popover.Panel>
                            </Transition>
                        </Popover> : <>
                            {item?.link?.[0]?.url && <Link 
                                url={item.link[0].url}
                                className='flex items-center gap-x-1 text-m font-semibold leading-6 text-gray-900 outline-none'
                            >
                                {item.text}
                            </Link>}
                        </>
                    ))}
                </Popover.Group>
            </nav>

            {/* MOBILE MENU */}
            <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className='fixed inset-0 z-10' />
                <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between'>
                        <div />
                        <button
                            type='button'
                            className='-m-2.5 rounded-md p-2.5 text-gray-700'
                            onClick={() => {
                                setMobileMenuOpen(false)
                                resetNav()
                            }}
                        >
                            <span className='sr-only'>Close menu</span>
                            {mobileMenuOpen && <XMarkIcon className='h-6 w-6' aria-hidden='true' />}
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <div className='space-y-2 py-6'>
                                <Disclosure as='div' className=''>

                                    
                                    {navigation && navigation?.length > 0 && navigation?.[0]?.items?.map((item, i: number) => (
                                        item?.text
                                        && <Fragment key={`mobile-navItem-${i}`}>
                                            <div
                                                className={' flex justify-between items-center py-2 pr-3'}
                                                data-id={`menuItem-${i}`}
                                            >
                                                <Link
                                                    url={item?.link}
                                                    className={`${currPanel === item?.text ? '' : 'text-[#253143]'} block ml-6 mr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50`}
                                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                    // @ts-ignore
                                                    $={{...item?.$?.text}}
                                                >
                                                    {item.text}
                                                </Link>
                                                {item && item?.mega_menu?.[0]?.sections && item?.mega_menu?.[0]?.sections?.length > 0 && <>
                                                    {currPanel === item?.text
                                                        ? <ChevronUpIcon
                                                            data-title={item?.text}
                                                            className='block h-4 cursor-pointer'
                                                            onClick={handleClose}
                                                        />
                                                        : <ChevronDownIcon
                                                            data-title={item?.text}
                                                            className='block h-4 cursor-pointer'
                                                            onClick={(e: React.MouseEvent) => { handleMouseOver(e) }}
                                                        />}
                                                </>}

                                            </div>
                                            <div className='flex flex-col items-start px-4 w-full'>
                                                {item && item?.mega_menu?.[0]?.sections?.map((sect, ind) => (
                                                    <div
                                                        key={`section-${ind}`}
                                                        data-id={`section-${ind}`}
                                                        className={`!items-start w-full ${currPanel === item?.text ? '' : 'hidden'}`}
                                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                        // @ts-ignore
                                                        {...sect?.$?.title}
                                                    >
                                                        <div onClick={resetMobileNav}>
                                                            {sect?.title && <Link
                                                                url={sect?.link}
                                                                className='font-medium text-base flex items-start text-gray-900 pt-2'>
                                                                {sect.title}
                                                            </Link>}
                                                        </div>
                                                        <ul
                                                            role='list'
                                                            aria-labelledby={`section-${ind}-heading-mobile`}
                                                            className='flex flex-col items-start space-y-3'
                                                        >
                                                            {sect?.links?.map((subitem) => (
                                                                subitem?.text && <li key={subitem.text} className=''>
                                                                    <div onClick={resetMobileNav}>
                                                                        <Link url={subitem.link} className='-m-2 block p-2 pl-10 text-[#253143] text-[16.071px] text-justify font-normal leading-normal hover:underline'>
                                                                            {subitem.text}
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </Fragment>
                                    ))}

                                    {/* STATIC DATA - NEEDS TO BE ADDED IN CMS */}
                                    {navigation && navigation?.length > 0 && navigation?.[0]?.items?.map((item, i: number) => (
                                        <>
                                            {(item?.text === currPanel) && item?.mega_menu?.[0]?.cta_group?.[0] && CTAGroup(item.mega_menu[0].cta_group[0])}
                                        </>
                                    ))}

                                </Disclosure>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export { Header }