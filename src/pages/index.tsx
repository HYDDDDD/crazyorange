import { Fragment } from 'react'
import { NextPageWithLayout } from '@/types/layout'
import { getDefaultLayout } from '@/utils/getLayout'
import React from 'react'
import Link from 'next/link'

const HomePage: NextPageWithLayout = () => {
  // return this!
  ;<h1 className="bg-slate-500 text-red-500 ">content</h1>
  return (
    <Fragment>
      <section>
        <h1>content</h1>

        <Link href="/stylesheet">
          <button className="bg-orange-300">
            <p>stylesheet page</p>
          </button>
        </Link>
      </section>
    </Fragment>
  )
}

HomePage.getLayout = getDefaultLayout //page get a React component for the layout.

export default HomePage
