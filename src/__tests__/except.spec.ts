import '../index';

describe('except ', () => {
  it('returns an array with results from the source array that are not contained in the target', () => {
    const numbers1: number[] = [2.0, 2.1, 2.2, 2.3, 2.4, 2.5];
    const numbers2: number[] = [2.2, 2.3];

    const results = numbers1.except(numbers2);

    expect(results).toEqual([2, 2.1, 2.4, 2.5]);
  });
});
