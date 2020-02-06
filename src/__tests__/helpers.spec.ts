import { curray } from '../../src/index';
import { isObj, equal } from '../../src/helpers';

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

        it('returns true when an object is equal', () => {
            const source = {
                a: { test: true }
            };
            const target = {
                a: { test: true }
            };
            const result = equal(source, target);
            expect(result).toBe(true);
        });

        it('returns false when an object is not equal', () => {
            const source = {
                a: { test: true }
            };
            const target = {
                a: { test: false }
            };
            const result = equal(source, target);
            expect(result).toBe(false);
        });
    });
});
