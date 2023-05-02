export type Props = {
    // page: Page;
    entryUrl: string;
    Component: Function;
    // pageProps: PageProps;
    // header: HeaderProps;
    // footer: FooterProps;
  }

  export type Context = {
    resolvedUrl: string;
    setHeader: Function;
    write: Function;
    end: Function;
  }