export const init = (configUrl, themeUrl, manifest) => {
    const iframeWindow = document.getElementById('player-iframe').contentWindow;

    if (!iframeWindow.MoodlePaellaPlayer) {
        setTimeout(init, 20, configUrl, themeUrl, manifest);
    } else {
        iframeWindow.MoodlePaellaPlayer.initPaella(configUrl, themeUrl, manifest);
    }
};
