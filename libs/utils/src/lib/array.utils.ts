import { StringUtils } from './string.utils';
import { ObjectLiteral } from './types';

/**
 * Utilitaires sur les tableaux
 */
export namespace ArrayUtils {
  /**
   * Helper pour la méthode Array.sort
   * Elle permet de simplifier les tris sur des tableaux d'objets
   * ~~~ts
   * let persons = [{id: 0, name: 'Durand'}, {id: 1, name: 'Toulemonde'}, {id: 2, name: 'Goemine'}];
   * persons.sort(ArrayUtils.sortBy(person => person.name)); // with function param
   * persons.sort(ArrayUtils.sortBy('name')); // with string param
   * ~~~
   *
   * @param key clé de tri
   */
  export function sortBy<T extends ObjectLiteral>(
    key: string | ((obj: T) => any)
  ) {
    const getValue = (val: T) =>
      typeof key === 'string' ? val[key] : key(val);
    return (a: T, b: T) =>
      getValue(a) > getValue(b) ? 1 : getValue(b) > getValue(a) ? -1 : 0;
  }

  /**
   * Renvoie true si l'un des éléments du tableau contient la chaine à tester (searchString).
   *
   * Notes:
   * - pas sensible à la casse et les accents sont ignorés
   *
   * - renvoie true si searchString vaut null ou undefined
   *
   * - renvoie false si array est vide
   *
   * - textString est traitée comme chaine vide si null ou undefined
   *
   * ~~~ts
   * ArrayUtils.containsString(['Etat'], 'etat'); // => true
   * ArrayUtils.containsString(['été', null], 'ete'); // => true
   * ArrayUtils.containsString([], ''); // => false
   * ~~~
   */
  export function containsString(
    array: (string | undefined | null)[],
    searchString: string | undefined | null
  ): boolean {
    if (searchString == null) {
      return true;
    }
    return array.some((i) => StringUtils.contains(i, searchString));
  }
}
Object.freeze(ArrayUtils);
