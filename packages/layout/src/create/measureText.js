import * as R from 'ramda';

import Yoga from '@react-pdf/yoga';

const ALIGNMENT_FACTORS = { center: 0.5, right: 1 };

const linesHeight = node => {
    if (!node.lines) return -1;
    return node.lines.reduce((acc, line) => acc + line.box.height, 0);
  };

  const linesWidth = node => {
    if (!node.lines) return -1;
    return node.lines[0].box.width
    // return Math.max(
    //   ...node.lines.map(line => AttributedString.advanceWidth(line)),
    // );
  };

  const layoutText = (node, width, height, fontStore) => {
    
    return [{ box: { height,width } }]
  };
 
const _measureText = (page, node, fontStore, width, widthMode, height, heightMode) => {
    fontStore("_measureText",width, widthMode, height)
    if (widthMode === Yoga.MEASURE_MODE_EXACTLY) {
        if (!node.lines) node.lines =layoutText(node, width, height, fontStore);

        return { height: linesHeight(node) };
    }

    if (widthMode === Yoga.MEASURE_MODE_AT_MOST) {
        const alignFactor = ALIGNMENT_FACTORS[node.style?.textAlign] || 0;

        if (!node.lines) {
            node.lines =  layoutText(node, width, height, fontStore);
            node.alignOffset = (width - linesWidth(node)) * alignFactor; // Compensate align in variable width containers
        }

        return {
            height: linesHeight(node),
            width: Math.min(width, linesWidth(node)),
        };
    }

    return {};
}
export const measureText = R.curryN(7, _measureText)