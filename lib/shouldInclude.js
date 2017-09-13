'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldInclude = undefined;

var _some2 = require('lodash/some');

var _some3 = _interopRequireDefault(_some2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shouldInclude = exports.shouldInclude = function shouldInclude(displayName, _ref) {
  var include = _ref.include,
      exclude = _ref.exclude;

  var isIncluded = (0, _some3.default)(include, function (r) {
    return r.test(displayName);
  });
  var isExcluded = (0, _some3.default)(exclude, function (r) {
    return r.test(displayName);
  });

  return isIncluded && !isExcluded;
};