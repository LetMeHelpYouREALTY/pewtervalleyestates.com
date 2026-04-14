// Self-unregistering service worker.
// Previous SW caused stale-cache hydration failures (white screen).
// This file ensures any browser that still has the old SW registered
// will activate this version, which immediately unregisters itself
// and clears all caches.

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.map(n => caches.delete(n))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.claim())
  );
});
