import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'onDark' | 'secondary'

type ButtonProps = {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
  href?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'>

export function Button({ variant = 'primary', children, className = '', href, ...props }: ButtonProps) {
  const classes = `ui-button ui-button-${variant} ${className}`.trim()

  if (href) {
    return <a className={classes} href={href} {...props as AnchorHTMLAttributes<HTMLAnchorElement>}>{children}</a>
  }

  return <button className={classes} {...props as ButtonHTMLAttributes<HTMLButtonElement>}>{children}</button>
}
