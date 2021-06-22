import { h, FunctionalComponent } from 'preact'
import s from './button.css'
import cn from 'classnames'
export type ButtonProps = h.JSX.HTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
}

export const Button: FunctionalComponent<ButtonProps> = ({
  children,
  className,
  isLoading,
  type = 'button',
  ...rest
}) => {
  return (
    <button className={cn(s.wrap, className)} type={type} {...rest}>
      {children}
      {isLoading && <span className={s.spinner} />}
    </button>
  )
}
