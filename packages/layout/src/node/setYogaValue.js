/* eslint-disable no-unused-expressions */

import * as R from 'ramda';
import Yoga from '@react-pdf/yoga';
import upperFirst from '../utils/upperFirst';
import matchPercent from '../utils/matchPercent';

const isNotNil = R.complement(R.isNil);

/**
 * Set generic yoga attribute to node's Yoga instance, handing `auto`, edges and percentage cases
 *
 * @param {string} attr - property
 * @param {number} edge  - edge
 * @param {any} value  - value
 * @param {Object} node instance
 * @returns {Object} node instance
 */
const setYogaValue = (attr, edge) => (value) => (node) => {
  const yogaNode = node._yogaNode;

  if (!R.isNil(value) && yogaNode) {
    const hasEdge = isNotNil(edge);
    const fixedMethod = `set${ upperFirst(attr) }`;
    const autoMethod = `${ fixedMethod }Auto`;
    const percentMethod = `${ fixedMethod }Percent`;
    const percent = matchPercent(value);

    if (percent && !yogaNode[percentMethod]) {
      throw new Error(`You can't pass percentage values to ${ attr } property`);
    }

    if (percent) {
      if (hasEdge) {
        yogaNode[percentMethod]?.(edge, percent.value);
      } else {
        yogaNode[percentMethod]?.(percent.value);
      }
    } else if (value === 'auto') {
      if (hasEdge) {
        yogaNode[autoMethod]?.(edge);
      } else if (attr === 'flexBasis') {
        // YogaNode.setFlexBasisAuto is missing (#766)
        yogaNode.setFlexBasis(Yoga.UNIT_AUTO);
      } else {
        yogaNode[autoMethod]?.();
      }
    } else if (hasEdge) {
      yogaNode[fixedMethod]?.(edge, value);
    } else {
      yogaNode[fixedMethod]?.(value);
    }
  }

  return node;
};

export default setYogaValue;
