// ==========================================
// MAJITRACK SERVICE WORKER
// ==========================================

const CACHE_NAME = "majitrack-training-v5";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",
    "./icons/majitrack-icon-192.png",
    "./icons/majitrack-icon-512.png"
];

// Save application files for offline access
self.addEventListener("install", function(event) {

    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(APP_FILES);
        })
    );

});

// ==========================================
// REMOVE OLD APPLICATION CACHES
// ==========================================

self.addEventListener("activate", function(event) {

    event.waitUntil(

        caches.keys().then(function(cacheNames) {

            return Promise.all(

                cacheNames
                    .filter(function(cacheName) {

                        return (
                            cacheName.startsWith("majitrack-training-") &&
                            cacheName !== CACHE_NAME
                        );

                    })
                    .map(function(cacheName) {

                        return caches.delete(cacheName);

                    })

            );

        })

    );

});

// Serve cached application files when offline
self.addEventListener("fetch", function(event) {

    if (event.request.method !== "GET") {
        return;
    }

    if (new URL(event.request.url).origin !== self.location.origin) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {

            return cachedResponse || fetch(event.request);

        })
    );

});
