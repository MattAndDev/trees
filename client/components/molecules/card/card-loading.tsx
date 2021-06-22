import { h, FunctionalComponent, JSX } from 'preact'
import s from './card.css'
import cn from 'classnames'
import { Heading } from '@client/components/atoms'

export const CardLoading: FunctionalComponent<
  JSX.HTMLAttributes<HTMLDivElement>
> = ({ className, ...rest }) => {
  return (
    <div className={cn(s.wrap, className)} {...rest}>
      <Heading className={s.loadingTitle} level={2}>
        &nbsp;
        <span className={cn(s.loadingEffect, s.small)} />
      </Heading>
      <Heading className={s.loadingTitle} level={3}>
        &nbsp;
        <span className={s.loadingEffect} />
      </Heading>
    </div>
  )
}
