import React, { FC } from 'react'
import { ButtonProps } from './types'
import clsx from 'clsx'

const Button: FC<ButtonProps> = ({ variant, size, rounder = 'default', className, children, ...props }) => {
  // console.log([variant]) -> log -> ['something send via props']
  // variant -> send props via component

  return (
    <button className={clsx(`button`, [`button-rounder-${rounder}`], variant, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
