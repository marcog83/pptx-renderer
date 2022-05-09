import {
  getProps,
  getStyles,
  parseClassNames,
  parseYogaClassNames,
  parseYogaStyles,
  textDefault
} from '@pptx-renderer/stylesheet';
import { resolveTextIntances } from './style-text-instance';

export const styleShape = () => (node) => {
  const options = getProps(node.props);
  const style = textDefault({
    ...parseClassNames(node.props.className),
    ...getStyles(node.props.style)
  });

  const yogaStyle = parseYogaStyles({
    ...parseYogaClassNames(node.props.className),
    ...node.props.style
  });

  const hasText = node.children.length > 0;

  const { type } = node.props;

  if (hasText) {
    return {
      ...node,
      hasText,
      style,
      yogaStyle,
      options: { shape: type, ...options },
      children: resolveTextIntances(node)
    };
  }

  return {
    ...node,
    style,
    options,
    yogaStyle
  };
};
