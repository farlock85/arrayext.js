import { Pet, Dog } from './_.spec';

describe('returns an array with only distinct items in an array by a predicate', () => {
    it('returns the array if the array is not empty', () => {
        const pets: Pet[] = [
            new Pet({ Age: 1, Name: 'Whiskers' }),
            new Pet({ Age: 4, Name: 'Boots' }),
            new Pet({ Age: 8, Name: 'Barley' }),
            new Pet({ Age: 4, Name: 'Daisy' })
        ];
        const expected: Pet[] = [
            new Pet({ Age: 1, Name: 'Whiskers' }),
            new Pet({ Age: 4, Name: 'Boots' }),
            new Pet({ Age: 8, Name: 'Barley' })
        ];

        const results = pets.distinctBy(m => m.Age);

        expect(results).toEqual(expected);
    });

    it('returns an array with only distinct primitives in an array', () => {
        const ages: number[] = [21, 46, 46, 55, 17, 21, 55, 55];

        const results = ages.distinctBy(m => m);

        expect(results).toEqual([17, 21, 46, 55]);
    });
});
