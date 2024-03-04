export default {
    manifest: {
        name: 'Platinum Karaoke Songbook',
        short_name: 'songbook',
        description: 'Platinum Karaoke Songbook',
        icons: [
            {src: 'icons/pwa-64x64.png', sizes: '64x64', type: 'image/png'},
            {src: 'icons/pwa-192x192.png', sizes: '192x192', type: 'image/png'},
            {src: 'icons/pwa-512x512.png', sizes: '512x512', type: 'image/png'},
        ],
        start_url: "/"
    },
    workbox: {
        maximumFileSizeToCacheInBytes: 10000000
    },
    devOptions: {
        enabled: true,
        type: "module"
    }
}