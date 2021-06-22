import { resolve } from 'path'
import express from 'express'
import { renderView } from './renderer'
import env from '@env'
import compression from 'compression'

const app = express()
app.use(compression())

// mount static
app.use(express.static(resolve(env.OUT_DIR, 'client')))

// all the rest
app.get('*', (req, res) => {
  return res.send(renderView(req))
})

// eslint-disable-next-line no-console
app.listen(env.SERVER_PORT, () =>
  console.log(`Ssr server started on port: ${env.SERVER_PORT}!`)
)
