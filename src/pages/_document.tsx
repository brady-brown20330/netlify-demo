import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument({locale}) {
  return (
    <Html lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps =async(ctx)=> {
  const initialProps = await Document.getInitialProps(ctx)
  return {
     ...initialProps,
     locale: ctx.locale
    }
}
