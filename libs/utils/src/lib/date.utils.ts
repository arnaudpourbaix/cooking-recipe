/**
 * Utilitaires sur les dates
 */
export namespace DateUtils {
  /**
   * Renvoie true si la valeur est une date valide
   */
  export function isValidDate(value: any) {
    return value && Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value);
  }
}
Object.freeze(DateUtils);
