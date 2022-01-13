//Layout from react structure to pptx structure
import * as N from "@pptx-renderer/primitives";
// import Yoga from "yoga-layout";

const isTextInstance = ({ type }) => type === N.TextInstance;

// const YOGA_NODE = "_yogaNode";
// const YOGA_CONFIG = Yoga.Config.create();

YOGA_CONFIG.setPointScaleFactor(0);

const flattenArr = (arr, props) => {
  const result = [];
  arr.forEach((item) => {
    const { children, ...node } = item;

    result.push({
      props,
      ...node
    });
    if (children) result.push(...flattenArr(children, node.props));
  });
  return result;
};

const layoutText = (node) => {
  // extract props for position
  // flatten the children to create text later on render
  const { x, y, w, h, margin, fill, ...otherProps } = node.props;
  let values = flattenArr(node.children, otherProps);
  values = values
    .filter(isTextInstance)
    .map(({ value, props: { x, y, w, h, ...options } }) => ({
      text: value,
      options
    }));

  return {
    ...node,
    children: values,
    options: { x, y, w, h, margin, fill }
  };
};

const layoutNotes = (node) => {
  const text = node.children
    .filter(isTextInstance)
    .map(({ value }) => value)
    .join(" ");

  return {
    ...node,
    text
  };
};

const layoutSection = (node) => ({
  ...node,
  children: node.children
    .map((child) => ({
      ...child,
      props: { ...child.props, sectionTitle: node.props.title }
    }))
    .map(layoutNode)
});

const layoutShape = (node) => {
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

const T = {
  [N.Text]: layoutText,
  [N.Notes]: layoutNotes,
  [N.Section]: layoutSection,
  [N.Shape]: layoutShape
};
function layoutNode(node) {
  const { type } = node;
  // const yogaNode = Yoga.Node.createWithConfig(YOGA_CONFIG);
  // node[YOGA_NODE] = yogaNode;
  const identity = (x) => ({
    ...x,
    children: x.children.map(layoutNode)
  });
  const fn = T[type] || identity;

  return fn(node);
}

export function getLayout(doc) {
  const pages = doc.children || [];
  return {
    ...doc,
    children: pages.map(layoutNode)
  };
}
