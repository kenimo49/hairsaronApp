importScripts('/hairsaronApp/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/hairsaronApp/static/app.a1fd668b61e8ff4acbeb.js",
    "revision": "774694114d5524c9eab20dbc3541d1f6"
  },
  {
    "url": "/hairsaronApp/static/layouts/default.f56638de6fbc4d54bbb1.js",
    "revision": "561a6f9969529b418777e7d2a3642280"
  },
  {
    "url": "/hairsaronApp/static/manifest.18b33f0d0bd62084cd34.js",
    "revision": "f2742f53a1ebb6a3f0dd28e5414662ea"
  },
  {
    "url": "/hairsaronApp/static/pages/index.d1f8bfa71f4da2f38593.js",
    "revision": "62e87a26910a39b5e3203a4807289810"
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





