/**
 * Service worker
 * @author Bruno Henrique
 */

// Instalação (cache "armazenamento local")
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                cache.add('./flexv2/')
                cache.add('./flexv2/index.html')
                cache.add('./flexv2/style.css')
                cache.add('./flexv2/app.js')
                cache.add('./flexv2/img/flex.png')
                cache.add('./flexv2/img/calcflex.png')
                cache.add('./flexv2/img/etanol.png')
                cache.add('./flexv2/img/gasolina.png')
            })
    )
})
// Ativação
self.addEventListener('activate', (event) => {
    console.log("Ativando o service worker...", event)
    return self.clients.claim()

})

// Interceptação (solicitações https servindo em cache quando offline)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response
                } else {

                }
            })
    )
})