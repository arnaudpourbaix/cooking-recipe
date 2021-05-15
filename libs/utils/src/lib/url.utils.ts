/**
 * Utilitaires sur les urls.
 */
export namespace UrlUtils {
  /**
   * Renvoie une url plus courte (supprime http(s) et le slash final).
   * ~~~ts
   * UrlUtils.getShortUrl('http://localhost:3000/'); // => localhost:3000
   * ~~~
   */
  export function getShortUrl(url: string): string {
    return url.replace(/^https?:\/\//, '').replace(/\/?$/, '');
  }

  /**
   * Formatte une url en ajoutant http:// si nécessaire.
   * ~~~ts
   * UrlUtils.formatUrl('localhost:3000'); // => http://localhost:3000
   * ~~~
   */
  export function formatUrl(url: string): string {
    if (!/^https?:\/\/.*/.test(url)) {
      url = 'http://' + url;
    }
    return url;
  }

  /**
   * Renvoie la valeur d'un paramètre.
   * @param insensitive Indicateur de sensibilité à la casse du nom (sensible par défaut)
   * ~~~ts
   * UrlUtils.getParameterByName('localhost:3000?name=toto', 'name'); // => toto
   * UrlUtils.getParameterByName('localhost:3000?name=toto', 'Name'); // => null
   * UrlUtils.getParameterByName('localhost:3000?name=toto', 'Name', true); // => toto
   * ~~~
   */
  export function getParameterByName(url: string, name: string, insensitive = false): string | null {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', insensitive ? 'i' : ''),
      results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}
Object.freeze(UrlUtils);
