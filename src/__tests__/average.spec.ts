import type { Person } from './_';
import '../index';

describe('average ', () => {
  it('averages the numbers of a predicate', () => {
    const people: Person[] = [
      { Age: 15, Name: 'Cathy' },
      { Age: 25, Name: 'Alice' },
      { Age: 50, Name: 'Bob' },
    ];
    const result = people.average((m) => m.Age);

    expect(result).toBe(30);
  });

  it('averages the numbers of an array', () => {
    const result = [78, 92, 100, 37, 81].average();
    expect(result).toBe(77.6);
  });
});
