import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
export default function MyDocument (props: { locale: string }) {
    const {locale} = props
    return (
        <Html lang={locale} className='light'>
            <Head />
            <body className='dark:bg-black'>
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
