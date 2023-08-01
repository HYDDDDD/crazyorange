import clsx from 'clsx'
import { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
      <nav className={clsx(`fixed left-0 top-0 z-50 w-full bg-red-500`)}>
        <p>Header</p>
      </nav>
    </Fragment>
  )
}

export default Header
