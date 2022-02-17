import { normalize } from "./utils/colors";

  

const COLOR_PROPS = ['color', 'fill', 'line'];

function getPropName(prop) {
    const props = {
      fontFace: 'font_face',
      fontSize: 'font_size',
      height: 'h',
      width: 'w',
      lineDash: 'line_dash',
      lineHead: 'line_head',
      lineTail: 'line_tail'
    };

    return props[prop] || prop;
  }
export function  getProps(node) {
    return Object.keys(node.props)
      .filter(
        prop => prop !== 'children' && prop !== 'data' && prop !== 'style'
      )
      .reduce((props, key) => {
        const propName = getPropName(key);
        let value = node.props[key];

        if (COLOR_PROPS.includes(propName)) {
          props[propName] = normalize(value);
        } else {
          props[propName] = value;
        }

        return props;
      }, {});
  }