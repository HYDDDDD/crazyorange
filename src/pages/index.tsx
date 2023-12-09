import { Fragment } from 'react'
import { NextPageWithLayout } from '@/types/layout'
import { getDefaultLayout } from '@/utils/getLayout'
import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Button from '@/components/UI/Button'

const HomePage: NextPageWithLayout = () => {
  // return this!
  return (
    <Fragment>
      <section>
        <div className="container">
          <div>
            <h1>content</h1>
            <Link href="/stylesheet">
              <Button className={clsx(`bg-orange-300`, `hover:bg-orange-500`)}>
                <p>stylesheet page</p>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

HomePage.getLayout = getDefaultLayout //page get a React component for the layout.

export default HomePage
