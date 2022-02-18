
import { getStyle } from '../get-style';

import * as N from '@pptx-renderer/primitives';
import { getProps } from '@pptx-renderer/stylesheet';


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
  const identity = (parentNode) => (x) => {
  
    return ({
      ...x,
      children: x.children?.map(calculateLayout(parentNode))
    })
  };
  export const calculateLayout = (parentNode) => (node) => {
    const { type } = node;
  
  
  
    console.log({ type })
    const fn = L[type] || identity;
  
    return fn(parentNode)(node);
  }