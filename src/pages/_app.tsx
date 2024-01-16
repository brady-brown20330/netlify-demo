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
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/globals.css'
import '@/styles/style.css'

import { Montserrat } from 'next/font/google'

import { useEffect, useState } from 'react'


Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const monts = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-monts'
})

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

    const [scrolled, setScrolled] = useState(false)

    const listenScrollEvent = () => {
        if(window.scrollY > 0)
            setScrolled(true)
        else
            setScrolled(false)
        //console.log(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
        return () => {
            window.removeEventListener('scroll', listenScrollEvent)
        }
    }, [])

    return (
        <div className={`${monts.variable}`}>
            <Head>
                {pageProps?.entry?.seo?.title ? <title>{pageProps?.entry?.seo?.title}</title> : <title>{pageProps?.entry?.title}</title>}
                {pageProps?.entry && <SEO
                    {...pageProps?.entry}
                    locale={locale}
                />}
            </Head>
            <ErrorBoundary
                FallbackComponent={ErrorHandler}
            >
                <SingleCol
                    {...web_config} scrolled={scrolled}
                >
                    <Component {...pageProps} />
                </SingleCol>
            </ErrorBoundary>
        </div>
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