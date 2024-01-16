/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
export default function MyDocument (props: { locale: string }) {
    const {locale} = props
    return (
        <Html lang={locale}>
            <Head>
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
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

MyDocument.getInitialProps =async (ctx: DocumentContext)=> {
    const initialProps = await Document.getInitialProps(ctx)
    return {
        ...initialProps,
        locale: ctx.locale
    }
}
