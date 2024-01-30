import type { Person } from './_';
import '../index';

describe('orderByDescending', () => {
  it('returns a sorted array', () => {
    const list = [4, 5, 6, 3, 2, 1];
    const expected = [6, 5, 4, 3, 2, 1];

    const result = list.orderByDescending((m) => m);

    expect(result[0]).toBe(expected[0]);
    expect(result[1]).toBe(expected[1]);
    expect(result[2]).toBe(expected[2]);
    expect(result[3]).toBe(expected[3]);
    expect(result[4]).toBe(expected[4]);
    expect(result[5]).toBe(expected[5]);
  });

  it('returns a sorted array with a predicate', () => {
    const people: Person[] = [
      { Age: 25, Name: 'Alice' },
      { Age: 15, Name: 'Cathy' },
      { Age: 50, Name: 'Bob' },
    ];

    const expected: Person[] = [
      { Age: 50, Name: 'Bob' },
      { Age: 25, Name: 'Alice' },
      { Age: 15, Name: 'Cathy' },
    ];

    const result = people.orderByDescending((m) => m.Age);

    expect(result[0]).toEqual(expected[0]);
    expect(result[1]).toEqual(expected[1]);
    expect(result[2]).toEqual(expected[2]);
  });

  it('should support sorting by strings', () => {
    const people: Person[] = [
      { Age: 15, Name: 'Cathy' },
      { Age: 25, Name: 'Alice' },
      { Age: 50, Name: 'Bob' },
    ];

    const result = people.orderByDescending((m) => m.Name);

    expect(result[0]!.Name).toEqual('Cathy');
    expect(result[1]!.Name).toEqual('Bob');
    expect(result[2]!.Name).toEqual('Alice');
  });
});
