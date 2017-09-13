'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepDiff = undefined;

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isObject2 = require('lodash/isObject');

var _isObject3 = _interopRequireDefault(_isObject2);

var _keys3 = require('lodash/keys');

var _keys4 = _interopRequireDefault(_keys3);

var _union2 = require('lodash/union');

var _union3 = _interopRequireDefault(_union2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReferenceEntity = function isReferenceEntity(o) {
  return Array.isArray(o) || (0, _isObject3.default)(o);
};

var deepDiff = exports.deepDiff = function deepDiff(prev, next, name, notes) {
  var isRefEntity = isReferenceEntity(prev) && isReferenceEntity(next);

  if (!(0, _isEqual3.default)(prev, next)) {
    var isFunc = (0, _isFunction3.default)(prev) && (0, _isFunction3.default)(next);

    if (isFunc) {
      if (prev.name === next.name) {
        var type = 'function';
        return notes.concat({ name: name, prev: prev, next: next, type: type });
      }
    } else if (isRefEntity) {
      var keys = (0, _union3.default)((0, _keys4.default)(prev), (0, _keys4.default)(next));
      return keys.reduce(function (acc, key) {
        return deepDiff(prev[key], next[key], name + '.' + key, acc);
      }, notes);
    }
  } else if (prev !== next) {
    var _type = 'avoidable';

    if (isRefEntity) {
      var _keys2 = (0, _union3.default)((0, _keys4.default)(prev), (0, _keys4.default)(next));
      return _keys2.reduce(function (acc, key) {
        return deepDiff(prev[key], next[key], name + '.' + key, acc);
      }, notes.concat({ name: name, prev: prev, next: next, type: _type }));
    } else {
      return notes.concat({ name: name, prev: prev, next: next, type: _type });
    }
  }

  return notes;
};