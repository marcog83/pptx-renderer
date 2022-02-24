import { ALLOWED_YOGA_PROPS } from "../allowed-props";
import { colorTransform } from "../color-transform";
import { expand } from "../expand";
import * as R from 'ramda';

const CLASSES = {};
export const className = (key, style) => {
    CLASSES[key] = style;
}

export const registerClassNames = (obj) => {
    Object.entries(obj).forEach(([key, style]) => className(key, style))
}

const _parseClassNames = (classNames = '') => {
    return classNames.split(" ").reduce((acc, className) => {
        return {
            ...acc,
            ...(CLASSES[className] ?? {})
        }
    }, {})
}



export const parseClassNames = R.compose(
    colorTransform,
    R.omit(ALLOWED_YOGA_PROPS),
    expand,
    _parseClassNames
)

export const parseYogaClassNames = R.compose(
    colorTransform,
    R.pick(ALLOWED_YOGA_PROPS),
    expand,
    _parseClassNames
)