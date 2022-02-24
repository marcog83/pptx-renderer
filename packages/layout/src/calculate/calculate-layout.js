import { getBox } from './get-box';

import * as N from '@pptx-renderer/primitives';
import * as R from 'ramda';


const calculateText = node => {
  return {
    ...node,
    box: getBox(node.parent, node)
  };
}

const calculateShape = node => {
  return {
    ...node,
    box: getBox(node.parent, node)
  };
}


const L = {
  [N.Text]: calculateText,
  [N.Notes]: R.identity,
  [N.Shape]: calculateShape
};

export const calculateLayout = (node) => {
  const { type } = node;
  const identity = R.evolve({ children: R.map(calculateLayout) });
  const fn = L[type] || identity;

  return fn(node);
}