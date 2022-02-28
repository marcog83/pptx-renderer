import { getBox } from './get-box';

import * as N from '@pptx-renderer/primitives';
import * as R from 'ramda';


const calculateBox=node => {
  return {
    ...node,
    box: getBox(node.parent, node)
  };
}

const calculateText =calculateBox;

const calculateShape = calculateBox;
const calculateImage = calculateBox;

const L = {
  [N.Text]: calculateText,
  [N.Image]: calculateImage,
  [N.Notes]: R.identity,
  [N.Shape]: calculateShape
};

export const calculateLayout = (node) => {
  const { type } = node;
  const identity = R.evolve({ children: R.map(calculateLayout) });
  const fn = L[type] || identity;

  return fn(node);
}