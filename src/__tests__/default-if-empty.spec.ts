import { Pet } from './_';
import '../index';

describe('defaultIfEmpty ', () => {
  it('returns the array if the array is not empty', () => {
    const pets: Pet[] = [
      new Pet({ Age: 8, Name: 'Barley' }),
      new Pet({ Age: 4, Name: 'Boots' }),
      new Pet({ Age: 1, Name: 'Whiskers' }),
    ];

    const results = pets.defaultIfEmpty();

    expect(results.length).toBe(3);
  });

  it('returns the default value if the array is empty', () => {
    const pets: number[] = [];

    const results = pets.defaultIfEmpty(55);

    expect(results).toEqual([55]);
  });
});
