
self.addEventListener('install',function(event){
	console.log('[Service Worker] Installing service Worker ...',event);
});

self.addEventListener('actuvate',function(event){
	console.log('[Service Worker] Activating service Worker ...',event);
	return self.clients.claim();
});

self.addEventListener('fetch',function(event){
	console.log('[Service Worker] Fetching  Something ....', event);
	event.respondWith(fetch(event.request));
});