const staticCacheName = 'agro-implements';


const filesToCache = [
  'images/app-logo-png.png'
];

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  self.skipWaiting();
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

this.addEventListener('activate', function(event) {

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (staticCacheName.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);  
  if (url.origin == location.origin && ( event.request.url.indexOf('Diagnostic') > -1 || url == 'https://pkvd-agro.onrender.com/login' || url == 'https://pkvd-agro.onrender.com/implements')) {  
    event.respondWith(caches.open(staticCacheName).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchedResponse = fetch(event.request).then((networkResponse) => {
          console.log("adding to cache: "+event.request.url);
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });

        return cachedResponse || fetchedResponse;
      });
    }));
  }
  else {
    return;
  }  
});