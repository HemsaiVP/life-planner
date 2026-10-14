// Slate (formerly Life Planner) service worker: works offline, updates itself.
const CACHE = 'planner-4.4';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icons/slate-192.png', './icons/slate-512.png', './icons/slate-maskable-512.png', './icons/slate-touch-180.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });

const within = (p, ms) => new Promise((res, rej) => {
  const t = setTimeout(() => rej(new Error('slow')), ms);
  p.then(v => { clearTimeout(t); res(v); }, err => { clearTimeout(t); rej(err); });
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.mode === 'navigate'){
    // Newest version when online, cached copy when offline or slow.
    const net = fetch(r);
    e.waitUntil(net.then(res => { if (res.ok) return caches.open(CACHE).then(c => c.put('./index.html', res.clone())); }).catch(() => {}));
    e.respondWith(within(net.then(res => res.clone()), 3000)
      .catch(() => caches.match('./index.html'))
      .then(x => x || net));
    return;
  }
  // The app's name and icons: newest first, so an installed app picks up a new name or icon quickly.
  const path = new URL(r.url).pathname;
  if (/manifest\.webmanifest$|\/icons\//.test(path)){
    e.respondWith(fetch(r, {cache:'no-cache'}).then(res => { if (res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); } return res; }).catch(() => caches.match(r)));
    return;
  }
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => {
    if (res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); }
    return res;
  })));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window', includeUncontrolled:true}).then(list => {
    for (const c of list) if ('focus' in c) return c.focus();
    return self.clients.openWindow('./');
  }));
});
