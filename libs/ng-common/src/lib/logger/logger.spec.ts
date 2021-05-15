import { Logger } from './logger';
import { LoggerLevelEnum, LoggerParams } from './logger.config';

describe('Logger', () => {
  describe('setConfig', () => {
    it('should be default config', () => {
      const logger = new Logger('service');
      expect((logger as any).config).toStrictEqual({ level: LoggerLevelEnum.warn });
    });
    it('level should be verbose', () => {
      const logger = new Logger('service');
      logger.setConfig({ level: LoggerLevelEnum.verbose });
      expect((logger as any).config).toStrictEqual({ level: LoggerLevelEnum.verbose });
    });
  });
  describe('verbose', () => {
    it('should call write', () => {
      const logger = new Logger('service');
      const params: LoggerParams = { action: '' };
      logger.write = jest.fn(() => {});
      logger.verbose(params);
      expect(logger.write).toHaveBeenCalledWith(console.debug, LoggerLevelEnum.verbose, params);
    });
  });
  describe('trace', () => {
    it('should call write', () => {
      const logger = new Logger('service');
      const params: LoggerParams = { action: '' };
      logger.write = jest.fn(() => {});
      logger.trace(params);
      expect(logger.write).toHaveBeenCalledWith(console.trace, LoggerLevelEnum.verbose, params);
    });
  });
  describe('info', () => {
    it('should call write', () => {
      const logger = new Logger('service');
      const params: LoggerParams = { action: '' };
      logger.write = jest.fn(() => {});
      logger.info(params);
      expect(logger.write).toHaveBeenCalledWith(console.info, LoggerLevelEnum.info, params);
    });
  });
  describe('warn', () => {
    it('should call write', () => {
      const logger = new Logger('service');
      const params: LoggerParams = { action: '' };
      logger.write = jest.fn(() => {});
      logger.warn(params);
      expect(logger.write).toHaveBeenCalledWith(console.warn, LoggerLevelEnum.warn, params);
    });
  });
  describe('error', () => {
    it('should call write', () => {
      const logger = new Logger('service');
      const params: LoggerParams = { action: '' };
      logger.write = jest.fn(() => {});
      logger.error(params);
      expect(logger.write).toHaveBeenCalledWith(console.error, LoggerLevelEnum.error, params);
    });
  });
  describe('write', () => {
    it('should call consoleFn', () => {
      const consoleFn = jest.fn(() => {});
      const logger = new Logger('service');
      const params: LoggerParams = { action: '' };
      logger.write(consoleFn, LoggerLevelEnum.error, params);
      expect(consoleFn).toHaveBeenCalled();
    });
    it('should not call consoleFn', () => {
      const consoleFn = jest.fn(() => {});
      const logger = new Logger('service', { level: LoggerLevelEnum.none });
      const params: LoggerParams = { action: '' };
      logger.write(consoleFn, LoggerLevelEnum.error, params);
      expect(consoleFn).not.toHaveBeenCalled();
    });
    it('should use color with info', () => {
      const consoleFn = jest.fn(() => {});
      const logger = new Logger('service', { level: LoggerLevelEnum.all });
      const params: LoggerParams = { action: '' };
      logger.write(consoleFn, LoggerLevelEnum.info, params);
      expect(consoleFn).toHaveBeenCalled();
    });
    it('should use color with verbose', () => {
      const consoleFn = jest.fn(() => {});
      const logger = new Logger('service', { level: LoggerLevelEnum.all });
      const params: LoggerParams = { action: '' };
      logger.write(consoleFn, LoggerLevelEnum.verbose, params);
      expect(consoleFn).toHaveBeenCalled();
    });
  });
});
