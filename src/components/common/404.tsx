import { Link } from '@/components'

const NotFoundComponent = () => {
    return (
        <div className='grid min-h-full place-items-center dark:!bg-black bg-white px-6 py-24 sm:py-28 lg:px-8'>
            <div className='text-center'>
                <p className='text-base font-semibold text-purple text-center'>404</p>
                <h1 className='mt-4 tracking-tight text-gray-900 dark:text-white'>Page not found</h1>
                <p className='mt-6 text-base leading-7 text-gray-600 dark:text-white'>Sorry, we couldn’t find the page you’re looking for.</p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                    <Link
                        url='/'
                        className='text-sm font-semibold text-gray-900 dark:text-white hover:text-purple'
                    >
                        Go back home <span aria-hidden='true'>&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export {NotFoundComponent}