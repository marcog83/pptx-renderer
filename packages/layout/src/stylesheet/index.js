 
import { normalize } from '../utils/colors';
import { yogaValue } from './yoga-value';

const hasOwnProperty = Object.prototype.hasOwnProperty;

const styleShortHands = {
  margin: {
    marginTop: true,
    marginRight: true,
    marginBottom: true,
    marginLeft: true
  },
  marginHorizontal: {
    marginLeft: true,
    marginRight: true
  },
  marginVertical: {
    marginTop: true,
    marginBottom: true
  },
  padding: {
    paddingTop: true,
    paddingRight: true,
    paddingBottom: true,
    paddingLeft: true
  },
  paddingHorizontal: {
    paddingLeft: true,
    paddingRight: true
  },
  paddingVertical: {
    paddingTop: true,
    paddingBottom: true
  },
  borderColor: {
    borderTopColor: true,
    borderRightColor: true,
    borderBottomColor: true,
    borderLeftColor: true
  },
  borderRadius: {
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderBottomRightRadius: true,
    borderBottomLeftRadius: true
  },
  borderStyle: {
    borderTopStyle: true,
    borderRightStyle: true,
    borderBottomStyle: true,
    borderLeftStyle: true
  },
  borderWidth: {
    borderTopWidth: true,
    borderRightWidth: true,
    borderBottomWidth: true,
    borderLeftWidth: true
  }
};

/**
 * Expand the shorthand properties to isolate every declaration from others.
 */
export const transformStyles = style => {
  if (!style) return style;

  const propsArray = Object.keys(style);
  const resolvedStyle = {};

  propsArray.forEach(key => {
    const value = style[key];

    switch (key) {
      case 'display':
      case 'flex':
      case 'flexDirection':
      case 'flexWrap':
      case 'flexFlow':
      case 'flexGrow':
      case 'flexShrink':
      case 'flexBasis':
      case 'justifyContent':
      case 'alignSelf':
      case 'alignItems':
      case 'alignContent':
      case 'order': {
        resolvedStyle[key] = yogaValue(key, value);
        break;
      }
      case 'textAlignVertical': {
        resolvedStyle.verticalAlign = value === 'center' ? 'middle' : value;
        break;
      }
      case 'margin':
      case 'marginHorizontal':
      case 'marginVertical':
      case 'padding':
      case 'paddingHorizontal':
      case 'paddingVertical':
      case 'borderColor':
      case 'borderRadius':
      case 'borderStyle':
      case 'borderWidth': {
        const expandedProps = styleShortHands[key];

        for (const propName in expandedProps) {
          if (hasOwnProperty.call(expandedProps, propName)) {
            resolvedStyle[propName] = value;
          }
        }

        break;
      }
      case 'height':
      case 'width':
      case 'top':
      case 'left': {
        if (typeof value === 'string' && value.endsWith('%')) {
          resolvedStyle[key] = value;
        } else {
          resolvedStyle[key] = value;
        }

        break;
      }
      case 'color':
      case 'backgroundColor':
      case 'fill': {
        resolvedStyle[key] = normalize(value);
        break;
      }
      default: {
        resolvedStyle[key] = value;
        break;
      }
    }
  });

  return resolvedStyle;
};

export default transformStyles;