import clsx from 'clsx'
import { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
      <header className={clsx(`main-space-x py-4`, `fixed top-0 z-50 w-full bg-red-500`)}>
        <div className={clsx(`container flex items-center justify-between bg-sky-400`)}>
          <p>Header</p>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
