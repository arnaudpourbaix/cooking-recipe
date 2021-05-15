import { LoggerConfig, LoggerLevelEnum, LoggerParams } from './logger.config';

export class Logger {
  private config: LoggerConfig = {
    level: LoggerLevelEnum.warn
  };

  static overrideLevel = LoggerLevelEnum.none;

  constructor(private context: string, config?: Partial<LoggerConfig>) {
    if (config) {
      this.setConfig(config);
    }
  }

  setConfig(config: Partial<LoggerConfig>) {
    this.config = { ...this.config, ...config };
  }

  verbose(params: LoggerParams) {
    this.write(console.debug, LoggerLevelEnum.verbose, params);
  }

  trace(params: LoggerParams) {
    this.write(console.trace, LoggerLevelEnum.verbose, params);
  }

  info(params: LoggerParams) {
    this.write(console.info, LoggerLevelEnum.info, params);
  }

  warn(params: LoggerParams) {
    this.write(console.warn, LoggerLevelEnum.warn, params);
  }

  error(params: LoggerParams) {
    this.write(console.error, LoggerLevelEnum.error, params);
  }

  write(consoleFn: Function, level: LoggerLevelEnum, params: LoggerParams) {
    const lev = Logger.overrideLevel !== LoggerLevelEnum.none ? Logger.overrideLevel : this.config.level;
    if (level > lev) {
      return;
    }
    let printLevel = '';
    let levelColor = '';
    if (level === LoggerLevelEnum.info) {
      printLevel = 'info';
      levelColor = '#2ab574';
    } else if (level === LoggerLevelEnum.verbose) {
      printLevel = 'verbose';
      levelColor = '#6975db';
    }
    consoleFn(
      `%c${printLevel.padEnd(8, ' ')} [${this.context}.${params.action}]`,
      `color: ${levelColor}`,
      'message' in params ? params.message : '',
      'object' in params ? params.object : '',
      'object' in params ? `[type=${typeof params.object}]` : ''
    );
  }
}
