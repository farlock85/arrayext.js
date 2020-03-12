import { curray } from '../../src/index';

describe('elementAtOrDefault ', () => {
    beforeEach(() => {
        curray();
    });

    it('returns the elements in the array of the requested position', () => {
        const list: string[] = ['hey', 'hola', 'que', 'tal'];

        const results = list.elementAtOrDefault(0);

        expect(results).toBe('hey');
    });

    it('returns the elements in the array of the requested position', () => {
        const list: number[] = [2, 1, 0, -1, -2];

        const results = list.elementAtOrDefault(2);

        expect(results).toBe(0);
    });

    it('returns the default value when the position in the array is out of bounds', () => {
        const list: string[] = ['hey', 'hola', 'que', 'tal'];

        expect(() => list.elementAtOrDefault(4)).toThrowError(
            'ArgumentOutOfRangeException: index is less than 0 or greater than or equal to the number of elements in source.'
        );
    });
});
