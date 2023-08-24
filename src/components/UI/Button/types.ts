import type { ButtonHTMLAttributes, MouseEvent } from 'react'

export type ButtonVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
export type ButtonSize = 'default' | 'medium' | 'small'

export type Button = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = Button & {
  variant?: ButtonVariant
  onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void
  size?: ButtonSize
}
