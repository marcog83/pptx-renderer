// import Yoga from "@react-pdf/yoga";
// import upperFirst from "./utils/upperFirst";



// export function applyStyle(attribute, value, node) {
//     const setter = `set${upperFirst(attribute)}`;
//     switch (attribute) {
//         case 'position': {
//             const positionType =
//                 value === 'absolute'
//                     ? Yoga.POSITION_TYPE_ABSOLUTE
//                     : Yoga.POSITION_TYPE_RELATIVE;

//             node._yogaNode.setPositionType(positionType);
//             break;
//         }
//         case 'top': {
//             setPosition(Yoga.EDGE_TOP, value, node);
//             break;
//         }
//         case 'right': {
//             setPosition(Yoga.EDGE_RIGHT, value, node);
//             break;
//         }
//         case 'bottom': {
//             setPosition(Yoga.EDGE_BOTTOM, value, node);
//             break;
//         }
//         case 'left': {
//             setPosition(Yoga.EDGE_LEFT, value, node);
//             break;
//         }
//         default: {
//             if (typeof node._yogaNode[setter] === 'function') {
//                 node._yogaNode[setter](value);
//             }
//         }
//     }
// }

// function setPosition(edge, value, node) {
//     const isPercent = /^(\d+)?%$/g.exec(value);

//     if (isPercent) {
//         node._yogaNode.setPositionPercent(edge, parseInt(isPercent[1], 10));
//     } else {
//         node._yogaNode.setPosition(edge, value);
//     }
// }