import * as R from 'ramda';
import Yoga from '@react-pdf/yoga';
import { layoutText } from './layoutText';

const _measureText = (page, node, width, widthMode) => {
  const text = node.children.reduce((acc, child) => `${ acc } ${ child.text }`, '');
  const metrics = layoutText(text, node.style.fontSize, {
    fontFamily: node.style.fontFace,
    ...node.style.bold && { fontWeight: 700 },
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
};

const PARAMS = 6;

export const measureText = R.curryN(PARAMS, _measureText);
