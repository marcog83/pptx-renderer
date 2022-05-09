import * as R from 'ramda';

/**
 * Set aspect ratio attribute to node's Yoga instance
 *
 * @param {number} ratio
 * @param {Object} node instance
 * @returns {Object} node instance
 */
const setAspectRatio = (value) => (node) => {
  const yogaNode = node._yogaNode;

  if (!R.isNil(value) && yogaNode) {
    yogaNode.setAspectRatio(value);
  }

  return node;
};

export default setAspectRatio;
