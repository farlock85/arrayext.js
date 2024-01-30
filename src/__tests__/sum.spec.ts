import type { Person } from './_';
import '../index';

describe('sum', () => {
  it('sums the numbers of a predicate', () => {
    const people: Person[] = [
      { Age: 15, Name: 'Cathy' },
      { Age: 25, Name: 'Alice' },
      { Age: 50, Name: 'Bob' },
    ];
    const result = people.sum((m) => m.Age);

    expect(result).toBe(90);
  });

  it('averages the numbers of an array', () => {
    const result = [78, 92, 100, 37, 81].sum();
    expect(result).toBe(388);
  });
});
