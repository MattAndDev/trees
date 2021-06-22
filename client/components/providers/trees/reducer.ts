import { Tree, TreesState } from './types'

export type TreesActions =
  | {
      type: 'SET_TREES'
      payload: Tree[]
    }
  | {
      type: 'REMOVE_TREES'
    }
  | {
      type: 'SET_ERROR'
      payload: string
    }

export const treesReducer = (
  state: TreesState,
  action: TreesActions
): TreesState => {
  switch (action.type) {
    case 'SET_TREES':
      return { loading: false, trees: action.payload, error: null }
    case 'REMOVE_TREES':
      return { ...state, trees: [] }
    default:
      return state
  }
}
