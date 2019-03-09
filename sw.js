importScripts('/hairsaronApp/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/hairsaronApp/static/app.99079d39f9425dcf1811.js",
    "revision": "11e94a2d231062d936dbe2f166722236"
  },
  {
    "url": "/hairsaronApp/static/layouts/default.36cf0291ad15a138b589.js",
    "revision": "8d8c9015df8ed2ab95d73e68db91edbd"
  },
  {
    "url": "/hairsaronApp/static/manifest.3327b912a13c5a1096db.js",
    "revision": "46ac077188f6941798a78cc45f7561d8"
  },
  {
    "url": "/hairsaronApp/static/pages/index.aeb983834ce664760943.js",
    "revision": "8ea2130ca7806a8b012bbf53c30bf03b"
  },
  {
    "url": "/hairsaronApp/static/pages/orders.eb4d3e952e2ab2afdad0.js",
    "revision": "cff514c143399637338031ccc3392fb1"
  },
  {
    "url": "/hairsaronApp/static/vendor.c4c5d82f366ef3160d2f.js",
    "revision": "be29f785b221051f753fa3a3bedbb0f4"
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





