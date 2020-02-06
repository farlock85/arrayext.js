import { Pet, Dog } from './_';
import { curray } from '../../src/index';

describe('cast ', () => {
    beforeEach(() => {
        curray();
    });

    it('casts an array to another type', () => {
        const pets: Pet[] = [
            new Dog({ Age: 8, Name: 'Barley', Vaccinated: true }),
            new Pet({ Age: 1, Name: 'Whiskers', Vaccinated: false })
        ];

        const dogs = pets.cast<Dog>();

        expect(dogs[0].Speak).toBeDefined();
        expect(dogs[0].Speak()).toBe('Bark');
        expect(dogs[1].Speak).toBeUndefined();
    });
});
