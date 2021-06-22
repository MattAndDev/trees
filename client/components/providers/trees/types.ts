export type Tree = {
  name: string
  species_name: string
  image: string
}

export type TreesState = {
  trees: Tree[]
  loading: boolean
  error: null | string
}
