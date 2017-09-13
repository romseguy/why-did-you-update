"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getDisplayName = exports.getDisplayName = function getDisplayName(o) {
  return o.displayName || o.constructor.displayName || o.constructor.name;
};