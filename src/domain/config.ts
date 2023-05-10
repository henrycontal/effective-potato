import { Config } from '../types';

export class AppConfig {

    private _$: Element | null;
    private _env: string;

    constructor() {
        this._$ = null;
        this._env = 'dev';
    }

    public get $(): Element {
        if (!this._$) throw new Error('Should get an element reference');
        return this._$;
    }

    public get env(): string {
        return this._env;
    }
    
    setConfig(config: Config) {
        if (!config.$) {
            throw new Error('Should get an element reference');
        }

        this._$ = config.$;
        this._env = config.env ?? this._env;
    }
}