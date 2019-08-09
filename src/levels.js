// @flow

export const LEVEL_TRACE: string = 'trace';
export const LEVEL_DEBUG: string = 'debug';
export const LEVEL_INFO: string = 'info';
export const LEVEL_WARN: string = 'warn';
export const LEVEL_ERROR: string = 'error';
export const LEVEL_FATAL: string = 'fatal';

export const LEVELS: Array<string> = [
  LEVEL_TRACE,
  LEVEL_DEBUG,
  LEVEL_INFO,
  LEVEL_WARN,
  LEVEL_ERROR,
  LEVEL_FATAL,
];

export default Object.freeze({
  LEVEL_TRACE,
  LEVEL_DEBUG,
  LEVEL_INFO,
  LEVEL_WARN,
  LEVEL_ERROR,
  LEVEL_FATAL,
});
