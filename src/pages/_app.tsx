// import * as _ from '@/config'

import Head from 'next/head'
import { AppContext } from 'next/app'

import { SingleCol } from '@/layout'
import { SEO } from '@/components/Seo'
import { App, Generic } from '@/types'
import { ErrorBoundary } from 'react-error-boundary'

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

    return (
        <>
            <Head>
                {pageProps?.seo_and_search?.title ? <title>{pageProps?.seo_and_search?.title}</title> : <title>Universal Demo</title>}
                {pageProps?.seo_and_search && <SEO
                    {...pageProps.seo_and_search}
                    locale={locale}
                />}
            </Head>
            <ErrorBoundary
                FallbackComponent={ErrorHandler}
            >
                <SingleCol
                    // header={header}
                    // footer={footer}
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
    // const header = "await getHeaderRes()";
    // const footer = "await getFooterRes()";

    if (Component.getInitialProps) {
        appProps = await Component.getInitialProps(ctx)
    }
    return {
        appProps,
        // header,
        // footer,
        locale
    }
}

export default MyApp

