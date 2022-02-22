
import { getStyle } from '../get-style';

import * as N from '@pptx-renderer/primitives';
import { getProps } from '@pptx-renderer/stylesheet';


const calculateText = (parentNode) => node => {
  const style = getStyle(parentNode, node);

  const options = getProps(node.props);
  console.log("calculateText",node.style,options)
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
  const style = getStyle(parentNode, node);
  let { type, ...options } = getProps(node.props);
 
  if (node.hasText) {
    options = { shape: type, ...options };
  }
  return {
    ...node,
    options,
    style
  };
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
const identity = (parentNode) => (x) => {

  return ({
    ...x,
    children: x.children?.map(calculateLayout(parentNode))
  })
};
export const calculateLayout = (parentNode) => (node) => {
  const { type } = node;

  const fn = L[type] || identity;

  return fn(parentNode)(node);
}