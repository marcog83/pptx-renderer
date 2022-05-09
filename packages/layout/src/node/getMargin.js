import Yoga from '@react-pdf/yoga';

const getComputedMargin = (node, edge) => {
  const yogaNode = node._yogaNode;

  return yogaNode ? yogaNode.getComputedMargin(edge) : null;
};

const extractMarginTop = (node) => {
  const { style, box } = node;

  return getComputedMargin(node, Yoga.EDGE_TOP) ||
  box?.marginTop ||
  style?.marginTop ||
  style?.marginVertical ||
  style?.margin ||
  0;
};
const extractMarginRight = (node) => {
  const { style, box } = node;

  return getComputedMargin(node, Yoga.EDGE_RIGHT) ||
  box?.marginRight ||
  style?.marginRight ||
  style?.marginHorizontal ||
  style?.margin ||
  0;
};

const extractMarginLeft = (node) => {
  const { style, box } = node;

  return getComputedMargin(node, Yoga.EDGE_LEFT) ||
  box?.marginLeft ||
  style?.marginLeft ||
  style?.marginHorizontal ||
  style?.margin ||
  0;
};

const extractMarginBottom = (node) => {
  const { style, box } = node;

  return getComputedMargin(node, Yoga.EDGE_BOTTOM) ||
  box?.marginBottom ||
  style?.marginBottom ||
  style?.marginVertical ||
  style?.margin ||
  0;
};

/**
 * Get Yoga computed magins. Zero otherwise
 *
 * @param {Object} node node
 * @returns {Object} margins
 */
const getMargin = (node) => ({
  marginTop: extractMarginTop(node),
  marginRight: extractMarginRight(node),
  marginBottom: extractMarginBottom(node),
  marginLeft: extractMarginLeft(node)
});

export default getMargin;
