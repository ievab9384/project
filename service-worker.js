// service-worker.js

self.addEventListener('install', (event) => {
    event.waitUntil(
      // Add any setup tasks here if needed
      console.log('Service Worker Installed successfully.')
    );
  });
  
  self.addEventListener('fetch', (event) => {
    // Handle fetch events here if needed
  });
  
