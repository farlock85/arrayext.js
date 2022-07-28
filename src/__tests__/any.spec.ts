import { Pet } from './_';
import { curray } from '../../src/index';

describe('any ', () => {
    beforeEach(() => {
        curray();
    });

    it('returns true when any element of the array satisfies the condition', () => {
        const pets: Pet[] = [
            new Pet({ Age: 8, Name: 'Barley', Vaccinated: true }),
            new Pet({ Age: 4, Name: 'Boots', Vaccinated: false }),
            new Pet({ Age: 1, Name: 'Whiskers', Vaccinated: false })
        ];

        const results = pets.any((p) => p.Age > 1 && p.Vaccinated === false);
        expect(results).toBeTruthy();
    });

    it('returns false when none of the elements of the array satisfy the condition', () => {
        const pets: Pet[] = [
            new Pet({ Age: 8, Name: 'Barley', Vaccinated: true }),
            new Pet({ Age: 4, Name: 'Boots', Vaccinated: false }),
            new Pet({ Age: 1, Name: 'Whiskers', Vaccinated: false })
        ];

        const results = pets.any((p) => p.Age > 9 && p.Vaccinated === true);
        expect(results).toBeFalsy();
    });

    it('returns true when the array contains any element', () => {
        const pets: Pet[] = [
            new Pet({ Age: 8, Name: 'Barley', Vaccinated: true }),
            new Pet({ Age: 4, Name: 'Boots', Vaccinated: false }),
            new Pet({ Age: 1, Name: 'Whiskers', Vaccinated: false })
        ];

        const results = pets.any();
        expect(results).toBeTruthy();
    });
});
