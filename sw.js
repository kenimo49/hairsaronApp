importScripts('/hairsaronApp/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/hairsaronApp/static/app.a1fd668b61e8ff4acbeb.js",
    "revision": "774694114d5524c9eab20dbc3541d1f6"
  },
  {
    "url": "/hairsaronApp/static/layouts/default.da1a41e8b59a01dde6c9.js",
    "revision": "788fbf50f7d4e34fc9ef3593e0e0b023"
  },
  {
    "url": "/hairsaronApp/static/manifest.7bbd395d1660a330f6a8.js",
    "revision": "a81c4e630bb67db4b45cdeb86868a560"
  },
  {
    "url": "/hairsaronApp/static/pages/index.edd407671a8b2a61e78d.js",
    "revision": "42f130cbe6515cdc38b3dce5c84a389c"
  },
  {
    "url": "/hairsaronApp/static/pages/orders.7f0f65479d34e627d865.js",
    "revision": "0113c767223d4a4c76992fdc6cd13807"
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





