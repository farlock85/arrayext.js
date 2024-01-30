import { Pet, PetOwner } from './_';
import '../index';

describe('selectMany', () => {
  it('returns an array with the projected predicate', () => {
    const petOwners: PetOwner[] = [
      new PetOwner('Higa, Sidney', [
        new Pet({ Name: 'Scruffy', Age: 1 }),
        new Pet({ Name: 'Sam', Age: 1 }),
      ]),
      new PetOwner('Ashkenazi, Ronen', [
        new Pet({ Name: 'Walker', Age: 1 }),
        new Pet({ Name: 'Sugar', Age: 1 }),
      ]),
      new PetOwner('Price, Vernette', [
        new Pet({ Name: 'Scratches', Age: 1 }),
        new Pet({ Name: 'Diesel', Age: 1 }),
      ]),
    ];

    const expected = [
      'Scruffy',
      'Sam',
      'Walker',
      'Sugar',
      'Scratches',
      'Diesel',
    ];

    const results = petOwners.selectMany((m) => m.Pets).select((m) => m.Name);

    expect(results).toEqual(expected);
  });
});
