import { Pet } from './_';
import '../index';

describe('groupBy', () => {
  it('returns a grouped result based on the predicate', () => {
    const pets: Pet[] = [
      new Pet({ Age: 8, Name: 'Barley' }),
      new Pet({ Age: 4, Name: 'Boots' }),
      new Pet({ Age: 1, Name: 'Whiskers' }),
      new Pet({ Age: 4, Name: 'Daisy' }),
    ];

    const result = {
      '1': [new Pet({ Age: 1, Name: 'Whiskers' })],
      '4': [
        new Pet({ Age: 4, Name: 'Boots' }),
        new Pet({ Age: 4, Name: 'Daisy' }),
      ],
      '8': [new Pet({ Age: 8, Name: 'Barley' })],
    };

    const results = pets.groupBy((m) => m.Age);

    expect(results).toEqual(result);
  });

  it('returns a grouped mapped result based on the predicate', () => {
    const pets: Pet[] = [
      new Pet({ Age: 8, Name: 'Barley' }),
      new Pet({ Age: 4, Name: 'Boots' }),
      new Pet({ Age: 1, Name: 'Whiskers' }),
      new Pet({ Age: 4, Name: 'Daisy' }),
    ];

    const result = {
      '1': ['Whiskers'],
      '4': ['Boots', 'Daisy'],
      '8': ['Barley'],
    };

    const results = pets.groupBy(
      (m) => m.Age,
      (m) => m.Name,
    );

    expect(results).toEqual(result);
  });
});
