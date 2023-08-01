import React, { FC, Fragment, PropsWithChildren } from 'react'
import Header from './Header/Navbar'
import Footer from './Footer'

export interface IDefaultLayoutProps extends PropsWithChildren {
  className?: string
}

const DefaultLayout: FC<IDefaultLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default DefaultLayout
