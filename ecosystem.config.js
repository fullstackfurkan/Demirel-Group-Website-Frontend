module.exports = {
    apps: [
        {
            name: 'MyNextApp',
            // Next.js çalıştırıcısını doğrudan çağır
            script: 'node_modules/next/dist/bin/next', 
            args: 'start -p 3000', // start komutu ve port
            exec_mode: 'fork',
            cwd: 'C:/DemirelGroupBuildingWebSite_frontend', // Klasör yolunuzu teyit edin
            env: {
                NODE_ENV: 'production',
                NEXT_PUBLIC_API_URL: 'http://localhost:8081',
            }
        },
    ],
};