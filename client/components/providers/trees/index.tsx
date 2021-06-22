import { ComponentChildren, createContext, FunctionComponent, h } from 'preact'
import { useContext, useEffect, useReducer } from 'preact/hooks'
import { TreesActions, treesReducer } from './reducer'
import { TreesState } from './types'

const defaultState = {
  trees: [],
  loading: true,
  error: null,
  dispatch: () => undefined
}

export const TreesContext = createContext<
  TreesState & { dispatch: (action: TreesActions) => void }
>(defaultState)

export const TreesProvider: FunctionComponent<{
  children: ComponentChildren
}> = ({ children }) => {
  const [state, dispatch] = useReducer(treesReducer, defaultState)
  useEffect(() => {
    fetch(
      'https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json'
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'SET_TREES', payload: data.trees }))
      .catch(() =>
        dispatch({ type: 'SET_ERROR', payload: 'Could not retrieve trees' })
      )
  }, [])
  return (
    <TreesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TreesContext.Provider>
  )
}

export const useTrees = (): TreesState & {
  dispatch: (action: TreesActions) => void
} => useContext(TreesContext)
