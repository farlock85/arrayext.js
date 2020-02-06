import { Pet, Dog } from './_';
import { curray } from '../../src/index';

describe('select', () => {
    beforeEach(() => {
        curray();
    });

    it('returns an array with the projected predicate', () => {
        const numbers: number[] = [1, 2, 3];
        const expected: number[] = [2, 4, 6];

        const results = numbers.select(m => m * 2);

        expect(results).toEqual(expected);
    });
});
