/* LubDubAPP Guide: service worker for the installable app.
   It keeps a copy of the site on the device so the guide opens without internet. While online every request still
   goes to the network first, so a new version shows up on the next load exactly as it would without this file; the
   saved copy is used only when the network fails, and is refreshed from each successful response. Each deploy
   changes VERSION, which saves a fresh copy of every file and removes the old one. */
var VERSION = 'bc9231f61a2e', CACHE = 'lubdub-site', FONTS = 'lubdub-fonts';
var ASSETS = ["./", "heart.json", "heart-sounds.json", "vendor/three/three.min.js", "vendor/three/GLTFLoader.js", "vendor/three/OrbitControls.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];
var PAGE = new URL('./', self.registration.scope).href;

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(ASSETS.map(function (u) {
      var url = new URL(u, self.registration.scope).href;
      return fetch(new Request(url, { cache: 'reload' })).then(function (r) { if (r.ok && !r.redirected) return c.put(url, r); });
    }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf('lubdub-') === 0 && k !== CACHE && k !== FONTS; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* store a fresh response unless the saved one is the same file */
function keep(c, key, r) {
  if (!r || !r.ok || r.type !== 'basic' || r.redirected) return Promise.resolve();
  return c.match(key).then(function (old) {
    var a = old && old.headers.get('etag'), b = r.headers.get('etag');
    if (a && b && a === b) return;
    return c.put(key, r);
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request; if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin === self.location.origin) {
    if (/\/sw\.js$/.test(url.pathname)) return;
    var page = req.mode === 'navigate', key = page && /\/(index\.html)?$/.test(url.pathname) ? PAGE : url.origin + url.pathname;
    e.respondWith(caches.open(CACHE).then(function (c) {
      return fetch(req).then(function (r) { e.waitUntil(keep(c, key, r.clone())); return r; }).catch(function () {
        return c.match(key).then(function (hit) {
          if (hit) return hit;
          return page ? c.match(PAGE).then(function (p) { return p || Response.error(); }) : Response.error();
        });
      });
    }));
    return;
  }
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {   /* the typefaces: saved once, refreshed in the background */
    e.respondWith(caches.open(FONTS).then(function (c) {
      return c.match(req).then(function (hit) {
        var net = fetch(req).then(function (r) { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(function () { return hit || Response.error(); });
        return hit || net;
      });
    }));
  }
});
