import { Config, IMyGreatTestClass } from '../types';
import { AppConfig } from './config';

export class MyGreatTestClass implements IMyGreatTestClass {

    private _config: AppConfig;

    constructor() {
        this._config = new AppConfig();
    }

    config(config: Config): void {
        this._config.setConfig(config);

        // const $frame = createFrame();
        // this._config.$.append($frame);

        this.setListener();
    }

    send(): Promise<unknown> {
        throw new Error('Method not implemented.');
    }

    private setListener() {
        const cb = (e: MessageEvent<unknown>) => console.log(e);
        window.addEventListener('message', cb, false);
    }

    openWindow() {
        const WIDTH_SIZE = 600;
        const HEIGHT_SIZE = window.screen.height;

        const WIN_LEFT = (window.screen.width - WIDTH_SIZE) / 2;

        // const uri = 'http://localhost:8080/v2/login?clientId=viva-web&clientSecret=ABCD1234def&language=es-MX&redirectUri=https://solemti.com/auth.php&state=A123B4cd56';
        
        // const uri = 'http://localhost:8080/v2/login?clientId=viva-web&clientSecret=ABCD1234def&language=es-MX&redirectUri=https://solemti.com/auth.php&state=A123B4cd56';

        const uri = 'http://localhost:3000';

        // const uri = 'https://auth-test.doters.io/login?utm_medium=test&utm_source=test&utm_campaign=test&utm_content=test&utm_term=test&utm_id=test';
        
        window.open(uri, 'sso', `width=${WIDTH_SIZE},height=${HEIGHT_SIZE},left=${WIN_LEFT}`);
    }
}