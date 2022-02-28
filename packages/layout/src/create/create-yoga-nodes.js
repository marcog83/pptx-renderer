import * as N from '@pptx-renderer/primitives';
import Yoga from "@react-pdf/yoga";
import { getSize } from '../calculate/get-size';
import { setYogaValues } from './setYogaValues';
import * as R from 'ramda'
import { measureText } from './measureText';

const createYogaNode = (node) => {
    node._yogaNode = Yoga.Node.createDefault();
    if (!N.isSlide(node)) {
        node.parent._yogaNode?.insertChild(node._yogaNode, node.parent._yogaNode?.getChildCount());
    }
    setYogaValues(node.yogaStyle)(node);
    return node;
}

const layoutText = (parentNode) => createYogaNode;

const layoutImage = (parentNode) => createYogaNode;

const layoutShape = (parentNode) => createYogaNode;

const layoutSection = (ctx) => (node) => {

    return R.evolve({
        children: R.map(createYogaNodes(ctx))
    }, node)

};



const layoutSlide = (ctx) => (node) => {
    createYogaNode(node);

    const { height, width } = getSize(ctx);

    node._yogaNode.setWidth(width);
    node._yogaNode.setHeight(height);
    return R.evolve({
        children: R.map(createYogaNodes(node))
    }, node)

}

const layoutGroup = () => (node) => {
    createYogaNode(node);

    return R.evolve({
        children: R.map(createYogaNodes(node))
    }, node)

}

const setMeasureFunc = (parentNode) => (node) => {

    const yogaNode = node._yogaNode;
    if (N.isText(node)) {
        
       // yogaNode.setMeasureFunc(measureText(parentNode, node,(...rest)=>console.log(...rest)));
       
       yogaNode.setMeasureFunc((width, widthMode, height, heightMode)=>{
        console.log(node,width, widthMode, height, heightMode);
            return {
                width:node.children[0]?.text.length*6,
                height:10
            }
        });
      }
    return node;
}


const T = {
    [N.Text]: layoutText,
    [N.Image]: layoutImage,
    [N.Section]: layoutSection,
    [N.Shape]: layoutShape,
    [N.Slide]: layoutSlide,
    [N.Group]: layoutGroup
};
export const createYogaNodes = (parentNode) => (node) => {
    const { type } = node;
    if (!N.isSlide(node) && !N.isSection(node) && !N.isNotes(node)) {
        node.parent = parentNode;
    }


    const identity = (parent) => R.evolve({
        children: R.map(createYogaNodes(parent))
    });
    const fn = T[type] || identity;

    return R.compose(
        // setMeasureFunc(parentNode),//not ready yet
        fn(parentNode)
    )(node);
}

