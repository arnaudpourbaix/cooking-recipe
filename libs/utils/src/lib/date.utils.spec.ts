import {DateUtils} from './date.utils';

describe('DateUtils', () => {
  describe('isValidDate', () => {
    it('should be valid', () => {
      expect(DateUtils.isValidDate(new Date())).toBeTruthy();
      expect(DateUtils.isValidDate(new Date('2020-04-15'))).toBeTruthy();
    });
    it('should be invalid', () => {
      expect(DateUtils.isValidDate(true)).toBeFalsy();
      expect(DateUtils.isValidDate('hello')).toBeFalsy();
      expect(DateUtils.isValidDate(new Date('hello'))).toBeFalsy();
      expect(DateUtils.isValidDate(123)).toBeFalsy();
      expect(DateUtils.isValidDate({})).toBeFalsy();
    });
  });
});
