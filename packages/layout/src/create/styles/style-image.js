import {
  getProps,
  getStyles,
  parseClassNames,
  parseYogaClassNames,
  parseYogaStyles
} from '@pptx-renderer/stylesheet';
import * as R from 'ramda';
import { getImageSize } from './image/get-image-size';

export const styleImage = () => (node) => {
  const style = {
    ...parseClassNames(node.props.className),
    ...getStyles(node.props.style)
  };
  const options = {
    ...R.omit([ 'src' ], getProps(node.props)),
    ...node.image
  };

  let yogaStyle = parseYogaStyles({
    ...parseYogaClassNames(node.props.className),
    ...node.props.style
  });

  yogaStyle = {
    ...yogaStyle,
    ...getImageSize(node.image, yogaStyle)
  };

  return {
    ...node,
    style,
    options,
    yogaStyle
  };
};
