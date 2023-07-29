import { ReactElement, ReactNode } from "react";

export type GetLayout<T = unknown> = (page: ReactElement, props?: T) => ReactNode

export type NextGetLayout = {
  getLayout?: (page: ReactElement) => ReactNode
}

export type NextPageWithLayout = NextGetLayout