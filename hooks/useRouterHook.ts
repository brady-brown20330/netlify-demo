'use client'
import { useRouter } from 'next/router'

const useRouterHook = () => {
    const router = useRouter()

    const path = () => { //returns current path (without search params)
        return router?.asPath?.split('?')?.[0]
    }

    const searchParams = () => { // returns search params
        return new URLSearchParams(router?.asPath)
    }

    return {
        path: path(),
        searchParams: searchParams(),
        ...router

    }
}

export default useRouterHook