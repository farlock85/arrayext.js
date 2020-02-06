import { Pet, Dog } from './_';
import { curray } from '../../src/index';

describe('distinct', () => {
    beforeEach(() => {
        curray();
    });

    it('returns an array with only distinct items in an array of objects', () => {
        const pets: Pet[] = [
            new Pet({ Age: 1, Name: 'Whiskers' }),
            new Pet({ Age: 1, Name: 'Whiskers' }),
            new Pet({ Age: 8, Name: 'Barley' }),
            new Pet({ Age: 8, Name: 'Barley' }),
            new Pet({ Age: 9, Name: 'Corey' })
        ];
        const expected: Pet[] = [
            new Pet({ Age: 1, Name: 'Whiskers' }),
            new Pet({ Age: 8, Name: 'Barley' }),
            new Pet({ Age: 9, Name: 'Corey' })
        ];

        const results = pets.distinct();

        expect(results).toEqual(expected);
    });

    it('returns an array with only distinct primitives in an array of primitives', () => {
        const ages: number[] = [21, 46, 46, 55, 17, 21, 55, 55];

        const results = ages.distinct();

        expect(results).toEqual([21, 46, 55, 17]);
    });
});
