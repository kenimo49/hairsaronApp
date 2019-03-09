importScripts('/hairsaronApp/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/hairsaronApp/static/app.be74869a460fe16cdc41.js",
    "revision": "9d5de495df4768fc094d136b1d5e27c1"
  },
  {
    "url": "/hairsaronApp/static/layouts/default.36cf0291ad15a138b589.js",
    "revision": "8d8c9015df8ed2ab95d73e68db91edbd"
  },
  {
    "url": "/hairsaronApp/static/manifest.86adea0b591807470e86.js",
    "revision": "d9eb5a9b8ae330e09738747d8ee4cbcf"
  },
  {
    "url": "/hairsaronApp/static/pages/index.634f1048d6a9d766de42.js",
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





