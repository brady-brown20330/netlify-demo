import type {  AppProps } from 'next/app'

export interface Props extends AppProps {
  locale:string,
  header: undefined; //needs to define
  footer: undefined; //need to define
}

// export type Context = {
//   resolvedUrl: string;
//   setHeader: Function;
//   write: Function;
//   end: Function;
// }