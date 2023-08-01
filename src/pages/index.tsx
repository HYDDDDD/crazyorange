import { Fragment } from 'react'
import { NextPageWithLayout } from '@/types/layout'
import { getDefaultLayout } from '@/utils/getLayout'
import React from 'react'

const HomePage: NextPageWithLayout = () => {
  // return this!
  return (
    <Fragment>
      <h1 className="text-red-500 bg-slate-500">content</h1>
    </Fragment>
  )
}

HomePage.getLayout = getDefaultLayout //page get a React component for the layout.

export default HomePage
