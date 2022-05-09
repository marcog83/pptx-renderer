import Yoga from '@react-pdf/yoga';

const getComputedPadding = (node, edge) => {
  const yogaNode = node._yogaNode;

  return yogaNode ? yogaNode.getComputedPadding(edge) : null;
};

const extractPaddingTop = (node) => {
  const { style, box } = node;

  return getComputedPadding(node, Yoga.EDGE_TOP) ||
  box?.paddingTop ||
  style?.paddingTop ||
  style?.paddingVertical ||
  style?.padding ||
  0;
};

const extractPaddingRight = (node) => {
  const { style, box } = node;

  return getComputedPadding(node, Yoga.EDGE_RIGHT) ||
  box?.paddingRight ||
  style?.paddingRight ||
  style?.paddingHorizontal ||
  style?.padding ||
  0;
};

const extractPaddingLeft = (node) => {
  const { style, box } = node;

  return getComputedPadding(node, Yoga.EDGE_LEFT) ||
  box?.paddingLeft ||
  style?.paddingLeft ||
  style?.paddingHorizontal ||
  style?.padding ||
  0;
};

const extractPaddingBottom = (node) => {
  const { style, box } = node;

  return getComputedPadding(node, Yoga.EDGE_BOTTOM) ||
  box?.paddingBottom ||
  style?.paddingBottom ||
  style?.paddingVertical ||
  style?.padding ||
  0;
};

/**
 * Get Yoga computed paddings. Zero otherwise
 *
 * @param {Object} node Yoga computed paddings
 * @returns {Object} paddings
 */
const getPadding = (node) => ({
  paddingTop: extractPaddingTop(node),
  paddingRight: extractPaddingRight(node),
  paddingBottom: extractPaddingBottom(node),
  paddingLeft: extractPaddingLeft(node)
});

export default getPadding;
