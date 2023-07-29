import { NextPageWithLayout } from '@/types/layout'
import { getDefaultLayout } from '@/utils/getLayout'
import React from 'react'

const HomePage: NextPageWithLayout = () => {
  // return this!
  return (
    <div>
      <h1>fdsfds</h1>
      <p>dfsdf</p>
    </div>
  )
}

HomePage.getLayout = getDefaultLayout //page get a React component for the layout.

export default HomePage
