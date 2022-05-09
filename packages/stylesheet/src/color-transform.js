import * as R from 'ramda';
import { normalize } from './utils/colors';

const Colors = {
  color: normalize,
  fill(fill) {
    if (R.is(String, fill)) {
      return { color: normalize(fill) };
    }

    return { color: normalize(fill.color), transparency: fill.transparency };
  },
  line(line) {
    return { ...line, color: normalize(line.color) };
  }
};

export const colorTransform = R.evolve(Colors);
