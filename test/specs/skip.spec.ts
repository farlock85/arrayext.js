import { Pet, Dog } from './_.spec';

describe('skip ', () => {
    it('returns the elements in an array after skipping a number of elements', () => {
        const grades: number[] = [59, 82, 70, 56, 92, 98, 85];
        const expected: number[] = [56, 92, 98, 85];

        const results = grades.skip(3);

        expect(results).toEqual(expected);
    });
});
