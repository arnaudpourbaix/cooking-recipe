/**
 * Utilitaires sur les maps.
 */
export namespace MapUtils {
  /**
   * Convertit un json en map.
   * ~~~ts
   * MapUtils.jsonToMap({ 'id': 15, 'name': 'dupont', 'age': 34 });
   * // => new Map([['id', 15], ['name', 'dupont'], ['age', 34]])
   * ~~~
   */
  export function jsonToMap(json: {[key: string]: any}) {
    const result = new Map<string, any>();
    for (const key of Object.keys(json)) {
      result.set(key, json[key]);
    }
    return result;
  }

  /**
   * Convertit deux tableaux en map. Le 1er contient les clés et le 2nd les valeurs.
   * ~~~ts
   * MapUtils.arraysToMap(['id', 'name', 'age'], [15, 'dupont', 34]);
   * // => new Map([['id', 15], ['name', 'dupont'], ['age', 34]])
   * ~~~
   */
  export function arraysToMap<T>(keys: string[], values: Array<T>): Map<string, T> {
    if (keys.length !== values.length) {
      throw new Error('arraysToMap: invalid parameters, arrays must have the same length');
    }
    const result: Map<string, any> = new Map<string, any>();
    keys.forEach((key: string, index: number) => {
      result.set(key, values[index]);
    });
    return result;
  }
}
Object.freeze(MapUtils);
