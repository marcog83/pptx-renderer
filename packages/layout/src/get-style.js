import { normalize } from './utils/colors';
import { px2emu, inch2Emu, px2inch } from './utils/measures';
import Yoga from "@react-pdf/yoga";

function getComputedPadding(node) {
    return {
        top: node.layout.getComputedPadding(Yoga.EDGE_TOP),
        right: node.layout.getComputedPadding(Yoga.EDGE_RIGHT),
        bottom: node.layout.getComputedPadding(Yoga.EDGE_BOTTOM),
        left: node.layout.getComputedPadding(Yoga.EDGE_LEFT)
    };
}
function getAbsoluteLayout(parentNode,node) {
    const layout = node.layout.getComputedLayout();
//FIXME: parent does not exist
    const parentLayout =   parentNode   ? getAbsoluteLayout(null,parentNode)
            : { left: 0, top: 0 };

    return {
        left: layout.left + parentLayout.left,
        top: layout.top + parentLayout.top,
        height: layout.height,
        width: layout.width
    };
}

export function getStyle(parentNode,node) {
    const { left, top, width, height } = getAbsoluteLayout(parentNode,node); // px
    const padding = getComputedPadding(node); // px
console.log(width,padding)
    const style = {
        x: px2inch(left + padding.left),
        y: px2inch(top + padding.top + 30),
        w: px2inch(width - padding.left - padding.right),
        h: px2inch(60) // (height - padding.top - padding.bottom)
    };

    console.log(node.type, style);
    return style; // inch
}