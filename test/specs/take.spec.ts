import { Pet, Dog } from './_.spec';

describe('take', () => {
    it('returns the first element in an array', () => {
        const grades: number[] = [59, 82, 70, 56, 92, 98, 85];
        const expected: number[] = [59, 82, 70];

        const results = grades.take(3);

        expect(results).toEqual(expected);
    });
});
