import { Greeter } from '../src/index';

describe('Greeter Function', () => {

    it('Canary', () => {
        expect(Greeter).toBeTruthy();
    });

    it('should be a function', () => {
        expect(typeof Greeter).toBe('function');
    });

    it('should return `Hello Henry`', () => {
        expect(Greeter('Henry')).toBe('Hello Henry');
    });
});
