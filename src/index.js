// @flow

import pino from 'pino';

import { levels } from './levels';

type LevelType = $Keys<typeof levels>;
type LoggerType = {
  [LevelType]: (arg0: string) => void | (arg0: { }, arg1: string) => void, 
}

type ConfigType = {
  name: string,
  level: LevelType,
}

function getLogLevelFromEnv(): LevelType {
  const fromEnv: any = process.env.LOGGER_LEVEL;

  return fromEnv || 'info';
}

const defaultConfig: ConfigType = {
  name: process.env.LOGGER_NAME || '',
  // eslint-disable-next-line import/no-named-as-default-member
  level: getLogLevelFromEnv(),
};

export function init({ name, level }: { +name?: string, +level?: LevelType }): LoggerType {
  const logger: LoggerType = pino({
    name: name || defaultConfig.name,
    level: level || defaultConfig.level,
    timestamp: false,
    mixin: () => ({ timestamp: Date.now() }),
    nestedKey: 'details',
  });

  return logger;
}

const logger: LoggerType = init(defaultConfig);

export default logger;
