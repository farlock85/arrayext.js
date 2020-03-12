import { Pet, Dog } from './_';
import { curray } from '../../src/index';

describe('ofType', () => {
    beforeEach(() => {
        curray();
    });

    it('returns an array wit the elements that are of a specific type', () => {
        const anyArray = [
            'dogs',
            'cats',
            13,
            true,
            () => {
                return 0;
            },
            new Dog({ Age: 8, Name: 'Barley', Vaccinated: true }),
            new Pet({ Age: 1, Name: 'Whiskers', Vaccinated: false })
        ];

        const dogs = anyArray.ofType<Dog>(Dog);

        expect(anyArray.ofType(String).length).toBe(2);
        expect(anyArray.ofType(Number).length).toBe(1);
        expect(anyArray.ofType(Boolean).length).toBe(1);
        expect(anyArray.ofType(Function).length).toBe(1);
        expect(anyArray.ofType(Dog).length).toBe(1);
        expect(anyArray.ofType(Pet).length).toBe(2);
        expect(dogs[0].Speak()).toBe('Bark');
    });
});
