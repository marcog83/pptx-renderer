import * as R from 'ramda';
import Yoga from '@react-pdf/yoga';

/**
 * Set flex wrap attribute to node's Yoga instance
 *
 * @param {string} value flex wrap value
 * @param {Object} node instance
 * @returns {Object} node instance
 */
const setFlexWrap = (value) => (node) => {
  const yogaNode = node._yogaNode;

  if (yogaNode) {
    const yogaValue = R.cond([
      [ R.equals('wrap'), R.always(Yoga.WRAP_WRAP) ],
      [ R.equals('wrap-reverse'), R.always(Yoga.WRAP_WRAP_REVERSE) ],
      [ R.T, R.always(Yoga.WRAP_NO_WRAP) ]
    ])(value);

    yogaNode.setFlexWrap(yogaValue);
  }

  return node;
};

export default setFlexWrap;
