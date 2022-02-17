// Layout from react structure to pptx structure
import * as N from '@pptx-renderer/primitives';
import { applyStyle } from './apply-style';
import * as StyleSheet from './stylesheet/index';

import Yoga from "@react-pdf/yoga";
import { getStyle } from './get-style';
import { getProps } from './get-props';

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
  node.layout = Yoga.Node.createDefault();

  parentNode.layout.insertChild(node.layout, parentNode.layout.getChildCount());
  // extract props for position
  // flatten the children to create text later on render
  const { style, ...otherProps } = node.props;
  const styleParsed = StyleSheet.transformStyles(style)??{};

  Object.entries(styleParsed).map(([attr, value]) => {
    applyStyle(attr, value, node);
  });
  const _style = getStyle(parentNode, node);

  const props = getProps(node);

  let values = flattenArr(node.children, otherProps);

  values = values
    .filter(isTextInstance)
    .map((child) => ({
      text: child.value,
      style: StyleSheet.transformStyles(child.props.style),
      options: getProps(child)
    }));



  return {
    ...node,
    children: values,
    style: _style,
    options: props
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

const layoutSection = (parentNode) => (node) => {

  return {
    ...node,
    children: node.children
      .map((child) => ({
        ...child,
        props: { ...child.props, sectionTitle: node.props.title }
      }))
      .map(layoutNode(node))
  }
};

const layoutShape = (parentNode) => (node) => {

  node.layout = Yoga.Node.createDefault();

  parentNode.layout.insertChild(node.layout, parentNode.layout.getChildCount());

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

const layoutSlide = (parentNode) => (node) => {
  node.layout = Yoga.Node.createDefault();

  return {
    ...node,
    children: node.children.map(layoutNode(node))
  }
}

const T = {
  [N.Text]: layoutText,
  [N.Notes]: layoutNotes,
  [N.Section]: layoutSection,
  [N.Shape]: layoutShape,
  [N.Slide]: layoutSlide
};

const layoutNode = (parentNode) => (node) => {
  const { type } = node;

  const identity = (parentNode) => (x) => ({
    ...x,
    children: x.children.map(layoutNode(parentNode))
  });
  const fn = T[type] || identity;

  return fn(parentNode)(node);
}

export function getLayout(doc) {
  const pages = doc.children || [];
  
  return {
    ...doc,
    children: pages.map(layoutNode(null))
  };
}
