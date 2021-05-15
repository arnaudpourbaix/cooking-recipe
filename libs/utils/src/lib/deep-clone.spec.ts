import {deepClone} from './deep-clone';

describe('DeepClone', () => {
  it('clone null', () => {
    const obj = null;
    const clone = deepClone(obj);
    expect(obj).toBe(clone);
  });
  it('clone string', () => {
    const obj = 'test';
    const clone = deepClone(obj);
    expect(obj).toBe(clone);
  });
  it('clone date', () => {
    const obj = new Date();
    const clone = deepClone(obj);
    expect(obj).not.toBe(clone);
    expect(obj).toStrictEqual(clone);
  });
  it('clone simple object', () => {
    const obj = {id: 1, name: 'Dupont'};
    const clone = deepClone(obj);
    expect(obj).not.toBe(clone);
    expect(obj).toStrictEqual(clone);
  });
  it('clone complex object', () => {
    const obj = {id: 1, name: 'Dupont', age: new Date(1981, 10, 1), children: ['Pierre', 'Paul', 'Jacques']};
    const clone = deepClone(obj);
    expect(obj).not.toBe(clone);
    expect(obj.children).not.toBe(clone.children);
    expect(obj).toStrictEqual(clone);
  });
});
