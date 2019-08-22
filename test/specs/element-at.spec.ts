import { Pet, Dog } from './_.spec';

describe('elementAt ', () => {
    it('returns the elements in the array of the requested position', () => {
        const list: string[] = ['hey', 'hola', 'que', 'tal'];
        const results = list.elementAt(0);

        expect(results).toBe('hey');
    });

    it('throw an exception when the requested position is outside the bounds of the array', () => {
        const list: string[] = ['hey', 'hola', 'que', 'tal'];

        expect(() => list.elementAt(5)).toThrowError(
            'ArgumentOutOfRangeException: index is less than 0 or greater than or equal to the number of elements in source.'
        );
    });
});
