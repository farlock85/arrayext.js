import { Person } from './_';
import { curray } from '../../src/index';

describe('max', () => {
    beforeEach(() => {
        curray();
    });

    it('returns the largest number in an array', () => {
        const people: Person[] = [
            { Age: 15, Name: 'Cathy' },
            { Age: 25, Name: 'Alice' },
            { Age: 50, Name: 'Bob' }
        ];

        const result = people.max(m => m.Age);

        expect(result).toBe(50);
    });

    it('returns the largest number in an array', () => {
        const numbers = [2, 5, 3, 6, 1, 4];

        const result = numbers.max();

        expect(result).toBe(6);
    });
});
