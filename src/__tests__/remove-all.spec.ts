import { curray } from '../../src/index';

describe('removeAll', () => {
    beforeEach(() => {
        curray();
    });

    it('returns an array with the elements removed', () => {
        const dinosaurs: string[] = [
            'Compsognathus',
            'Amargasaurus',
            'Oviraptor',
            'Velociraptor',
            'Deinonychus',
            'Dilophosaurus',
            'Gallimimus',
            'Triceratops'
        ];

        const lessDinosaurs = [
            'Compsognathus',
            'Oviraptor',
            'Velociraptor',
            'Deinonychus',
            'Gallimimus',
            'Triceratops'
        ];

        const result = dinosaurs.removeAll((x) => x.endsWith('saurus'));

        expect(result).toEqual(lessDinosaurs);
    });
});
