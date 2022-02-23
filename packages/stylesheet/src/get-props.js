import { normalize } from "./utils/colors";

import * as R from 'ramda';
function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]"
}

const COLOR_PROPS = ['color', 'fill', 'line'];
const Colors = {
  "fill": (fill) => {
    if (isString(fill)) {
      return { color: normalize(fill) }
    } else {
      return { color: normalize(fill.color), transparency: fill.transparency }
    }

  },
  "line": (line) => {
    return { ...line, color: normalize(line.color) }

  }
}

export const colorTransform = (props = {}) => {
  return Object.entries(props)
    .reduce((props, [propName, value]) => {
      if (COLOR_PROPS.includes(propName)) {        
        props[propName] = (Colors[propName] ?? normalize)(value);
      } else {
        props[propName] = value;
      }

      return props;
    }, {});
}



const trimProps = ({ children, data, style, box, ...props }) =>
 Object.entries(props)
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})



export const getProps = R.compose(
  colorTransform,
  trimProps
)