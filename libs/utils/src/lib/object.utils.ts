import { ObjectLiteral } from './types';

/**
 * Utilitaires sur les objets.
 */
export namespace ObjectUtils {
  function hasOwnProperty(
    obj: Object | undefined | null,
    prop: string | number
  ): boolean {
    return obj != null && Object.prototype.hasOwnProperty.call(obj, prop);
  }

  /**
   * Indique si une propriété existe dans un chemin.
   * Le test porte sur la présence des propriétés (clés) et non sur les valeurs.
   * ~~~ts
   * ObjectUtils.existsInPath({ 'name': 'Bob' }, 'name'); // => true
   * ObjectUtils.existsInPath({ favoriteBook: { resume: { text: 'Magic' } } }, 'favoriteBook.resume.text'); // => true
   * ObjectUtils.existsInPath({ favoriteBook: { resume: { text: 'Magic' } } }, 'favoriteBook.resume.texto'); // => false
   * ObjectUtils.existsInPath({ favoriteBook: { resume: { text: 'Magic' } } }, 'favoriteBook.resumee.text'); // => false
   * ObjectUtils.existsInPath({ children: [{ name: 'Bob' }, { name: 'Jack' }] }, 'children.1.name'); // => true
   * ObjectUtils.existsInPath({ children: [{ name: 'Bob' }, { name: 'Jack' }] }, 'children.2.name'); // => false
   * ~~~
   */
  export function existsInPath(
    obj: ObjectLiteral | undefined | null,
    path: string
  ): boolean {
    const arr = path.split('.');
    let o = obj,
      exists = true,
      i = 0;
    while (exists && i < arr.length) {
      const key = arr[i];
      exists = hasOwnProperty(o, key);
      if (exists && o != null) {
        o = o[key];
      }
      i++;
    }
    return exists;
  }

  /**
   * Récupère une propriété de l'objet par rapport à un chemin
   * ~~~ts
   * ObjectUtils.getFromPath({ 'name': 'Bob' }, 'name'); // => Bob
   * ObjectUtils.getFromPath({ favoriteBook: { resume: { text: 'Magic' } } }, 'favoriteBook.resume.text'); // => Magic
   * ObjectUtils.getFromPath({ children: [{ name: 'Bob' }, { name: 'Jack' }] }, 'children.1.name'); // => Jack
   * ~~~
   */
  export function getFromPath(
    obj: ObjectLiteral | undefined | null,
    path: string
  ): any {
    const arr = path.split('.');
    let o = obj,
      exists = true,
      i = 0;
    while (exists && i < arr.length) {
      const key = arr[i];
      exists = hasOwnProperty(o, key);
      if (exists && o != null) {
        o = o[key];
      }
      i++;
    }
    return exists ? o : undefined;
  }

  export function pick<T extends ObjectLiteral, K extends keyof T>(
    base: T,
    keys: K[]
  ): Pick<T, K> {
    return keys.reduce((acc, key) => {
      if (key in base) acc[key] = base[key];
      return acc;
    }, {} as Pick<T, K>);
  }

  /**
   * Strip null or undefined values of object
   */
  export function stripBlankProperties(obj: ObjectLiteral): ObjectLiteral {
    const result = {} as ObjectLiteral;
    Object.keys(obj).forEach((key) => {
      if (obj[key] != null) {
        result[key] = obj[key];
      }
    });
    return result;
  }
}
Object.freeze(ObjectUtils);
