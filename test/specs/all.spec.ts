import { Pet } from './_.spec';

describe('all ', () => {
    it('returns true when all elements of the array satisfy the condition', () => {
        const pets: Pet[] = [
            new Pet({ Age: 10, Name: 'Barley' }),
            new Pet({ Age: 4, Name: 'Boots' }),
            new Pet({ Age: 6, Name: 'Bingo' })
        ];
        let results = pets.all(pet => pet.Name.startsWith('B'));
        expect(results).toBeTruthy();
    });

    it('returns false when not all elements of the array satisfy the condition', () => {
        const pets: Pet[] = [
            new Pet({ Age: 10, Name: 'Barley' }),
            new Pet({ Age: 4, Name: 'Boots' }),
            new Pet({ Age: 6, Name: 'Whiskers' })
        ];
        let results = pets.all(pet => pet.Name.startsWith('B'));
        expect(results).toBeFalsy();
    });
});
