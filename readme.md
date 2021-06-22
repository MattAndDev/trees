# Trees 🌲🌳🌴

A small PWA to display some pretty pretty trees.
Setup is based on my [micro-pwa](https://github.com/MattAndDev/micro-pwa) repository, which allows this small app to be isomorphic.

Hosted at [trees.matteo.land](https://trees.matteo.land). No uptime guarantee, it's hosted on my raspberry pi k8s cluster.

## Start

requirements: `Node >= 14`

`npm i && npm run dev`

More commands available in "# how to" section

## Implementation details

This is a fully furnished PWA, you can install it on your device and run it offline.
If you download images once you can of course keep looking at em offline.

### Images

As images are quite large they are **only** loaded on user input (no pre-fetching). It's important to skip downloading unwanted resources.

### Service worker

The service worker will make sure images are not downloaded each time, to spare bandwidth.
It also ensures that we can have a look at those awesome trees while being offline

### Ssr

The page is SSR and can be indexed easier by bots as well as provide a faster time to interactive for the user.

### Dark theme support

Cause, of course!

### Masonry layout

Hacking around css grid, inspired by [this article](https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/)

### Component testing

Component testing with jest + preact-testing library

### Continuous delivery

Builds ARM image on tag to be hosted on raspberry pi kubernetes cluster

## how to

install dependencies:
`npm i`

start dev server (with hot module replacement):
`npm start`

bundle for production:
`npm run bundle` then run it `node app/server/index.js`

dockerize:
`docker build -t micro-pwa .` then run it `docker run -p 4242:4242 -d micro-pwa`

test:
`npm run test`
