"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports["default"] = void 0;

var _log4js = _interopRequireDefault(require("log4js"));

var _levels = _interopRequireDefault(require("./levels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultConfig = {
  logger: {
    name: process.env.LOGGER_NAME || '',
    // eslint-disable-next-line import/no-named-as-default-member
    level: process.env.LOGGER_LEVEL || _levels["default"].LEVEL_INFO
  }
};

function init(_config) {
  var config = _objectSpread({}, defaultConfig, {}, _config);

  var logger = _log4js["default"].getLogger();

  logger.name = config.logger.name;
  logger.level = config.logger.level;
  return logger;
}

var logger = init(defaultConfig);
var _default = logger;
exports["default"] = _default;
//# sourceMappingURL=index.js.map