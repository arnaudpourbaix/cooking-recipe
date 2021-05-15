import {UrlUtils} from './url.utils';

describe('UrlUtils', () => {
  describe('getShortUrl', () => {
    it('should be', () => {
      const base = 'localhost:3000';
      expect(UrlUtils.getShortUrl(`http://${base}/`)).toBe(base);
      expect(UrlUtils.getShortUrl(`https://${base}`)).toBe(base);
    });
  });

  describe('formatUrl', () => {
    it('should be', () => {
      const baseUrl = 'localhost:3000';
      expect(UrlUtils.formatUrl(baseUrl)).toBe(`http://${baseUrl}`);
      const completeUrl = 'http://localhost:3000';
      expect(UrlUtils.formatUrl(completeUrl)).toBe(completeUrl);
      const completeSecuredUrl = 'https://localhost:3000';
      expect(UrlUtils.formatUrl(completeSecuredUrl)).toBe(completeSecuredUrl);
    });
  });

  describe('getParameterByName', () => {
    it('should be equals', () => {
      const name = 'toto';
      const url = `localhost:3000?name=${name}`;
      expect(UrlUtils.getParameterByName(url, 'name')).toBe(name);
      expect(UrlUtils.getParameterByName(url, 'Name')).toBeNull();
      expect(UrlUtils.getParameterByName(url, 'Name', true)).toBe(name);
    });
  });
});
