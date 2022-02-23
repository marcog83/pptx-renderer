import { normalize } from "./utils/colors";

import * as R from 'ramda';
function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]"
}


const Colors = {
  color: normalize,
  fill: (fill) => {
    if (isString(fill)) {
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
