import { Pet, Dog } from './_.spec';

describe('first ', () => {
    it('returns the first element in an array', () => {
        const list: string[] = ['hey', 'hola', 'que', 'tal'];

        const result = list.first();

        expect(result).toEqual('hey');
    });

    it('throws an error when the array is empty', () => {
        const list: string[] = [];

        expect(() => list.first()).toThrowError(
            'InvalidOperationException: The source sequence is empty.'
        );
    });
});
