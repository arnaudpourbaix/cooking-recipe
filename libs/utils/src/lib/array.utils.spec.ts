import {ArrayUtils} from './array.utils';

describe('ArrayUtils', () => {
  describe('sortBy', () => {
    const el1 = {id: 21, name: 'Eric'};
    const el2 = {id: 99, name: 'Alexis'};
    const el3 = {id: 43, name: 'Bernard'};
    const el4 = {id: 55, name: 'Alexis'};
    const liste = [el1, el2, el3, el4];
    it('should be sorted by name', () => {
      expect([...liste].sort(ArrayUtils.sortBy('name'))).toEqual([el2, el4, el3, el1]);
      expect([...liste].sort(ArrayUtils.sortBy(el => el.name))).toEqual([el2, el4, el3, el1]);
    });
    it('should be sorted by id', () => {
      expect([...liste].sort(ArrayUtils.sortBy('id'))).toEqual([el1, el3, el4, el2]);
      expect([...liste].sort(ArrayUtils.sortBy(el => el.id))).toEqual([el1, el3, el4, el2]);
    });
  });

  describe('containsString', () => {
    it('should be equals', () => {
      const arr = ['il a été pris', null, undefined, 'il est dans un tel état'];
      expect(ArrayUtils.containsString(arr, 'etat')).toBeTruthy();
      expect(ArrayUtils.containsString(arr, 'EST')).toBeTruthy();
      expect(ArrayUtils.containsString(arr, 'èTè')).toBeTruthy();
      expect(ArrayUtils.containsString(arr, undefined)).toBeTruthy();
      expect(ArrayUtils.containsString(arr, null)).toBeTruthy();
      expect(ArrayUtils.containsString([null], '')).toBeTruthy();
    });

    it('should be not equals', () => {
      const arr = ['il a été pris', null, undefined, 'il est dans un tel état'];
      expect(ArrayUtils.containsString([], 'ETAIT')).toBeFalsy();
      expect(ArrayUtils.containsString([], '')).toBeFalsy();
    });
  });
});
