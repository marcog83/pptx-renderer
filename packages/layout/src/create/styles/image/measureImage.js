import Yoga from '@react-pdf/yoga';
import * as R from 'ramda';
import { getImageSize } from './get-image-size';

function _measureImage(page, node, _width, widthMode) {
  console.log('_measureImage', node.image);
  const { width, height } = getImageSize(node.image, node.yogaStyle);

  if (widthMode === Yoga.MEASURE_MODE_EXACTLY) {
    return { height };
  }

  if (widthMode === Yoga.MEASURE_MODE_AT_MOST) {
    return {
      height,
      width
    };
  }
}

export const measureImage = R.curryN(6, _measureImage);

