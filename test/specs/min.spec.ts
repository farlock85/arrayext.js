import { Pet, Dog, Person } from './_.spec';

describe('min', () => {
    it('returns the smallest number of an array with a predicate', () => {
        const people: Person[] = [
            { Age: 15, Name: 'Cathy' },
            { Age: 25, Name: 'Alice' },
            { Age: 50, Name: 'Bob' }
        ];

        const result = people.min(m => m.Age);

        expect(result).toBe(15);
    });

    it('returns the smallest number of an array', () => {
        const numbers = [2, 5, 3, 6, 1, 4];

        const result = numbers.min();

        expect(result).toBe(1);
    });
});
