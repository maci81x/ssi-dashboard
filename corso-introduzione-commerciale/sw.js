const CACHE = "ssi-start-d466bd6fb4";
const FILES = ["./", "index.html", "content.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "pdf/SSI-Start-00-Benvenuto.pdf", "pdf/SSI-Start-01-Il-kit-base-81-08.pdf", "pdf/SSI-Start-02-Formazione-emergenze-visite.pdf", "pdf/SSI-Start-03-HACCP-e-igiene-alimenti.pdf", "pdf/SSI-Start-04-Ristorazione-e-bar.pdf", "pdf/SSI-Start-05-Hotel-agriturismi-piscine.pdf", "pdf/SSI-Start-06-Agricoltura-cantine-frantoi.pdf", "pdf/SSI-Start-07-Edilizia-e-impiantisti.pdf", "pdf/SSI-Start-08-Officine-e-manifattura.pdf", "pdf/SSI-Start-09-Commercio-uffici-servizi.pdf", "pdf/SSI-Start-10-Persona-e-salute.pdf", "kit/SSI-Prontuario-agente.pdf", "kit/SSI-Modello-raccolta-dati-compilabile.pdf"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("ssi-start-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if(e.request.method !== "GET" || u.origin !== location.origin) return;
  if(u.pathname.endsWith("/admin.html")) return;
  const doc = e.request.mode === "navigate" || /\.(html|js|webmanifest)$/.test(u.pathname);
  if(doc) e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request, {ignoreSearch: true})));
  else e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
