import {frames, deduplicate} from '../states';

describe('deduplicate', () => {
    it('removes branch 1 missions when mission_b4m2a1 is in selectedMissionIds', () => {
        const selectedIds = ['mission_b4m2a1'];

        const expectedPresent = [
            'mission_b4m2a1',
            'mission_b4m2a2',
        ];

        const expectedAbsent = [
            'mission_b1m2a1',
            'mission_b1m2a2'
        ];

        expectedPresent.forEach(id => {expect(deduplicate(selectedIds)).toContain(id)});
        expectedAbsent.forEach(id => {expect(deduplicate(selectedIds)).not.toContain(id)});
    });

    it('removes branch 1 missions when mission_b4m2a2 is in selectedMissionIds', () => {
        const selectedIds = ['mission_b4m2a2'];

        const expectedPresent = [
            'mission_b4m2a1',
            'mission_b4m2a2',
        ];

        const expectedAbsent = [
            'mission_b1m2a1',
            'mission_b1m2a2'
        ];

        expectedPresent.forEach(id => {expect(deduplicate(selectedIds)).toContain(id)});
        expectedAbsent.forEach(id => {expect(deduplicate(selectedIds)).not.toContain(id)});
    });

    it('removes branch 4 missions when mission_b1m2a1 is in selectedMissionIds', () => {
        const selectedIds = ['mission_b1m2a1'];

        const expectedPresent = [
            'mission_b1m2a1',
            'mission_b1m2a2'

        ];

        const expectedAbsent = [
            'mission_b4m2a1',
            'mission_b4m2a2'
        ];

        expectedPresent.forEach(id => {expect(deduplicate(selectedIds)).toContain(id)});
        expectedAbsent.forEach(id => {expect(deduplicate(selectedIds)).not.toContain(id)});
    });

    it('removes branch 4 missions when mission_b1m2a2 is in selectedMissionIds', () => {
        const selectedIds = ['mission_b1m2a2'];

        const expectedPresent = [
            'mission_b1m2a1',
            'mission_b1m2a2'

        ];

        const expectedAbsent = [
            'mission_b4m2a1',
            'mission_b4m2a2'
        ];

        expectedPresent.forEach(id => {expect(deduplicate(selectedIds)).toContain(id)});
        expectedAbsent.forEach(id => {expect(deduplicate(selectedIds)).not.toContain(id)});
    });

    it('removes branch 4 missions when selectedMissionIds is empty', () => {
        const selectedIds = [];

        const expectedPresent = [
            'mission_b1m2a1',
            'mission_b1m2a2'

        ];

        const expectedAbsent = [
            'mission_b4m2a1',
            'mission_b4m2a2'
        ];

        expectedPresent.forEach(id => {expect(deduplicate(selectedIds)).toContain(id)});
        expectedAbsent.forEach(id => {expect(deduplicate(selectedIds)).not.toContain(id)});
    });
});