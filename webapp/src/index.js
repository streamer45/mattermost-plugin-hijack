import {getConfig} from 'mattermost-redux/selectors/entities/general';

import manifest from './manifest';

export default class Plugin {
    // eslint-disable-next-line no-unused-vars
    initialize(registry, store) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/
        const config = getConfig(store.getState());
        const siteURL = config ? config.SiteURL : 'http://localhost:8065/';

        const pluginURL = siteURL.startsWith('https') ?
            `wss://${siteURL.substring(8)}/plugins/${manifest.id}` :
            `ws://${siteURL.substring(7)}/plugins/${manifest.id}`;

        const ws = new WebSocket(pluginURL);
        ws.addEventListener('error', () => {
            console.log('ERROR');
        });
        ws.addEventListener('close', () => {
            console.log('CLOSED');
        });
        ws.addEventListener('open', () => {
            console.log('CONNECTED');
            setInterval(() => {
                ws.send('Hello server!');
            }, 1000);
        });
        ws.addEventListener('message', (ev) => {
            console.log(ev.data);
        });
    }
}

window.registerPlugin(manifest.id, new Plugin());
