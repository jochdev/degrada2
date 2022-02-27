const CACHE_NAME = "v1_cache_degrada2"
const urlToCache = [
  "./",
  "./pages/fallback.html",
  "./assets/img/favicon.png",
  "./assets/img/icon32.png",
  "./assets/img/icon64.png",
  "./assets/img/icon128.png",
  "./assets/img/maskable.png",
  "./assets/img/icon256.png",
  "./assets/img/icon512.png",
  "./assets/img/icon1024.png",
  "./assets/bootstrap5/css/bootstrap.min.css",
  "./assets/css/estilos.css",
  "./assets/bootstrap5/js/bootstrap.min.js",
  "./assets/js/vue-dev.js",
  "./assets/js/main.js",
  "./manifest.json",
  "./?utm_source=web_app_manifest"
];



// Cachear nuestra data
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(
      cache => cache.addAll(urlToCache).then(
        () => self.skipWaiting()
      ).catch(
        err => console.log(err)
      )
    )
  )
})

// Activar el cache y empezar a comparar
self.addEventListener("activate", e => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});


self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }

      return fetch(e.request);
    }).catch(
      ()=>caches.match("./pages/fallback.html")
    )
  );
});