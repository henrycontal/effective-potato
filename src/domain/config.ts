import { Config, StrategyType } from '../types';

export class AppConfig {

    private _$: Element | null;
    private _env: string;
    private _strategy: StrategyType;

    constructor() {
        this._$ = null;
        this._env = 'dev';
        this._strategy = 'pop';
    }

    public get $(): Element {
        if (!this._$) throw new Error('Should get an element reference');
        return this._$;
    }

    public get env(): string {
        return this._env;
    }

    public get strategy(): StrategyType {
        return this._strategy;
    }
    
    setConfig(config: Config) {
        this._$ = config.$;
        this._env = config.env ?? this._env;
        this._strategy = config.strategy ?? this._strategy;
    }
}