"use strict";var precacheConfig=[["/BetterDiscordStuff/index.html","b0deb79810e40947b265bf993814e1d8"],["/BetterDiscordStuff/static/css/main.da42cb4e.css","3e169fd675671218769c690feb87b12d"],["/BetterDiscordStuff/static/js/main.9fc17561.js","bfc1071d09c1496c5c6422f6701d8405"],["/BetterDiscordStuff/static/media/Github.5a939693.svg","5a9396935f17f43fcd743e26b003b052"],["/BetterDiscordStuff/static/media/Paypal.ec11925d.svg","ec11925dfc4f68efb39dd290ac820a40"],["/BetterDiscordStuff/static/media/palanquin-bold-webfont.93ad43cc.woff2","93ad43cc766893ddd3da67d03ec081d6"],["/BetterDiscordStuff/static/media/palanquin-extralight-webfont.2d8eada0.woff2","2d8eada0e965cacae94fb7a58105a38b"],["/BetterDiscordStuff/static/media/palanquin-light-webfont.afec709d.woff2","afec709da3f1498e0453a0bd82a88026"],["/BetterDiscordStuff/static/media/palanquin-medium-webfont.f3500c12.woff2","f3500c122d7a98ef28e6038e8ff047b0"],["/BetterDiscordStuff/static/media/palanquin-regular-webfont.6afc7ef3.woff2","6afc7ef36bfb2854403e3607c27d1673"],["/BetterDiscordStuff/static/media/palanquin-semibold-webfont.789fc28e.woff2","789fc28eb3c0aab8634586a6adbde40c"],["/BetterDiscordStuff/static/media/palanquin-thin-webfont.089499f6.woff2","089499f6840c9e0d5ba427ff7682f193"],["/BetterDiscordStuff/static/media/palanquindark-bold-webfont.1087ce43.woff2","1087ce43768e446084b9287a4c85a264"],["/BetterDiscordStuff/static/media/palanquindark-medium-webfont.141eb9ca.woff2","141eb9cafefaec01a8ea5c904208c502"],["/BetterDiscordStuff/static/media/palanquindark-regular-webfont.2aabcab4.woff2","2aabcab48b7cbaf459742df5926d9e93"],["/BetterDiscordStuff/static/media/palanquindark-semibold-webfont.fa894336.woff2","fa894336025f33a35433800ced12ddb3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/BetterDiscordStuff/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});