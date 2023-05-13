import { Config, IMyGreatTestClass } from '../types';
import { createFrame } from '../utils/dom';
import { getUriWithParams } from '../utils/string';
import { AppConfig } from './config';

export class MyGreatTestClass implements IMyGreatTestClass {

    private _config: AppConfig;

    constructor() {
        this._config = new AppConfig();
    }

    config(config: Config): void {
        this._config.setConfig(config);
    }

    login(cb: (sso: unknown) => void) {
        const uri = 'http://localhost:3000';

        const eventHandler = (e: MessageEvent<unknown>) => {
            console.log('LIBRARY EVENT: ', e);
            cb(e.data);
        };

        window.addEventListener('message', eventHandler, false);

        switch (this._config.strategy) {
        case 'frame':
            this.loadFrame(uri);
            break;
            
        default:
            this.openPopUp(uri);
            break;
        }
    }

    private loadFrame(uri: string) {
        const uriWithParams = getUriWithParams(uri, this._config);
        
        const $frame = createFrame(uriWithParams);
        this._config.$.append($frame);
    }

    private openPopUp(uri: string,) {
        const uriWithParams = getUriWithParams(uri, this._config);

        const WIDTH_SIZE = 600;

        const HEIGHT_SIZE = window.screen.height;
        const WIN_LEFT = (window.screen.width - WIDTH_SIZE) / 2;

        window.open(uriWithParams, 'sso', `width=${WIDTH_SIZE},height=${HEIGHT_SIZE},left=${WIN_LEFT}`);
    }
}