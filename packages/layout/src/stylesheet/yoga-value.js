import {
    ALIGN_AUTO,
    ALIGN_BASELINE,
    ALIGN_CENTER,
    ALIGN_FLEX_END,
    ALIGN_FLEX_START,
    ALIGN_SPACE_AROUND,
    ALIGN_SPACE_BETWEEN,
    ALIGN_STRETCH,
    DISPLAY_FLEX,
    DISPLAY_NONE,
    FLEX_DIRECTION_COLUMN_REVERSE,
    FLEX_DIRECTION_COLUMN,
    FLEX_DIRECTION_ROW_REVERSE,
    FLEX_DIRECTION_ROW,
    JUSTIFY_CENTER,
    JUSTIFY_FLEX_END,
    JUSTIFY_FLEX_START,
    JUSTIFY_SPACE_AROUND,
    JUSTIFY_SPACE_BETWEEN,
    WRAP_NO_WRAP,
    WRAP_WRAP_REVERSE,
    WRAP_WRAP
} from "@react-pdf/yoga";

const isAlignType = prop => {
    return (
        prop === 'alignItems' || prop === 'alignContent' || prop === 'alignSelf'
    );
};

const yogaValue = (prop, value) => {
    switch (value) {
        case 'auto': {
            if (prop === 'alignSelf') {
                return ALIGN_AUTO;
            }
            break;
        }
        case 'flex':
            return DISPLAY_FLEX;
        case 'none':
            return DISPLAY_NONE;
        case 'row':
            return FLEX_DIRECTION_ROW;
        case 'row-reverse':
            return FLEX_DIRECTION_ROW_REVERSE;
        case 'column':
            return FLEX_DIRECTION_COLUMN;
        case 'column-reverse':
            return FLEX_DIRECTION_COLUMN_REVERSE;
        case 'stretch':
            return ALIGN_STRETCH;
        case 'baseline':
            return ALIGN_BASELINE;
        case 'space-around': {
            if (prop === 'justifyContent') {
                return JUSTIFY_SPACE_AROUND;
            } else if (isAlignType(prop)) {
                return ALIGN_SPACE_AROUND;
            }
            break;
        }
        case 'space-between': {
            if (prop === 'justifyContent') {
                return JUSTIFY_SPACE_BETWEEN;
            } else if (isAlignType(prop)) {
                return ALIGN_SPACE_BETWEEN;
            }
            break;
        }
        case 'around':
            return JUSTIFY_SPACE_AROUND;
        case 'between':
            return JUSTIFY_SPACE_BETWEEN;
        case 'wrap':
            return WRAP_WRAP;
        case 'wrap-reverse':
            return WRAP_WRAP_REVERSE;
        case 'nowrap':
            return WRAP_NO_WRAP;
        case 'flex-start': {
            if (prop === 'justifyContent') {
                return JUSTIFY_FLEX_START;
            } else if (isAlignType(prop)) {
                return ALIGN_FLEX_START;
            }
            break;
        }
        case 'flex-end': {
            if (prop === 'justifyContent') {
                return JUSTIFY_FLEX_END;
            } else if (isAlignType(prop)) {
                return ALIGN_FLEX_END;
            }
            break;
        }
        case 'center': {
            if (prop === 'justifyContent') {
                return JUSTIFY_CENTER;
            } else if (isAlignType(prop)) {
                return ALIGN_CENTER;
            }
            break;
        }
        default:
            return value;
    }
};

export { yogaValue };