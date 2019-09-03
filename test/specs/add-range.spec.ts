import { curray } from '../../src/index';

describe('addRange', () => {
    beforeEach(() => {
        curray();
    });

    it('returns an array with the newly added items from another array', () => {
        const list: string[] = [];
        list.addRange(['hey', "what's", 'up']);

        expect(list).toEqual(['hey', "what's", 'up']);
    });
});
