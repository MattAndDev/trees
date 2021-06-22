import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'

precacheAndRoute(
  (self as any).__WB_MANIFEST.concat({
    url: 'index.html'
  })
)

registerRoute(
  new RegExp(
    'https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/.*'
  ),
  new NetworkFirst({
    cacheName: 'trees-data',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      })
    ]
  })
)

registerRoute(
  new RegExp('https://upload.wikimedia.org/.*'),
  new StaleWhileRevalidate({})
)
