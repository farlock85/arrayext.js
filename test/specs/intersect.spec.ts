import { Pet, Dog } from './_.spec';

describe('intersect ', () => {
    it('returns an array of results that are both in common in the source and target arrays', () => {
        const id1: number[] = [44, 26, 92, 30, 71, 38];
        const id2: number[] = [39, 59, 83, 47, 26, 4, 30];

        const result = id2.intersect(id1);

        expect(result).toEqual([26, 30]);
    });
});
