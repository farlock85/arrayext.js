import { curray } from '../../src/index';

describe('takeWhile', () => {
    beforeEach(() => {
        curray();
    });

    it('returns the first element in an array', () => {
        const fruits: string[] = ['apple', 'banana', 'mango', 'orange', 'passionfruit', 'grape'];
        const expected = ['apple', 'banana', 'mango'];

        const results = fruits.takeWhile(m => m !== 'orange');

        expect(results).toEqual(expected);
    });
});
