import * as N from '@pptx-renderer/primitives';
import Yoga from "@react-pdf/yoga";
import { getSize } from '../calculate/get-size';
import { setYogaValues } from './setYogaValues';
import { expandYogaStyles } from '@pptx-renderer/stylesheet';
import * as R from 'ramda' 

const createYogaNode = (node) => {
    node._yogaNode = Yoga.Node.createDefault();

    node.parent._yogaNode?.insertChild(node._yogaNode, node.parent._yogaNode?.getChildCount());

    node.style = {
        ...node.style,
        ...expandYogaStyles(node.props.style)
    };
    setYogaValues(node)
    return node;
}

const layoutText = (parentNode) => (node) => {
    return createYogaNode(node);


};



const layoutSection = (ctx) => (node) => {
    return R.evolve({
        children: R.map(createYogaNodes(ctx))
    },node)

};

const layoutShape = (parentNode) => (node) => {
    return createYogaNode(node);

};

const layoutSlide = (ctx) => (node) => {
    createYogaNode(node);

    const { height, width } = getSize(ctx);
    node._yogaNode.setWidth(width);
    node._yogaNode.setHeight(height);

    return R.evolve({
        children: R.map(createYogaNodes(node))
    },node)

}

const layoutGroup = () => (node) => {
    createYogaNode(node);

    return R.evolve({
        children: R.map(createYogaNodes(node))
    },node)

}

const T = {
    [N.Text]: layoutText,
    [N.Section]: layoutSection,
    [N.Shape]: layoutShape,
    [N.Slide]: layoutSlide,
    [N.Group]: layoutGroup
};
export const createYogaNodes = (parentNode) => (node) => {
    const { type } = node;
    node.parent = parentNode;
    
    const identity = (parentNode) => R.evolve({
        children: R.map(createYogaNodes(parentNode))
    });
    const fn = T[type] || identity;

    return fn(parentNode)(node);
}