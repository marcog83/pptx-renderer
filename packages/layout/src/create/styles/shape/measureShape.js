import Yoga from '@react-pdf/yoga';
import * as R from 'ramda';
import { layoutText } from '../text/layoutText';

function _measureShape(page, node, width, widthMode) {
  const text = node.children.reduce((acc, child) => `${ acc } ${ child.text }`, '');
  const metrics = layoutText(text, node.style.fontSize, {
    fontFamily: node.style.fontFace,
    width: `${ width }px`,
    wordBreak: 'break-word'
  });

  if (widthMode === Yoga.MEASURE_MODE_EXACTLY) {
    return { height: metrics.height };
  }

  if (widthMode === Yoga.MEASURE_MODE_AT_MOST) {
    node.metrics = metrics;

    return {
      height: metrics.height,
      width: Math.min(width, metrics.width)
    };
  }

  return {};
}
const PARAMS = 6;

export const measureShape = R.curryN(PARAMS, _measureShape);
