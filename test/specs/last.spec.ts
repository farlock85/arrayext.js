import { Pet, Dog } from './_.spec';

describe('last ', () => {
    it('returns the last element in an array', () => {
        const list: string[] = ['hey', 'hola', 'que', 'tal'];

        const result = list.last();

        expect(result).toEqual('tal');
    });

    it('throws an error when the array is empty', () => {
        const list: string[] = [];

        expect(() => list.last()).toThrowError(
            'InvalidOperationException: The source sequence is empty.'
        );
    });
});
