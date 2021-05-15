import {MapUtils} from './map.utils';

describe('MapUtils', () => {
  const json = {id: 15, name: 'dupont', age: 34};
  const map = new Map<string, string | number>([['id', json['id']], ['name', json['name']], ['age', json['age']]]);

  describe('jsonToMap', () => {
    it('should be equals', () => {
      const result = MapUtils.jsonToMap(json);
      expect(JSON.stringify([...result])).toBe(JSON.stringify([...map]));
    });
  });

  describe('arraysToMap', () => {
    it('should be equals', () => {
      const keys = ['id', 'name', 'age'];
      const values = [json['id'], json['name'], json['age']];
      const result = MapUtils.arraysToMap(keys, values);
      expect(JSON.stringify([...result])).toBe(JSON.stringify([...map]));
    });
    it('should throw an exception', () => {
      const keys = ['id', 'name', 'age', 'parent'];
      const values = [json['id'], json['name'], json['age']];
      expect(function() {
        MapUtils.arraysToMap(keys, values);
      }).toThrowError(Error);
    });
  });
});
