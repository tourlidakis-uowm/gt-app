const CACHE_NAME = 'turbine-analyzer-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  // Κάνουμε cache και τις εξωτερικές βιβλιοθήκες για offline χρήση
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0',
  'https://cdn.plot.ly/plotly-2.27.0.min.js'
];

// Εγκατάσταση του Service Worker και αποθήκευση στο Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Ενεργοποίηση και καθαρισμός παλιών caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercept των network requests για offline λειτουργία
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Αν υπάρχει στο cache, επέστρεψέ το, αλλιώς κατέβασέ το από το δίκτυο
        return response || fetch(event.request);
      })
  );
});