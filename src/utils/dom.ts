export const $ = <T extends Element>(selector: string, ctx = document) => ctx.querySelector<T>(selector);
export const $$ = <T extends Element>(selector: string, ctx = document) => ctx.querySelectorAll<T>(selector);
