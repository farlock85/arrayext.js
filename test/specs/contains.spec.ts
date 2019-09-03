import { Pet, Dog } from './_';
import { curray } from '../../src/index';

describe('contains ', () => {
    beforeEach(() => {
        curray();
    });

    it('returns true when an element is contained in an array', () => {
        const fruits: string[] = [
            'apple',
            'banana',
            'mango',
            'orange',
            'passionfruit',
            'grape'
        ];

        const results = fruits.contains('mango');

        expect(results).toBeTruthy();
    });

    it('returns false when an element is not contained in an array', () => {
        const fruits: string[] = [
            'apple',
            'banana',
            'mango',
            'orange',
            'passionfruit',
            'grape'
        ];

        const results = fruits.contains('pear');

        expect(results).toBeFalsy();
    });
});
