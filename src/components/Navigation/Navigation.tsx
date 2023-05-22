import { App } from '@/types'

export function Navigation (props: App.Navigation) {
    // const { sub_menu } = props?.main_menu
    console.log('Navigation Prop', props.main_menu)

    return (
        <>
            <h2>Navigation</h2>
            {/* <div className='absolute inset-0 top-1/2 bg-white shadow'aria-hidden='true' />
            <div className='relative'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 items-start gap-x-6 gap-y-10 pb-12 pt-10 md:grid-cols-2 lg:gap-x-8'>
               u        <div className='grid grid-cols-1 gap-x-6 gap-y-10 lg:gap-x-8'>
                            <div>
                                <p
                                    id='clothing-heading'
                                    className='font-medium text-gray-900'
                                >
                                    Clothing
                                </p>
                                <div className='mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6'>
                                    <ul
                                        role='list'
                                        aria-labelledby='clothing-heading'
                                        className='space-y-6 sm:space-y-4'
                                    >
                                        {category.clothing[0].map((item) => (
                                            <li
                                                key={item.name}
                                                className='flex'
                                            >
                                                <a
                                                    href={item.href}
                                                    className='hover:text-gray-800'
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul
                                        role='list'
                                        aria-label='More clothing'
                                        className='mt-6 space-y-6 sm:mt-0 sm:space-y-4'
                                    >
                                        {category.clothing[1].map((item) => (
                                            <li
                                                key={item.name}
                                                className='flex'
                                            >
                                                <a
                                                    href={item.href}
                                                    className='hover:text-gray-800'
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div> */}

            {/* <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8'>
                            <div>
                                <p
                                    id='accessories-heading'
                                    className='font-medium text-gray-900'
                                >
                                    Accessories
                                </p>
                                <ul
                                    role='list'
                                    aria-labelledby='accessories-heading'
                                    className='mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4'
                                >
                                    {category.accessories.map((item) => (
                                        <li key={item.name} className='flex'>
                                            <a
                                                href={item.href}
                                                className='hover:text-gray-800'
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p
                                    id='categories-heading'
                                    className='font-medium text-gray-900'
                                >
                                    Categories
                                </p>
                                <ul
                                    role='list'
                                    aria-labelledby='categories-heading'
                                    className='mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4'
                                >
                                    {category.categories.map((item) => (
                                        <li key={item.name} className='flex'>
                                            <a
                                                href={item.href}
                                                className='hover:text-gray-800'
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> */}
            {/* </div>
                </div>
            </div> */}
        </>
    )
}
