import { h, FunctionalComponent, ComponentChild } from 'preact'
import s from './masonry.css'
import { useGrid } from './use-grid.'

export const Masonry: FunctionalComponent<{ children: ComponentChild[] }> = ({
  children
}) => {
  const parent = useGrid()

  if (!children) return null
  return (
    <div ref={parent} className={s.wrap}>
      {children.map((child, i) => (
        <div key={i}>{child}</div>
      ))}
    </div>
  )
}
