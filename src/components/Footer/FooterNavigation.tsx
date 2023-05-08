
import _ from 'lodash'
import React, { Fragment, useState } from 'react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
    XMarkIcon
} from '@heroicons/react/24/outline'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
    categories: [
        {
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.'
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.'
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
                    imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.'
                }
            ]
        },
        {
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
                    imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.'
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
                    imageAlt: 'Model wearing light heather gray t-shirt.'
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
                    imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.'
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
                    imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.'
                }
            ]
        }
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' }
    ]
}
const footerNavigation = {
    shop: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' }
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' }
    ],
    account: [
        { name: 'Manage Account', href: '#' },
        { name: 'Returns & Exchanges', href: '#' },
        { name: 'Redeem a Gift Card', href: '#' }
    ],
    connect: [
        { name: 'Contact Us', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'Instagram', href: '#' },
        { name: 'Pinterest', href: '#' }
    ]
}

const FooterNavigation: React.FC<any> = (props: any) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='py-20 xl:grid xl:grid-cols-3 xl:gap-8'>
                <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
                    <div className='space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
                        <div>
                            <h3 className='text-sm font-medium text-white'>Shop</h3>
                            <ul role='list' className='mt-6 space-y-6'>
                                {footerNavigation.shop.map((item) => (
                                    <li key={item.name} className='text-sm'>
                                        <a href={item.href} className='text-gray-300 hover:text-white'>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-sm font-medium text-white'>Company</h3>
                            <ul role='list' className='mt-6 space-y-6'>
                                {footerNavigation.company.map((item) => (
                                    <li key={item.name} className='text-sm'>
                                        <a href={item.href} className='text-gray-300 hover:text-white'>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
                        <div>
                            <h3 className='text-sm font-medium text-white'>Account</h3>
                            <ul role='list' className='mt-6 space-y-6'>
                                {footerNavigation.account.map((item) => (
                                    <li key={item.name} className='text-sm'>
                                        <a href={item.href} className='text-gray-300 hover:text-white'>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-sm font-medium text-white'>Connect</h3>
                            <ul role='list' className='mt-6 space-y-6'>
                                {footerNavigation.connect.map((item) => (
                                    <li key={item.name} className='text-sm'>
                                        <a href={item.href} className='text-gray-300 hover:text-white'>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='mt-12 md:mt-16 xl:mt-0'>
                    <h3 className='text-sm font-medium text-white'>Sign up for our newsletter</h3>
                    <p className='mt-6 text-sm text-gray-300'>The latest deals and savings, sent to your inbox weekly.</p>
                    <form className='mt-2 flex sm:max-w-md'>
                        <label htmlFor='email-address' className='sr-only'>
              Email address
                        </label>
                        <input
                            id='email-address'
                            type='text'
                            autoComplete='email'
                            required
                            // eslint-disable-next-line max-len
                            className='w-full min-w-0 appearance-none rounded-md border border-white bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900'
                        />
                        <div className='ml-4 flex-shrink-0'>
                            <button
                                type='submit'
                                // eslint-disable-next-line max-len
                                className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900'
                            >
                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { FooterNavigation }