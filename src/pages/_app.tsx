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
        navigation,
        footer
    } = props


    useEffect(()=> {
        if(!navigator.onLine) throw new Error('===== Network connection failed ====== ')
    }, [])

    return (
        <>
            <Head>
                {pageProps?.entry?.seo?.title ? <title>{pageProps?.entry?.seo?.title}</title> : <title>Universal Demo</title>}
                
                {pageProps?.entry?.seo && <SEO
                    {...pageProps.entry.seo}
                    locale={locale}
                />}
            </Head>
            <ErrorBoundary
                FallbackComponent={ErrorHandler}
            >
                <SingleCol
                    header={header}
                    navigation={navigation}
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
    const { locale } = router // Will return `fr` for `/fr/*` pages
    const header = await getEntries('header',locale, [], []) || null
    const navigation = await getEntries('navigation',locale, [], []) || null
    const footer = await getEntries('footer',locale, [], []) || null

    if (Component.getInitialProps) {
        appProps = await Component.getInitialProps(ctx)
    }
    return {
        appProps,
        header: header?.length > 0 ? header[0] : null,
        navigation: navigation?.length > 0 ? navigation[0] : null,
        footer: footer?.length > 0 ? footer[0] : null,
        locale
    }
}

export default MyApp