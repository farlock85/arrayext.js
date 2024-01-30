import { Pet, Person } from './_';
import '../index';

describe('groupJoin', () => {
    it('returns an array of group joined elements', () => {
        const magnus = new Person({ Name: 'Hedlund, Magnus', Age: 1 });
        const terry = new Person({ Name: 'Adams, Terry', Age: 1 });
        const charlotte = new Person({ Name: 'Weiss, Charlotte', Age: 1 });

        const barley = new Pet({ Name: 'Barley', Owner: terry, Age: 1 });
        const boots = new Pet({ Name: 'Boots', Owner: terry, Age: 1 });
        const whiskers = new Pet({ Name: 'Whiskers', Owner: charlotte, Age: 1 });
        const daisy = new Pet({ Name: 'Daisy', Owner: magnus, Age: 1 });

        const people: Person[] = [magnus, terry, charlotte];
        const pets: Pet[] = [barley, boots, whiskers, daisy];

        // create a list where each element is an anonymous
        // type that contains a person's name and
        // a collection of names of the pets they own.
        const query = people.groupJoin(
            pets,
            (person) => person,
            (pet) => pet.Owner,
            (person, petCollection) => ({
                OwnerName: person.Name,
                Pets: petCollection.select((pet) => pet.Name)
            })
        );
        const expected = [
            'Hedlund, Magnus: Daisy',
            'Adams, Terry: Barley,Boots',
            'Weiss, Charlotte: Whiskers'
        ];

        const results = query.select((obj) => `${obj.OwnerName}: ${obj.Pets}`);

        expect(results).toEqual(expected);
    });
});
