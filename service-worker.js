// service-worker.js

self.addEventListener('install', (event) => {
    event.waitUntil(
        // Add caching or other setup tasks here if needed
        console.log('Service Worker Installed successfully.')
    );
});