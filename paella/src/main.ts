import { Paella, type Manifest } from '@asicupv/paella-core';
import { basicPlugins } from '@asicupv/paella-basic-plugins';
import { videoPlugins } from '@asicupv/paella-video-plugins';
import { slidePlugins } from '@asicupv/paella-slide-plugins';
import { userTrackingPlugins } from '@asicupv/paella-user-tracking';
import { zoomPlugins } from '@asicupv/paella-zoom-plugin';

import '@asicupv/paella-core/paella-core.css';
import '@asicupv/paella-basic-plugins/paella-basic-plugins.css';
import '@asicupv/paella-slide-plugins/paella-slide-plugins.css';

export const initPaella = (configUrl: string, themeURL: string, manifest: Manifest) => {
    let paella = new Paella('playerContainer', {
        configUrl: configUrl,
        getVideoId: () => manifest.metadata.id as string,
        getManifestUrl: () => 'dummy',
        getManifestFileUrl: () => 'dummy',
        loadVideoManifest: () => manifest,
        plugins: [
            ...basicPlugins,
            ...videoPlugins,
            ...slidePlugins,
            ...zoomPlugins,
            ...userTrackingPlugins,
        ],
    });
    paella.skin.loadSkin(themeURL);
    paella.loadManifest()
        .then(() => console.log("Initialization done"))
        .catch(e => console.error(e));
}
