import { h, FunctionalComponent, Fragment } from 'preact'
import Router, { RouterProps } from 'preact-router'
import { CONFIG, ROUTE_ID } from './routes'

export const Head: FunctionalComponent<RouterProps> = (props) => (
  <Fragment>
    <Router {...props}>
      {Object.values(ROUTE_ID).map((key: ROUTE_ID) => (
        <Fragment key={ROUTE_ID} path={CONFIG[key].path}>
          <title>{CONFIG[key].seo.title}</title>
          <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
          <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
        </Fragment>
      ))}
    </Router>
  </Fragment>
)
