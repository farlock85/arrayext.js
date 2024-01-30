import '../index';

describe('addRange', () => {
    it('returns an array with the newly added items from another array', () => {
        const list: string[] = [];
        list.addRange(['hey', "what's", 'up']);

        expect(list).toEqual(['hey', "what's", 'up']);
    });
});
