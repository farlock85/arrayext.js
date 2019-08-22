import { Pet, Dog } from './_.spec';

describe('lastOrDefault', () => {
    it('returns the last element in an array', () => {
        const list: string[] = ['hey', 'hola', 'que', 'tal'];

        const result = list.lastOrDefault();

        expect(result).toEqual('tal');
    });

    it('returns null when the array is empty', () => {
        const list: string[] = [];

        const result = list.lastOrDefault();

        expect(result).toBeNull();
    });

    it('returns the first element in an array with a predicate', () => {
        const pets: Pet[] = [
            new Pet({ Age: 8, Name: 'Barley', Vaccinated: true }),
            new Pet({ Age: 4, Name: 'Boots', Vaccinated: false }),
            new Pet({ Age: 1, Name: 'Whiskers', Vaccinated: false })
        ];

        const result = pets.lastOrDefault(m => m.Age < 8);

        expect(result.Name).toEqual('Whiskers');
    });

    it('returns null when the array is empty with a predicate', () => {
        const pets: Pet[] = [
            new Pet({ Age: 8, Name: 'Barley', Vaccinated: true }),
            new Pet({ Age: 4, Name: 'Boots', Vaccinated: false }),
            new Pet({ Age: 1, Name: 'Whiskers', Vaccinated: false })
        ];

        const result = pets.lastOrDefault(m => m.Age > 8);

        expect(result).toBeNull();
    });
});
