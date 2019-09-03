import { curray } from '../../src/index';

describe('single ', () => {
    beforeEach(() => {
        curray();
    });

    it('returns the first element in an array', () => {
        const list: string[] = ['hey'];

        const result = list.single();

        expect(result).toEqual('hey');
    });

    it('throws an error when the array is empty', () => {
        const list: string[] = [];

        expect(() => list.single()).toThrowError(
            'InvalidOperationException: The collection does not contain exactly one element.'
        );
    });

    it('throws an error when the array has more than a single element', () => {
        const list: string[] = ['hey', 'you'];

        expect(() => list.single()).toThrowError(
            'InvalidOperationException: The collection does not contain exactly one element.'
        );
    });
});
