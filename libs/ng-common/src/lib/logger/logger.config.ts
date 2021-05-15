export enum LoggerLevelEnum {
  none = 0,
  error = 1,
  warn = 2,
  info = 3,
  verbose = 4,
  all = 10
}

export interface LoggerConfig {
  level: LoggerLevelEnum;
}

export interface LoggerParams {
  action: string;
  message?: string;
  object?: any;
}
