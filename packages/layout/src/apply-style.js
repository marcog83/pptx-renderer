import Yoga from "@react-pdf/yoga";

const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1);


export function applyStyle(attribute, value, node) {
    const setter = `set${upperFirst(attribute)}`;
    switch (attribute) {
        case 'position': {
            const positionType =
                value === 'absolute'
                    ? Yoga.POSITION_TYPE_ABSOLUTE
                    : Yoga.POSITION_TYPE_RELATIVE;

            node.layout.setPositionType(positionType);
            break;
        }
        case 'top': {
            setPosition(Yoga.EDGE_TOP, value, node);
            break;
        }
        case 'right': {
            setPosition(Yoga.EDGE_RIGHT, value, node);
            break;
        }
        case 'bottom': {
            setPosition(Yoga.EDGE_BOTTOM, value, node);
            break;
        }
        case 'left': {
            setPosition(Yoga.EDGE_LEFT, value, node);
            break;
        }
        default: {
            if (typeof node.layout[setter] === 'function') {
                node.layout[setter](value);
            }
        }
    }
}

function setPosition(edge, value, node) {
    const isPercent = /^(\d+)?%$/g.exec(value);

    if (isPercent) {
        node.layout.setPositionPercent(edge, parseInt(isPercent[1], 10));
    } else {
        node.layout.setPosition(edge, value);
    }
}