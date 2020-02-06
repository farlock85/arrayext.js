import { curray } from '../../src/index';

describe('union', () => {
    beforeEach(() => {
        curray();
    });

    it('returns a unified array of 2 arrays with distinct values', () => {
        const ints1: number[] = [5, 3, 9, 7, 5, 9, 3, 7];
        const ints2: number[] = [8, 3, 6, 4, 4, 9, 1, 0];

        const expected = [5, 3, 9, 7, 8, 6, 4, 1, 0];

        const results = ints1.union(ints2);

        expect(results).toEqual(expected);
    });
});
