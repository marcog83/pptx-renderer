// Layout from react structure to pptx structure
import * as R from 'ramda';
import * as N from '@pptx-renderer/primitives';

import Yoga from "@react-pdf/yoga";
import { getStyle } from './get-style';
import { getProps } from './get-props';
import { getSize } from './slide/get-size';
import { setYogaValues } from './setYogaValues';
import expandStyles from './stylesheet';

const Style = {
  flexShrink: 1,
  display: Yoga.DISPLAY_FLEX,
  flexGrow: 0,
  overflow: Yoga.OVERFLOW_VISIBLE,
  flexWrap: Yoga.WRAP_NO_WRAP,
  justifyContent: Yoga.JUSTIFY_FLEX_START,
  flexDirection: Yoga.FLEX_DIRECTION_ROW
}

const isTextInstance = ({ type }) => type === N.TextInstance;

// const YOGA_NODE = "_yogaNode";
// const YOGA_CONFIG = Yoga.Config.create();

// YOGA_CONFIG.setPointScaleFactor(0);

const flattenArr = (arr, props) => {
  const result = [];

  arr.forEach((item) => {
    const { children, ...node } = item;

    result.push({
      props,
      ...node
    });

    if (children) {
      result.push(...flattenArr(children, node.props));
    }
  });

  return result;
};

const layoutText = (parentNode) => (node) => {
  node._yogaNode = Yoga.Node.createDefault();

  parentNode._yogaNode.insertChild(node._yogaNode, parentNode._yogaNode.getChildCount());

  const { style = {} } = node.props;
  node.style = expandStyles(style);
  setYogaValues(node)
  // extract props for position
  // flatten the children to create text later on render
  let values = flattenArr(node.children, node.props);

  values = values
    .filter(isTextInstance)
    .map((child) => ({
      text: child.value,
      style: expandStyles(child.props.style),
      options: getProps(child)
    }));

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
    let values = flattenArr(node.children, {});

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




const createYogaNodes = (parentNode) => (node) => {
  const { type } = node;

  const identity = (parentNode) => (x) => ({
    ...x,
    children: x.children.map(createYogaNodes(parentNode))
  });
  const fn = T[type] || identity;

  return fn(parentNode)(node);
}



export function getLayout(ctx, doc) {
  const pages = doc.children ?? [];
  const a = {
    ...doc,
    children: pages.map(createYogaNodes(ctx))
  };

  a.children.forEach(node => {
    node._yogaNode?.calculateLayout();
  })

  const b = {
    ...a,
    children: a.children.map(calculateLayout(ctx))
  }
  return b;
}





const calculateText = (parentNode) => node => {
  const style = getStyle(parentNode, node);

  const options = getProps(node);
  console.log("calculateText", style, options)
  return {
    ...node,
    options,
    style
  };
}
const calculateNotes = (parentNode) => node => {
  return node;
}
const calculateSection = (parentNode) => node => {
  return {
    ...node,
    children: node.children.map(calculateLayout(node))
  }
}
const calculateShape = (parentNode) => node => {
  return node;
}
const calculateSlide = (parentNode) => node => {
  console.log("calculateSlide", node.style)
  return {
    ...node,
    children: node.children.map(calculateLayout(node))
  }
}

const L = {
  [N.Text]: calculateText,
  [N.Notes]: calculateNotes,
  [N.Section]: calculateSection,
  [N.Shape]: calculateShape,
  [N.Slide]: calculateSlide
};

const calculateLayout = (parentNode) => (node) => {
  const { type } = node;

  const identity = (parentNode) => (x) => {

    return ({
      ...x,
      children: x.children?.map(calculateLayout(parentNode))
    })
  };

  console.log({ type })
  const fn = L[type] || identity;

  return fn(parentNode)(node);
}

 