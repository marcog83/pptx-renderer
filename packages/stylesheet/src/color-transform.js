import { normalize } from "./utils/colors";

import * as R from 'ramda';

const Colors = {
  color: normalize,
  fill: (fill) => {
    if (R.is(String, fill)) {
      return { color: normalize(fill) }
    } else {
      return { color: normalize(fill.color), transparency: fill.transparency }
    }

  },
  line: (line) => {
    return { ...line, color: normalize(line.color) }

  }
}

export const colorTransform = R.evolve(Colors)
