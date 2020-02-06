import { curray } from '../../src/index';

describe('zip', () => {
    beforeEach(() => {
        curray();
    });

    it('returns the elements of an array filtered based on a predicate', () => {
        const numbers: number[] = [1, 2, 3, 4];
        const words: string[] = ['one', 'two', 'three'];

        const expected = ['1 one', '2 two', '3 three'];

        const result = numbers.zip(words, (first, second) => `${first} ${second}`);

        expect(result).toEqual(expected);
    });

    it('returns the elements of an array filtered based on a predicate', () => {
        const numbers: number[] = [1, 2, 3, 4];
        const words: string[] = ['one', 'two', 'three', 'four'];

        const expected = ['1 one', '2 two', '3 three', '4 four'];

        const result = numbers.zip(words, (first, second) => `${first} ${second}`);

        expect(result).toEqual(expected);
    });
});
