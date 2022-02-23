import { getBox } from './get-box';

import * as N from '@pptx-renderer/primitives';
import * as R from 'ramda';


const calculateText = node => {
  const box = getBox(node.parent, node);
  return {
    ...node,
    box
  };
}
const calculateNotes = node => {
  return node;
}

const calculateShape = node => {
  const box = getBox(node.parent, node);
  return {
    ...node,
    box
  };
}


const L = {
  [N.Text]: calculateText,
  [N.Notes]: calculateNotes,
  [N.Shape]: calculateShape
};

export const calculateLayout = (node) => {
  const { type } = node;
  const identity = R.evolve({ children: R.map(calculateLayout) });
  const fn = L[type] || identity;

  return fn(node);
}