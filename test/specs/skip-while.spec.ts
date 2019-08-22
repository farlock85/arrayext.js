import { Pet, Dog } from './_.spec';

describe('skipWhile', () => {
    it('returns the first element in an array', () => {
        const grades: number[] = [98, 92, 85, 82, 70, 59, 56];
        const expected: number[] = [70, 59, 56];

        const results = grades.skipWhile(m => m >= 80);

        expect(results).toEqual(expected);
    });
});
