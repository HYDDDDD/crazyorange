import clsx from 'clsx'
import { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
      <footer className={clsx(`main-space-x py-6`, `bg-sky-500 text-green-500`)}>
        <p>Footer</p>
      </footer>
    </Fragment>
  )
}

export default Footer
