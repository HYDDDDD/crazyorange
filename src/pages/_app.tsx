import type { AppProps } from 'next/app'

import '@/styles/globals.scss'
import { NextPageWithLayout } from '@/types/layout'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
