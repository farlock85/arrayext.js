import { Pet, Dog, PetOwner } from './_';
import { curray } from '../../src/index';

describe('selectMany', () => {
    beforeEach(() => {
        curray();
    });

    it('returns an array with the projected predicate', () => {
        const petOwners: PetOwner[] = [
            new PetOwner('Higa, Sidney', [
                new Pet({ Name: 'Scruffy' }),
                new Pet({ Name: 'Sam' })
            ]),
            new PetOwner('Ashkenazi, Ronen', [
                new Pet({ Name: 'Walker' }),
                new Pet({ Name: 'Sugar' })
            ]),
            new PetOwner('Price, Vernette', [
                new Pet({ Name: 'Scratches' }),
                new Pet({ Name: 'Diesel' })
            ])
        ];

        const expected = [
            'Scruffy',
            'Sam',
            'Walker',
            'Sugar',
            'Scratches',
            'Diesel'
        ];

        const results = petOwners.selectMany(m => m.Pets).select(m => m.Name);

        expect(results).toEqual(expected);
    });
});
