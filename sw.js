// Cache the app shell and masjid list so it opens offline; refresh in the background.
const C="masjids-v2";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","masjids.json","manifest.webmanifest","icon.svg"])));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(u.origin!==location.origin)return;
  e.respondWith(caches.open(C).then(c=>fetch(e.request).then(r=>{c.put(e.request,r.clone());return r}).catch(()=>c.match(e.request))));
});
