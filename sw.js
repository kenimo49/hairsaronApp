importScripts('/hairsaronApp/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/hairsaronApp/static/app.c21c84b12de41030db9d.js",
    "revision": "076d00a3acdf6966e5cc3fade90b2b2e"
  },
  {
    "url": "/hairsaronApp/static/layouts/default.da1a41e8b59a01dde6c9.js",
    "revision": "788fbf50f7d4e34fc9ef3593e0e0b023"
  },
  {
    "url": "/hairsaronApp/static/manifest.8ef45aaa97e16d4e0e72.js",
    "revision": "9bf76801894fbf184568e17dd1aeb194"
  },
  {
    "url": "/hairsaronApp/static/pages/index.edd407671a8b2a61e78d.js",
    "revision": "42f130cbe6515cdc38b3dce5c84a389c"
  },
  {
    "url": "/hairsaronApp/static/pages/orders.21d32574ed8a54cb50b6.js",
    "revision": "44d61decf5a6f6fb9b668f35d320f328"
  },
  {
    "url": "/hairsaronApp/static/pages/propose.981f7cc7ec5d1d98f743.js",
    "revision": "fcc498fa916db6b952bf50f8894f28b3"
  },
  {
    "url": "/hairsaronApp/static/vendor.c607eea93dc79377d17e.js",
    "revision": "7ce56f1e52460d85006bac08b0ef602c"
  }
], {
  "cacheId": "hairsaronApp",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/hairsaronApp/static/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/hairsaronApp/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workbox.routing.registerRoute(new RegExp('.(?:png|gif|jpg|jpeg|svg)$'), workbox.strategies.cacheFirst({"cacheExpiration":{"maxEntries":60,"maxAgeSeconds":2592000}}), 'GET')





