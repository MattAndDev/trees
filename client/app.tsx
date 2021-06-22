import 'normalize.css'
import './styles/variables.css'
import './styles/common.css'
import { h, FunctionalComponent } from 'preact'
import Router, { RouterProps } from 'preact-router'
import { TreesProvider } from './components/providers/trees'
import { CONFIG, ROUTE_ID } from './routes'

export const App: FunctionalComponent<RouterProps> = (props: RouterProps) => (
  <TreesProvider>
    <Router {...props}>
      {Object.values(ROUTE_ID).map((key: ROUTE_ID) => {
        const Comp = CONFIG[key].component
        return <Comp key={key} path={CONFIG[key].path} />
      })}
    </Router>
  </TreesProvider>
)
