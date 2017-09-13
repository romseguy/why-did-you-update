import _isString from 'lodash/isString';

import { defaultNotifier } from './defaultNotifier';

export const DEFAULT_INCLUDE = /./;
export const DEFAULT_EXCLUDE = /[^a-zA-Z0-9]/;

const toRegExp = s => _isString(s) ? new RegExp(`^${s}$`) : s;
const toArray = o => o ? [].concat(o) : [];

export const normalizeOptions = (opts = {}) => {
  let {
    collapseComponentGroups = true,
    exclude = [DEFAULT_EXCLUDE],
    groupByComponent = true,
    include = [DEFAULT_INCLUDE],
    includeFunctions = true,
    mergeDiffs = false,
    notifier = defaultNotifier
  } = opts;

  return {
    collapseComponentGroups,
    exclude: toArray(exclude).map(toRegExp),
    groupByComponent,
    include: toArray(include).map(toRegExp),
    includeFunctions,
    mergeDiffs,
    notifier
  };
};