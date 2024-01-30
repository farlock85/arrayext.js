import { Pet } from './_';
import '../index';

describe('indexOf ', () => {
  it('returns the position of the element in the array of primitives', () => {
    const fruits: string[] = [
      'apple',
      'banana',
      'mango',
      'orange',
      'passionfruit',
      'grape',
    ];

    const result = fruits.indexOf('orange');

    expect(result).toBe(3);
  });

  it('returns -1 when the element in an array is not found', () => {
    const fruits: string[] = [
      'apple',
      'banana',
      'mango',
      'orange',
      'passionfruit',
      'grape',
    ];

    const result = fruits.indexOf('strawberry');

    expect(result).toBe(-1);
  });

  it('returns the position of the element in the array of objects', () => {
    const barley = new Pet({ Age: 8, Name: 'Barley', Vaccinated: true });
    const boots = new Pet({ Age: 4, Name: 'Boots', Vaccinated: false });
    const whiskers = new Pet({
      Age: 1,
      Name: 'Whiskers',
      Vaccinated: false,
    });
    const pets: Pet[] = [barley, boots, whiskers];

    const result = pets.indexOf(boots);

    expect(result).toBe(1);
  });
});
