// Cache the app shell and masjid list so it opens offline. Always check GitHub for a newer copy first
// (no-cache skips the 10-minute browser cache), so updates show on the next open.
const C="masjids-v16";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","masjids.json","manifest.webmanifest","icon.svg"])));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(u.origin!==location.origin)return;
  e.respondWith(caches.open(C).then(c=>fetch(e.request,{cache:"no-cache"}).then(r=>{c.put(e.request,r.clone());return r}).catch(()=>c.match(e.request))));
});
