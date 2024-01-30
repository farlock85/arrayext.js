import '../index';

describe('firstOrDefault', () => {
    it('returns the first element in an array', () => {
        const list: string[] = ['hey'];

        const result = list.singleOrDefault();

        expect(result).toEqual('hey');
    });

    it('return null when there are no elements in the array', () => {
        const list: string[] = [];

        const result = list.singleOrDefault();

        expect(result).toBeNull();
    });

    it('throws an error when the array has more than a single element', () => {
        const list: string[] = ['hey', 'you'];

        expect(() => list.singleOrDefault()).toThrowError(
            'InvalidOperationException: The collection does not contain exactly one element.'
        );
    });
});
