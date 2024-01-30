import { Pet } from './_';
import '../index';

describe('sequenceEqual', () => {
  it('returns true when a sequence matches the given array', () => {
    const pet1 = new Pet({ Age: 2, Name: 'Turbo' });
    const pet2 = new Pet({ Age: 8, Name: 'Peanut' });

    const pets1 = [pet1, pet2];
    const pets2 = [pet1, pet2];

    const results = pets1.sequenceEqual(pets2);

    expect(results).toBeTruthy();
  });

  it('returns false when a sequence does not match the given array', () => {
    const pet1 = new Pet({ Age: 2, Name: 'Turbo' });
    const pet2 = new Pet({ Age: 8, Name: 'Peanut' });

    const pets1 = [pet1, pet2];
    const pets3 = [pet1];

    const results = pets1.sequenceEqual(pets3);

    expect(results).toBeFalsy();
  });
});
