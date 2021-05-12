// @flow

import pino from 'pino';
import { inspect } from 'util';

import levels from './levels';

export function formatError(input: any): { stacktrace: string } {
  return {
    stacktrace: inspect(input, {
      showHidden: false,
      colors: false,
      depth: 3,
      breakLength: Infinity,
    }),
  };
}

const defaultConfig: Object = {
  logger: {
    name: process.env.LOGGER_NAME || '',
    // eslint-disable-next-line import/no-named-as-default-member
    level: process.env.LOGGER_LEVEL || levels.LEVEL_INFO,
  },
};

export function init(_config: {
  name: string,
  level: $Values<typeof levels>,
}): Object {
  const config: Object = {
    ...defaultConfig,
    ..._config,
  };

  const logger: Object = pino({
    name: config.logger.name,
    level: config.logger.level,
    timestamp: false,
    mixin: () => ({ timestamp: Date.now() }),
    nestedKey: 'details',
  });
  return logger;
}

const logger: Function = init(defaultConfig);

export default logger;
