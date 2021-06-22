import { h } from 'preact'
import { template } from './template'
import { Head } from '../client/head'
import { App } from '../client/app'
import { render } from 'preact-render-to-string'
import { Request } from 'express'

export const renderView = (req: Request): string => {
  const head = render(<Head url={req.url} />, { pretty: true })
  const body = render(<App url={req.url} />, { pretty: true })
  return template(head, body)
}
