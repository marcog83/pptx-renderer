import { calculateLayout } from './calculate/calculate-layout';
import { createStyles } from './create/create-styles';
import { createYogaNodes } from './create/create-yoga-nodes';
import * as R from 'ramda';

const triggerLayoutCalculation=(node)=> {
  node._yogaNode?.calculateLayout();
  return node;
}

const freeYogaNodes = node => {
  node._yogaNode?.freeRecursive();
  return node;
};

const destroyYogaNodes = node => {
  return R.compose(
    R.dissoc('_yogaNode'),
    R.evolve({ children: R.map(destroyYogaNodes) }),
  )(node);
};

export function getLayout(ctx, doc) {

  return R.evolve({
    children: R.map(R.compose(
      destroyYogaNodes,
      freeYogaNodes,
      calculateLayout,
      triggerLayoutCalculation,
      createYogaNodes(ctx),
      createStyles
    )
    )
  })(doc);

}
