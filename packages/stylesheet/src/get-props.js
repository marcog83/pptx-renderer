import { normalize } from "./utils/colors";

import * as R from 'ramda';


const COLOR_PROPS = ['color', 'fill', 'line'];
const Colors = {
  "fill": (color) => ({ color: normalize(color) })
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

const EXCLUDED_PROPS = new Set(["children", "data", "style", "box"]);

const trimProps = (props) => Object.entries(props)
  .filter(([prop]) => !EXCLUDED_PROPS.has(prop))
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})



export const getProps = R.compose(
  colorTransform,
  trimProps
)