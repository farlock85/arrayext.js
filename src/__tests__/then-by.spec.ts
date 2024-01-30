import '../index';

describe('thenBy', () => {
    it('returns a sorted array by a predicate', () => {
        const fruits: string[] = [
            'grape',
            'passionfruit',
            'banana',
            'mango',
            'orange',
            'raspberry',
            'apple',
            'blueberry'
        ];

        // sort the strings first by their length and then
        // alphabetically by passing the identity selector function.
        const expected = [
            'apple',
            'grape',
            'mango',
            'banana',
            'orange',
            'blueberry',
            'raspberry',
            'passionfruit'
        ];

        const results = fruits.orderBy((m) => m.length).thenBy((m) => m);

        expect(results[0]).toBe(expected[0]);
        expect(results[1]).toBe(expected[1]);
        expect(results[2]).toBe(expected[2]);
        expect(results[3]).toBe(expected[3]);
        expect(results[4]).toBe(expected[4]);
        expect(results[5]).toBe(expected[5]);
        expect(results[6]).toBe(expected[6]);
        expect(results[7]).toBe(expected[7]);
    });
});
