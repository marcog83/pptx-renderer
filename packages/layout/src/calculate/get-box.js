import Yoga from '@react-pdf/yoga';
import { px2inch } from './measures';

function getComputedPadding(node) {
  return {
    top: node._yogaNode.getComputedPadding(Yoga.EDGE_TOP),
    right: node._yogaNode.getComputedPadding(Yoga.EDGE_RIGHT),
    bottom: node._yogaNode.getComputedPadding(Yoga.EDGE_BOTTOM),
    left: node._yogaNode.getComputedPadding(Yoga.EDGE_LEFT)
  };
}
function getAbsoluteLayout(parentNode, node) {
  const layout = node._yogaNode?.getComputedLayout() ?? { left: 0, top: 0, width: 0, height: 0 };
  const parentLayout = parentNode ? getAbsoluteLayout(parentNode.parent, parentNode)
    : { left: 0, top: 0 };

  return {
    left: layout.left + parentLayout.left,
    top: layout.top + parentLayout.top,
    height: layout.height,
    width: layout.width
  };
}

export function getBox(parentNode, node) {
  const { left, top, width, height } = getAbsoluteLayout(parentNode, node); // px
  const padding = getComputedPadding(node); // px

  const style = {
    x: px2inch(left + padding.left),
    y: px2inch(top + padding.top),
    w: px2inch(width - padding.left - padding.right),
    h: px2inch(height - padding.top - padding.bottom)
  };

  return style; // inch
}
