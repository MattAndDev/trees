import { h, FunctionalComponent } from 'preact'
import s from './heading.css'
import cn from 'classnames'
export type HeadingProps = h.JSX.HTMLAttributes<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading: FunctionalComponent<HeadingProps> = ({
  children,
  className,
  level,
  ...rest
}) => {
  const El = `h${level}` as unknown as FunctionalComponent<
    Omit<HeadingProps, 'level'>
  >
  const headingClass = (s as unknown as { [key: string]: string })[`h${level}`]
  return (
    <El className={cn(s.common, headingClass, className)} {...rest}>
      {children}
    </El>
  )
}
