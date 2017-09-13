"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var FUNC_WARNING = "Value is a function. Possibly avoidable re-render?";
var AVOIDABLE_WARNING = "Value did not change. Avoidable re-render!";

var defaultNotifier = exports.defaultNotifier = function defaultNotifier(groupByComponent, collapseComponentGroups, displayName, diffs) {
  if (groupByComponent && collapseComponentGroups) {
    console.groupCollapsed(displayName);
  } else if (groupByComponent) {
    console.group(displayName);
  }

  diffs.forEach(notifyDiff);

  if (groupByComponent) {
    console.groupEnd();
  }
};

var notifyDiff = function notifyDiff(_ref) {
  var name = _ref.name,
      prev = _ref.prev,
      next = _ref.next,
      type = _ref.type;

  console.group(name);

  if (type === "avoidable") {
    console.warn("%c%s", "font-weight: bold", AVOIDABLE_WARNING);
  } else {
    console.warn(FUNC_WARNING);
  }

  console.log("%cbefore", "font-weight: bold", prev);
  console.log("%cafter ", "font-weight: bold", next);
  console.groupEnd();
};