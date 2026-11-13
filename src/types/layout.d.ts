import type { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type GetLayout<T = unknown> = (page: ReactElement, props?: T) => ReactNode // create type for return a React component for layout.

export type NextGetLayout = {
  getLayout?: (page: ReactElement) => ReactNode //get a React component layout.
}

export type NextPageWithLayout<P = object> = NextPage<P> & NextGetLayout // create type for content.
