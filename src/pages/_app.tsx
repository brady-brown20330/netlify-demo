// import * as _ from '@/config'

import Head from 'next/head'
import { AppContext } from 'next/app'
import { useEffect } from 'react'

import { SingleCol } from '@/layout'
import { SEO } from '@/components/Seo'
import { App, Generic } from '@/types'
import { ErrorBoundary } from 'react-error-boundary'
import { getEntries } from '@/services'

import '@contentstack/live-preview-utils/dist/main.css'
import '@/styles/globals.css'

const ErrorHandler = ({ error, resetErrorBoundary, componentStack }: Generic.ErrorHandlerType) => (
    <div>
        <h1>An error occurred</h1>
        <pre>{error.message}</pre>
        <pre>{componentStack}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
    </div>
)

function MyApp (props: App.Props) {
    const {
        Component,
        pageProps,
        locale,
        header,
        footer
    } = props

    useEffect(()=> {
        if(document) {
            document.querySelector('html')?.classList.add(pageProps?.theme?.toLowerCase() || 'light')
        }
    }, [pageProps.theme])

    return (
        <>
            <Head>
                {pageProps?.seo?.title ? <title>{pageProps?.seo?.title}</title> : <title>Universal Demo</title>}
               { console.log('🚀 ~ file: seo.tsx:4 ~ props:', pageProps?.seo)}

                {pageProps?.seo && <SEO
                    {...pageProps.seo}
                    locale={locale}
                />}
            </Head>
            <ErrorBoundary
                FallbackComponent={ErrorHandler}
            >
                <SingleCol
                    header={header}
                    footer={footer}
                >
                    <Component {...pageProps} />
                </SingleCol>
            </ErrorBoundary>
        </>
    )
}

MyApp.getInitialProps = async ({  Component, ctx, router }:AppContext) => {
    let appProps = {}
    const { locale, query } = router // Will return `fr` for `/fr/*` pages
    const header = await getEntries('header',locale, [], [], query)
    const footer = await getEntries('footer',locale, [], [], query)

    if (Component.getInitialProps) {
        appProps = await Component.getInitialProps(ctx)
    }
    return {
        appProps,
        header: header?.length > 0 ? header[0] : null,
        footer: footer?.length > 0 ? footer[0] : null,
        locale
    }
}

export default MyApp

