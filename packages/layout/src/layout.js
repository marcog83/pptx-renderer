import { calculateLayout } from './calculate/calculate-layout';
import { createStyles } from './create/create-styles';
import { createYogaNodes } from './create/create-yoga-nodes';
import * as R from 'ramda';
import { isSection, isSlide } from '@pptx-renderer/primitives';

const triggerLayoutCalculation = (node) => {
  if (isSection(node)) {
    node.children.forEach(slide => {
      triggerLayoutCalculation(slide);
    })
  } else if (isSlide(node)) {
    node._yogaNode.calculateLayout();
  }
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

export function resolveLayout({ctx, doc}) {

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
