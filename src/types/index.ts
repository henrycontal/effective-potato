export interface Config {
    $: Element;
    env: string;
    client?: string;
}

export interface IMyGreatTestClass {
    config(opts: Config): void;
    send(): Promise<unknown>
}
