import { Pet, Person } from './_.spec';

describe('groupJoin', () => {
    it('returns an array of group joined elements', () => {
        const magnus = new Person({ Name: 'Hedlund, Magnus' });
        const terry = new Person({ Name: 'Adams, Terry' });
        const charlotte = new Person({ Name: 'Weiss, Charlotte' });

        const barley = new Pet({ Name: 'Barley', Owner: terry });
        const boots = new Pet({ Name: 'Boots', Owner: terry });
        const whiskers = new Pet({ Name: 'Whiskers', Owner: charlotte });
        const daisy = new Pet({ Name: 'Daisy', Owner: magnus });

        const people: Person[] = [magnus, terry, charlotte];
        const pets: Pet[] = [barley, boots, whiskers, daisy];

        // create a list where each element is an anonymous
        // type that contains a person's name and
        // a collection of names of the pets they own.
        const query = people.groupJoin(
            pets,
            person => person,
            pet => pet.Owner,
            (person, petCollection) => ({
                OwnerName: person.Name,
                Pets: petCollection.select(pet => pet.Name)
            })
        );
        const expected = [
            'Hedlund, Magnus: Daisy',
            'Adams, Terry: Barley,Boots',
            'Weiss, Charlotte: Whiskers'
        ];

        const results = query.select(obj => `${obj.OwnerName}: ${obj.Pets}`);

        expect(results).toEqual(expected);
    });
});
