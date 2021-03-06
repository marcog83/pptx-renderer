import * as R from 'ramda';
import { colorTransform } from './color-transform';
import { ALLOWED_YOGA_PROPS } from './allowed-props';
import { expand } from './expand';

export const parseYogaStyles = R.compose(
  R.pick(ALLOWED_YOGA_PROPS),
  expand,
  R.defaultTo({})
);

export const getStyles = R.compose(
  colorTransform,

  R.omit(ALLOWED_YOGA_PROPS),
  expand
);

export const getProps = R.compose(
  colorTransform,
  R.mergeRight({ margin: [ 0, 0, 0, 0 ] }),
  R.omit([ ...ALLOWED_YOGA_PROPS, 'children', 'data', 'style', 'className', 'box' ])
);

export * from './classname/classname';

export { textDefault } from './text-default';
