import { useCallback, useEffect, useState } from 'preact/hooks'

const getGridStyles = (grid: HTMLDivElement) => {
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'),
    10
  )
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-row-gap'),
    10
  )
  const colGap = parseFloat(
    window.getComputedStyle(grid).getPropertyValue('column-gap')
  )
  const minW = parseFloat(
    window.getComputedStyle(grid).getPropertyValue('grid-template-columns')
  )
  const gridWidth = grid.offsetWidth
  const columnCount = Math.floor((gridWidth + colGap) / (minW + colGap)) || 1
  return { rowHeight, rowGap, columnCount }
}

const getElementStyle = ({
  gridElement,
  elementIndex,
  rowHeight,
  rowGap,
  columnCount
}: {
  gridElement: HTMLDivElement
  rowHeight: number
  rowGap: number
  columnCount: number
  elementIndex: number
}) => {
  const sizeElement = gridElement.firstChild as HTMLElement
  const rowSpan = Math.ceil(
    (sizeElement!.getBoundingClientRect().height + rowGap) /
      (rowHeight + rowGap)
  )
  const col =
    (elementIndex + 1) % columnCount === 0
      ? columnCount
      : (elementIndex + 1) % columnCount

  return { rowSpan, col }
}

const updateGrid = (parentNode: HTMLDivElement) => {
  const children = parentNode.children

  for (let i = 0; i < children.length; i++) {
    ;(children[i] as HTMLElement).style.gridColumn = `auto / auto`
    const { rowHeight, rowGap, columnCount } = getGridStyles(parentNode)
    const { rowSpan, col } = getElementStyle({
      rowGap,
      rowHeight,
      columnCount,
      elementIndex: i,
      gridElement: children[i] as HTMLDivElement
    })
    ;(children[i] as HTMLElement).style.gridColumn = `${col} / auto`
    ;(children[i] as HTMLElement).style.gridRowEnd = `span ${rowSpan}`
  }
}

export const useGrid = (): ((node: HTMLDivElement | null) => void) => {
  const [parentNode, setParentNode] = useState<HTMLDivElement | null>(null)

  const parent = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setParentNode(node)
    }
  }, [])
  useEffect(() => {
    const observers: ResizeObserver[] = []
    if (parentNode) {
      const obs = new ResizeObserver(() => {
        updateGrid(parentNode)
      })
      obs.observe(parentNode)
      observers.push(obs)
      const children = parentNode.children
      for (let i = 0; i < children.length; i++) {
        const obs = new ResizeObserver(() => {
          updateGrid(parentNode)
        })
        obs.observe(children[i].firstChild as HTMLDivElement)
        observers.push(obs)
      }
    }
    return () => {
      for (let i = 0; i < observers.length; i++) {
        observers[i].disconnect()
      }
    }
  }, [parentNode])
  return parent
}
