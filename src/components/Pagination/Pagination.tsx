import { pagination } from '@/types/components'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

/**
 * @name Pagination Component
 * 
 * @param { length } number
 * @param { dataPerPage } number
 * @param { currentPage } number
 * @param { setCurrentPage() } Dispatch<SetStateAction<number>>
 * 
 * @returns { JSX.Element }
*/
const Pagination: React.FC<pagination> = ({ length, dataPerPage, currentPage, setCurrentPage }: pagination) => {

    const numberOfPages: number = Math.ceil(length / dataPerPage)

    const handlePageClick = (page: number) => {

        if (page < 1) return
        if (page > numberOfPages) return

        setCurrentPage(page)
        
        const collectionWrapper = document.querySelector('.card-collection')
        let collectionOffset
        if (collectionWrapper instanceof HTMLElement) {
            collectionOffset = collectionWrapper?.getBoundingClientRect()?.top
        }

        collectionOffset && window.scrollBy({
            top: collectionOffset - 100,
            behavior: 'smooth'
        })

    }

    const renderPageNumbers = () => {
        // eslint-disable-next-line
        return Array.apply(null, Array(numberOfPages)).map((data: any, index: number) => {
            return (
                <a
                    href='javascript:void(0)'
                    key={index + 1}
                    className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${currentPage === index + 1 ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </a>
            )
        })
    }

    return (
        <nav className='flex items-center justify-between border-t border-gray-200 px-4 sm:px-0'>
            <div className='-mt-px flex w-0 flex-1'>
                <a
                    href={'javascript:void(0)'}
                    className={`inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 
                    hover:border-gray-300 hover:text-gray-700 ${((currentPage - 1) < 1)? 'pointer-events-none cursor-default' : ''}`}
                    onClick={() => handlePageClick(currentPage - 1)}
                >
                    <ArrowLongLeftIcon className='mr-3 h-5 w-5 text-gray-400' aria-hidden='true' />
                    Previous
                </a>
            </div>
            <div className='md:-mt-px md:flex'>
                {
                    renderPageNumbers()
                }
            </div>
            <div className='-mt-px flex w-0 flex-1 justify-end'>
                <a
                    href={'javascript:void(0)'}
                    className={`inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 
                    hover:border-gray-300 hover:text-gray-700 ${((currentPage + 1) > numberOfPages)? 'pointer-events-none cursor-default' : ''}`}
                    onClick={() => handlePageClick(currentPage + 1)}
                >
                    Next
                    <ArrowLongRightIcon className='ml-3 h-5 w-5 text-gray-400' aria-hidden='true' />
                </a>
            </div>
        </nav>
    )
}

export { Pagination }