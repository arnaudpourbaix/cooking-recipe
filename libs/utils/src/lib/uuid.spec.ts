import {UUID} from './uuid';

describe('UUID', () => {
  describe('generateV4', () => {
    it('check format', () => {
      const uuid = UUID.generateV4();
      expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
      expect(uuid.length).toBe(36);
    });

    it('with string options binary', () => {
      const uuid = UUID.generateV4('binary') as string[];
      expect(uuid.length).toBe(16);
      expect(uuid.every(n => typeof n === 'number')).toBeTruthy();
    });

    it('with unknown string options', () => {
      const uuid = UUID.generateV4('binari') as string;
      expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
      expect(uuid.length).toBe(36);
    });

    it('with offset', () => {
      const uuid = UUID.generateV4(undefined, ['555'], 1) as string[];
      expect(uuid.length).toBe(17);
    });

    xit('should be unique', () => {
      const set = new Set();
      const max = 10000; // small pool but higher obviously takes more time!
      for (let i = 0; i < max; i++) {
        set.add(UUID.generateV4());
      }
      expect(set.size).toBe(max);
    });
  });
});
