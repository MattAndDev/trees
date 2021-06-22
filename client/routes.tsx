import { Home } from './components/views'
import { h, FunctionalComponent } from 'preact'

type ROUTE = {
  path: string
  component: FunctionalComponent
  seo: {
    title: string
  }
}

export enum ROUTE_ID {
  HOME = 'HOME'
}

type ROUTES_CONFIG = {
  [key in ROUTE_ID]: ROUTE
}

const HOME: ROUTE = {
  path: '/',
  component: Home,
  seo: {
    title: 'Trees 🌲🌳🌴'
  }
}

export const CONFIG: ROUTES_CONFIG = { HOME }
