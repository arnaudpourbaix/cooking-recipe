import { ObjectLiteral } from './types';

/**
 * Offers deep cloning of objects, arrays, dates, numbers, strings.
 * Still a basic cloning function, does not handle prototypes or advance types like Map and Set
 * @param value Value to be cloned.
 */
export function deepClone(value: ObjectLiteral): ObjectLiteral {
  // TODO: implements a more powerful variant: https://github.com/pvorb/clone/blob/master/clone.js
  if (value === null) {
    return value;
  }
  if (value instanceof Date) {
    return (new Date(value.getTime()) as unknown) as ObjectLiteral;
  }
  if (value instanceof Array) {
    const cp: unknown[] = [];
    value.forEach((v) => cp.push(v));
    return (cp.map((n) =>
      deepClone(n as ObjectLiteral)
    ) as unknown) as ObjectLiteral;
  }
  if (typeof value === 'object' && value !== {}) {
    const cp = { ...value };
    Object.keys(cp).forEach((k) => {
      cp[k] = deepClone(cp[k]);
    });
    return (cp as unknown) as ObjectLiteral;
  }
  return value;
}
Object.freeze(deepClone);
