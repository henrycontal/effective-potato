export interface Config {
    $: Element;
    env?: string;
    client?: string;
    strategy?: StrategyType;
}

export interface IMyGreatTestClass {
    config(opts: Config): void;
}

export type StrategyType = 'pop' | 'frame';
