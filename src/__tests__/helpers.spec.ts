import { curray } from '../../src/index';
import { isObj } from '../../src/helpers';

describe('Helpers ', () => {
    beforeEach(() => {
        curray();
    });

    describe('isObj', () => {
        it('returns true when the passed argument is an object', () => {
            const realObject = {};
            const result = isObj(realObject);
            expect(result).toBe(true);
        });

        it('returns false when the passed argument is not an object', () => {
            const notARealObject = 1;
            const result = isObj(notARealObject);
            expect(result).toBe(false);
        });
    });
});
