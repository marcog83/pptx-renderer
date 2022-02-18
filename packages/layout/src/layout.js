import { calculateLayout } from './calculate/calculate-layout';
import { createYogaNodes } from './create/create-yoga-nodes';
 

function triggerLayoutCalculation(node){
  node._yogaNode?.calculateLayout();
  return node;
}

export function getLayout(ctx, doc) {
  const pages = doc.children ?? [];
  const a = {
    ...doc,
    children: pages.map(createYogaNodes(ctx))
    .map(triggerLayoutCalculation)
    .map(calculateLayout(ctx))
  };

  

  const b = {
    ...a,
    children: a.children.map(calculateLayout(ctx))
  }
  return b;
}
