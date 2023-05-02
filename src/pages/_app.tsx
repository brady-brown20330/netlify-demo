// import * as _ from '@/config'

import Head from 'next/head';

import { SingleCol } from '@/layout';
import { SEO } from '@/components/Seo';
import { App } from '@/types';

import '@contentstack/live-preview-utils/dist/main.css';
import '@/styles/globals.css'


function MyApp(props: App.Props) {
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

export default MyApp;

