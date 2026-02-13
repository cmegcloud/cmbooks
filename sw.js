// Dummy Service Worker to satisfy PWA requirements
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // Pass through all requests normally
});
