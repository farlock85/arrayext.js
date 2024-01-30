import '../index';

describe('array ', () => {
    it('makes sure native array functions are still working on an OrderedArray', () => {
        const list: number[] = [3, 1, 2];

        const results = list.orderBy((m) => m);

        const result = results.slice(0, 2);
        expect(result).toStrictEqual([1, 2]);
    });

    it('makes sure for loop works on an OrderedArray', () => {
        const list: number[] = [3, 1, 2, 0];

        const results = list.orderBy((m) => m);

        for (let i = 0; i < results.length; i++) {
            expect(results[i]).toBe(i);
        }
    });
});
