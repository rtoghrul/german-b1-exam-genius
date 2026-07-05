const CACHE = 'b1-genius-v7';
const ASSETS = [
  '/',
  '/index.html',
  '/bank.js',
  '/questions.js',
  '/manifest.json',
  '/audio/hoerverstehen_teil1.mp3',
  '/audio/hoerverstehen_teil2.mp3'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Cache audio files and other successful GET requests
        if (res.status === 200 || res.status === 0) {
          const clone = res.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
