import {StringUtils} from './string.utils';

describe('StringUtils', () => {
  describe('stripAccents', () => {
    it('should be equals', () => {
      expect(StringUtils.stripAccents('àâãéèêëîïôöùûü')).toBe('aaaeeeeiioouuu');
      expect(StringUtils.stripAccents('ÀÂÃÉÈÊËÎÏÔÖÙÛÜ')).toBe('AAAEEEEIIOOUUU');
    });
  });

  describe('contains', () => {
    it('should be equals', () => {
      const text = 'Consulter état Synthèse';
      expect(StringUtils.contains(text, 'etat')).toBeTruthy();
      expect(StringUtils.contains('etat', text)).toBeFalsy(); // typical parameters inversion
      expect(StringUtils.contains(text, 'SYNTHESE')).toBeTruthy();
      expect(StringUtils.contains(text, 'synthésè')).toBeTruthy();
      expect(StringUtils.contains(text, undefined)).toBeTruthy();
      expect(StringUtils.contains(text, null)).toBeTruthy();
      expect(StringUtils.contains(undefined, undefined)).toBeTruthy();
    });

    it('should be not equals', () => {
      expect(StringUtils.contains(undefined, 'SYNTHESE')).toBeFalsy();
    });
  });
});
