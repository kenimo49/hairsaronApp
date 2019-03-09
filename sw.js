importScripts('/hairsaronApp/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/hairsaronApp/static/app.99079d39f9425dcf1811.js",
    "revision": "11e94a2d231062d936dbe2f166722236"
  },
  {
    "url": "/hairsaronApp/static/layouts/default.0960294a37d459a4a739.js",
    "revision": "137da4bc5f0180e3aac1c2aea75d1095"
  },
  {
    "url": "/hairsaronApp/static/manifest.42c21cf8d077e4efd2a3.js",
    "revision": "8976576b958ec0a81f7f4bcdc03c68af"
  },
  {
    "url": "/hairsaronApp/static/pages/index.aeb983834ce664760943.js",
    "revision": "8ea2130ca7806a8b012bbf53c30bf03b"
  },
  {
    "url": "/hairsaronApp/static/pages/orders.a4caa90c254c6f6322f8.js",
    "revision": "74ea879c9cd4852fd44ad6e3614d0954"
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





