import { calculateLayout } from './calculate/calculate-layout';
import { createStyles } from './create/create-styles';
import { createYogaNodes } from './create/create-yoga-nodes';
import * as R from 'ramda';

function triggerLayoutCalculation(node) {
  node._yogaNode?.calculateLayout();
  return node;
}

export function getLayout(ctx, doc) {

  return R.evolve({
    children: R.map(R.compose(
      calculateLayout,
      triggerLayoutCalculation,
      createYogaNodes(ctx),
      createStyles
    )
    )
  })(doc);

}
