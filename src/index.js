import log4js from 'log4js';

import { LEVEL_INFO } from './levels';

const defaultConfig = {
  logger: {
    name: process.env.LOGGER_NAME || '',
    level: process.env.LOGGER_LEVEL || LEVEL_INFO,
  }
};

export function init(_config) {
  const config = {
    ...defaultConfig,
    ..._config,
  };

  const logger = log4js.getLogger();
  logger.name = config.logger.name;
  logger.level = config.logger.level;

  return logger;
}

const logger = init(defaultConfig);

export default logger;
