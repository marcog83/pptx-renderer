import processFlex from './flex';
import * as R from 'ramda';
import {
  processMargin,
  processMarginVertical,
  processMarginHorizontal,
  processMarginSingle,
} from './margins';
import processBorders from './borders';
import {
  processPadding,
  processPaddingVertical,
  processPaddingHorizontal,
  processPaddingSingle,
} from './paddings';
import * as T from "./get-props";




const shorthands = {
  flex: processFlex,
  margin: processMargin,
  marginHorizontal: processMarginHorizontal,
  marginVertical: processMarginVertical,
  marginTop: processMarginSingle,
  marginRight: processMarginSingle,
  marginBottom: processMarginSingle,
  marginLeft: processMarginSingle,
  padding: processPadding,
  paddingHorizontal: processPaddingHorizontal,
  paddingVertical: processPaddingVertical,
  paddingTop: processPaddingSingle,
  paddingRight: processPaddingSingle,
  paddingBottom: processPaddingSingle,
  paddingLeft: processPaddingSingle,
  border: processBorders,
  borderTop: processBorders,
  borderRight: processBorders,
  borderBottom: processBorders,
  borderLeft: processBorders,
  borderColor: processBorders,
  borderRadius: processBorders,
  borderStyle: processBorders,
  borderWidth: processBorders
};

/**
 * Transforms style key-value
 *
 * @param {String} key style key
 * @param {String} value style value
 * @returns {String | Number} transformed style values
 */
const expandStyle = (key, value) => {
  return shorthands[key] ? shorthands[key](key, value) : { [key]: value };
};

/**
 * Expand the shorthand properties.
 *
 * @param { Object } style object
 * @returns { Object } expanded style object
 */
const expand = (style={}) => {
  
  const propsArray = Object.keys(style);
  const resolvedStyle = {};

  for (let i = 0; i < propsArray.length; i += 1) {
    const key = propsArray[i];
    const value = style[key];
    const extended = expandStyle(key, value);
    const keys = Object.keys(extended);

    for (let j = 0; j < keys.length; j += 1) {
      const propName = keys[j];
      const propValue = extended[propName];

      resolvedStyle[propName] = propValue;
    }
  }

  return resolvedStyle;
};

export const expandYogaStyles = expand;


const POSITION_RULES = ["top", "bottom", "left", "right", "display", "position", "flexDirection", "flexWrap", "flexFlow", "justifyContent", "alignItems", "alignContent", "gap", "rowGap", "columnGap", "order", "flexGrow", "flexShrink", "flexBasis", "flex", "alignSelf", "border", "margin", "padding", "width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight"];
export const trimStyles = (style = {}) => {
  return Object.entries(style)
    .filter(([key]) => !POSITION_RULES.find(attribute => attribute.includes(key)))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
}

export const getStyles = R.compose(
  T.colorTransform,
  expand,
  trimStyles
)

export const getProps = T.getProps