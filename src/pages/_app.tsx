/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head'
import { AppContext } from 'next/app'
import { ErrorBoundary } from 'react-error-boundary'
import Router from 'next/router'
import NProgress from 'nprogress'

import { getAppConfigData } from '@/loaders'
import { SingleCol } from '@/layout'
import { SEO } from '@/components'
import { App, Generic } from '@/types'

import '@contentstack/live-preview-utils/dist/main.css'
import '@/styles/globals.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
        web_config
    } = props

    return (
        <>
            <Head>
                {pageProps?.entry?.seo?.title ? <title>{pageProps?.entry?.seo?.title}</title> : <title>{pageProps?.entry?.title}</title>}
                {pageProps?.entry && <SEO
                    {...pageProps?.entry}
                    locale={locale}
                />}
            </Head>
            <link rel='preload' href='/fonts/Inter-Black.woff2' as='font' type='font/woff2' crossOrigin='' />
            <link rel='preload' href='/fonts/Inter-Bold.woff2' as='font' type='font/woff2'  crossOrigin='' />
            <link rel='preload' href='/fonts/Inter-ExtraBold.woff2' as='font' type='font/woff2' crossOrigin='' />
            <link rel='preload' href='/fonts/Inter-ExtraLight.woff2' as='font' type='font/woff2' crossOrigin='' />
            <link rel='preload' href='/fonts/Inter-Light.woff2' as='font' type='font/woff2' crossOrigin='' />
            <link rel='preload' href='/fonts/Inter-Medium.woff2' as='font' type='font/woff2' crossOrigin='' />
            <link rel='preload' href='/fonts/Inter-Regular.woff2' as='font' type='font/woff2' crossOrigin='' />
            <link rel='preload' href='/fonts/Inter-SemiBold.woff2' as='font' type='font/woff2' crossOrigin='' />
            <link rel='preload' href='/fonts/Inter-Thin.woff2' as='font' type='font/woff2' crossOrigin='' />
            <link rel='stylesheet' href='/fonts/inter.css'/>
            <ErrorBoundary
                FallbackComponent={ErrorHandler}
            >
                <SingleCol
                    {...web_config}
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
    const web_config = await getAppConfigData(locale) || null

    if (Component.getInitialProps) {
        appProps = await Component.getInitialProps(ctx)
    }
    return {
        appProps,
        web_config: web_config?.length > 0 ? web_config[0] : null,
        locale
    }
}

export default MyApp