import '../index';

describe('where', () => {
    it('returns the elements of an array filtered based on a predicate', () => {
        const fruits = [
            'apple',
            'passionfruit',
            'banana',
            'mango',
            'orange',
            'blueberry',
            'grape',
            'strawberry'
        ];

        const expected = ['apple', 'mango', 'grape'];

        const result = fruits.where((fruit) => fruit.length < 6);

        expect(result).toEqual(expected);
    });
});
