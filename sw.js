self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('myfirstteacher-cache').then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/icons/icon-192.png',
        '/icons/icon-512.png'
      ])
    )
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});