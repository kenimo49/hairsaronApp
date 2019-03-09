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
    "url": "/hairsaronApp/static/manifest.a94b0a5db471ac8a542d.js",
    "revision": "1a8ddba1504a3647f4a0796c05bab36f"
  },
  {
    "url": "/hairsaronApp/static/pages/index.a22b8b408f510f4eb7bb.js",
    "revision": "37e98bfd34b81fc28d494b89e42aff83"
  },
  {
    "url": "/hairsaronApp/static/pages/orders.5fa73a1fa25420f1247e.js",
    "revision": "65754f2398318008e1714e50e4daab37"
  },
  {
    "url": "/hairsaronApp/static/pages/propose.5748ca92c12e33fd4140.js",
    "revision": "ecd0514b39f5693a81ca82a15e0af2e0"
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





