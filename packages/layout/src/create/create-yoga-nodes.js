import { flattenChildren } from "./flatten-children";
import * as N from '@pptx-renderer/primitives';
import Yoga from "@react-pdf/yoga";
import { getSize } from '../slide/get-size';
import { setYogaValues } from './setYogaValues';
import { expandStyles, getProps } from '@pptx-renderer/stylesheet';
const isTextInstance = ({ type }) => type === N.TextInstance;

const layoutText = (parentNode) => (node) => {
    node._yogaNode = Yoga.Node.createDefault();

    parentNode._yogaNode.insertChild(node._yogaNode, parentNode._yogaNode.getChildCount());

    const { style = {} } = node.props;
    node.style = expandStyles(style);
    setYogaValues(node)
    // extract props for position
    // flatten the children to create text later on render
    let values = flattenChildren(node.children, node.props);

    values = values
        .filter(isTextInstance)
        .map((child) => {
            const style = expandStyles(child.props.style);
            const options = getProps(child);
            console.log("textInstance", style, options)
            return ({
                text: child.value,
                options: { ...style, ...options }
            })
        });

    return {
        ...node,
        children: values
    };
};

const layoutNotes = (parentNode) => (node) => {
    const text = node.children
        .filter(isTextInstance)
        .map(({ value }) => value)
        .join(' ');

    return {
        ...node,
        text
    };
};

const layoutSection = (ctx) => (node) => {

    return {
        ...node,
        children: node.children
            .map((child) => ({
                ...child,
                props: { ...child.props, sectionTitle: node.props.title }
            }))
            .map(createYogaNodes(ctx))
    }
};

const layoutShape = (parentNode) => (node) => {

    node._yogaNode = Yoga.Node.createDefault();

    parentNode._yogaNode.insertChild(node._yogaNode, parentNode._yogaNode.getChildCount());

    const hasText = node.children.length > 0;

    const { type, ...shapeOptions } = node.props;

    if (hasText) {
        let values = flattenChildren(node.children, {});

        values = values
            .filter(isTextInstance)
            .map(({ value, props: { x, y, w, h, ...options } }) => ({
                text: value,
                options
            }));

        return {
            ...node,
            hasText,
            options: { shape: type, ...shapeOptions },
            children: values
        };
    }

    return node;
};

const layoutSlide = (ctx) => (node) => {
    node._yogaNode = Yoga.Node.createDefault();

    const { style = {} } = node.props;
    node.style = expandStyles(style);
    setYogaValues(node);

    const { height, width } = getSize(ctx);
    node._yogaNode.setWidth(width);
    node._yogaNode.setHeight(height);

    return {
        ...node,
        children: node.children.map(createYogaNodes(node))
    }

}

const T = {
    [N.Text]: layoutText,
    [N.Notes]: layoutNotes,
    [N.Section]: layoutSection,
    [N.Shape]: layoutShape,
    [N.Slide]: layoutSlide
};
export const createYogaNodes = (parentNode) => (node) => {
    const { type } = node;

    const identity = (parentNode) => (x) => ({
        ...x,
        children: x.children.map(createYogaNodes(parentNode))
    });
    const fn = T[type] || identity;

    return fn(parentNode)(node);
}