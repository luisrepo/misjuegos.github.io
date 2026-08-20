// EmulatorJS Loader
(function() {
    var settings = window;
    var w = settings.EJS_player ? document.querySelector(settings.EJS_player) : null;
    if (!w) return console.error('EmulatorJS: No se encontró el contenedor del juego.');

    var path = settings.EJS_pathtodata || 'https://emulatorjs.org';
    if (!path.endsWith('/')) path += '/';

    var iframe = document.createElement('iframe');
    iframe.src = path + 'emulator.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    
    iframe.addEventListener('load', function() {
        iframe.contentWindow.postMessage({
            type: 'init',
            settings: {
                gameUrl: settings.EJS_gameUrl,
                core: settings.EJS_core,
                biosUrl: settings.EJS_biosUrl,
                language: settings.EJS_language || 'es-ES'
            }
        }, '*');
    });

    w.appendChild(iframe);
})();
