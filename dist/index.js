"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports["default"] = void 0;

var _pino = _interopRequireDefault(require("pino"));

var _levels = require("./levels");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getLogLevelFromEnv() {
  var fromEnv = process.env.LOGGER_LEVEL;
  return fromEnv || 'info';
}

var defaultConfig = {
  name: process.env.LOGGER_NAME || '',
  // eslint-disable-next-line import/no-named-as-default-member
  level: getLogLevelFromEnv()
};

function init(_ref) {
  var name = _ref.name,
      level = _ref.level;
  var logger = (0, _pino["default"])({
    name: name || defaultConfig.name,
    level: level || defaultConfig.level,
    timestamp: false,
    mixin: function mixin() {
      return {
        timestamp: Date.now()
      };
    },
    nestedKey: 'details'
  });
  return logger;
}

var logger = init(defaultConfig);
var _default = logger;
exports["default"] = _default;
//# sourceMappingURL=index.js.map