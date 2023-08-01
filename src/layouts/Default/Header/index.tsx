import clsx from 'clsx'
import { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
      <header className={clsx(`fixed top-0 z-50 w-full bg-red-500`)}>
        <p>Header</p>
      </header>
    </Fragment>
  )
}

export default Header
