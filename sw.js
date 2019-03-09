importScripts('/hairsaronApp/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/hairsaronApp/static/app.e88a0af0005f6ca27d62.js",
    "revision": "964215054859fd20f5c095bb7dd3480c"
  },
  {
    "url": "/hairsaronApp/static/layouts/default.7f8bbb550eef3e0e86c2.js",
    "revision": "3458a17008473b6a5f9ff7d5d7779184"
  },
  {
    "url": "/hairsaronApp/static/manifest.d394d8f763ae2dc9442d.js",
    "revision": "4d485c0ec1225b0125c2a5f9ec7825ae"
  },
  {
    "url": "/hairsaronApp/static/pages/index.63881d3c885d0822403c.js",
    "revision": "0c35efcb00f4ea079b37ff95366494c7"
  },
  {
    "url": "/hairsaronApp/static/vendor.6496f514f5d93644e37d.js",
    "revision": "7e50c3aa18c9653bec6fd4c2010f76a3"
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





