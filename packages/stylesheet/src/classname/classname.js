import * as R from 'ramda';
import { ALLOWED_YOGA_PROPS } from '../allowed-props';
import { colorTransform } from '../color-transform';
import { expand } from '../expand';

const CLASSES = {};

export const className = (key, style) => {
  CLASSES[key] = style;
};

export const registerClassNames = (obj) => {
  Object.entries(obj).forEach(([ key, style ]) => className(key, style));
};

const _parseClassNames = (classNames = '') => classNames.split(' ').reduce((acc, className) => ({
  ...acc,
  ...CLASSES[className] ?? {}
}), {});

export const parseClassNames = R.compose(
  colorTransform,

  R.omit(ALLOWED_YOGA_PROPS),
  expand,
  _parseClassNames
);

export const parseYogaClassNames = R.compose(
  R.pick(ALLOWED_YOGA_PROPS),
  expand,
  _parseClassNames
);
