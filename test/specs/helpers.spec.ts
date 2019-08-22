import { isObj, equal } from '../../src/helpers';

describe('Helpers ', () => {
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

    describe('equal', () => {
        it('returns true when an non object is equal', () => {
            const source = {
                a: 1
            };
            const target = {
                a: 1
            };
            const result = equal(source, target);
            expect(result).toBe(true);
        });

        it('returns false when an non object is not equal', () => {
            const source = {
                a: 1
            };
            const target = {
                a: 2
            };
            const result = equal(source, target);
            expect(result).toBe(false);
        });
    });
});
