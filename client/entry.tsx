import { h, hydrate, render } from 'preact'
import { App } from './app'
import { Head } from './head'
import env from '@env'

const renderFunc = env.HMR_ENABLED ? render : hydrate

renderFunc(<App />, document.body)
renderFunc(<Head />, document.head)
if (module.hot) {
  module.hot.accept()
}
if ('serviceWorker' in navigator && !env.HMR_ENABLED) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js')
  })
}
