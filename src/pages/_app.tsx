import App from 'next/app'
import '@/styles/globals.css'
import type {  AppProps } from 'next/app'
// import * as _ from '@/config'

import Head from 'next/head';
import { SingleCol } from '@/layout';
import '@contentstack/live-preview-utils/dist/main.css';
import { SEO } from '@/components/Seo';


function MyApp(props: AppProps) {
  const {
    Component,
    pageProps,
    locale,
    header,
    footer
  } = props;

  return (
    <>
      <Head>
        {pageProps?.seo_and_search?.title ? <title>{pageProps?.seo_and_search?.title}</title> : <title>Universal Demo</title>}
        {pageProps?.seo_and_search && <SEO
          contents={{
            ...pageProps.seo_and_search,
            locale: locale
          }}
        />}
      </Head>
      <SingleCol
      // header={header}
      // footer={footer}
      >
        <Component {...pageProps} />
      </SingleCol>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx, router }: any) => {
  let appProps = {}
  const { locale } = router; // Will return `fr` for `/fr/*` pages
  const header = "await getHeaderRes()";
  const footer = "await getFooterRes()";

  if (Component.getInitialProps) {
    appProps = await Component.getInitialProps(ctx)
  }
  return { appProps, header, footer, locale }
}

export default MyApp;

