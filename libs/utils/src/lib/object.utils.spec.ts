import { ObjectUtils } from './object.utils';

interface TestModel {
  id: number;
  name: string;
  age?: number;
}

describe('ObjectUtils', () => {
  const json = {
    id: 15,
    name: 'john',
    age: 34,
    favoriteBook: { id: 40, label: 'Harry Potter', resume: { text: 'Magic' }, chapters: [{ title: 'preface' }, { title: 'histoire' }] },
    children: [
      { id: 50, name: 'bob' },
      { id: 50, name: 'jack' }
    ]
  };
  const list = {};
  list[0] = 'john';
  list[1] = 'bob';

  describe('existsInPath', () => {
    it('should be returns true', () => {
      expect(ObjectUtils.existsInPath(json, 'name')).toBeTruthy();
      expect(ObjectUtils.existsInPath(json, 'favoriteBook.label')).toBeTruthy();
      expect(ObjectUtils.existsInPath(json, 'favoriteBook.resume.text')).toBeTruthy();
      expect(ObjectUtils.existsInPath(json, 'favoriteBook.chapters.1.title')).toBeTruthy();
      expect(ObjectUtils.existsInPath(json, 'children.0.name')).toBeTruthy();
      expect(ObjectUtils.existsInPath(json, 'children.1.name')).toBeTruthy();
    });
    it('should be returns false', () => {
      expect(ObjectUtils.existsInPath(undefined, 'name')).toBeFalsy();
      expect(ObjectUtils.existsInPath(null, 'name')).toBeFalsy();
      expect(ObjectUtils.existsInPath(json, 'favoriteBooks.label')).toBeFalsy();
      expect(ObjectUtils.existsInPath(json, 'favoriteBook..resume.text')).toBeFalsy();
      expect(ObjectUtils.existsInPath(json, 'favoriteBook.resume.texto')).toBeFalsy();
      expect(ObjectUtils.existsInPath(json, 'favoriteBook.resumee.text')).toBeFalsy();
      expect(ObjectUtils.existsInPath(json, 'children.2.name')).toBeFalsy();
    });
  });

  describe('getFromPath', () => {
    it('should be equals', () => {
      expect(ObjectUtils.getFromPath(json, 'name')).toBe(json.name);
      expect(ObjectUtils.getFromPath(json, 'favoriteBook.label')).toBe(json.favoriteBook.label);
      expect(ObjectUtils.getFromPath(json, 'favoriteBook.resume.text')).toBe(json.favoriteBook.resume.text);
      expect(ObjectUtils.getFromPath(json, 'favoriteBook.chapters.1.title')).toBe(json.favoriteBook.chapters[1].title);
      expect(ObjectUtils.getFromPath(json, 'children.0.name')).toBe(json.children[0].name);
      expect(ObjectUtils.getFromPath(json, 'children.1.name')).toBe(json.children[1].name);
    });
    it('should be undefined', () => {
      expect(ObjectUtils.getFromPath(undefined, 'name')).toBeUndefined();
      expect(ObjectUtils.getFromPath(null, 'name')).toBeUndefined();
      expect(ObjectUtils.getFromPath(json, 'favoriteBooks.label')).toBeUndefined();
      expect(ObjectUtils.getFromPath(json, 'favoriteBook..resume.text')).toBeUndefined();
    });
  });

  describe('pick', () => {
    it('should be returns picked properties', () => {
      const obj: TestModel = { id: 1, name: 'bob', age: 45 };
      expect(ObjectUtils.pick(obj, ['id', 'name'])).toStrictEqual({
        id: 1,
        name: 'bob'
      });
    });
    it('should ignore missing properties', () => {
      const obj: TestModel = { id: 1, name: 'bob' };
      expect(ObjectUtils.pick(obj, ['id', 'name', 'age'])).toStrictEqual({
        id: 1,
        name: 'bob'
      });
    });
  });
});
