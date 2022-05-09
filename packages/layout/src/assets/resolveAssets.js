import * as N from '@pptx-renderer/primitives';
import { fetchImage } from './fetchImage';

const fetchAssets = (node) => {
  const promises = [];
  const listToExplore = node.children?.slice(0) || [];

  while (listToExplore.length > 0) {
    const n = listToExplore.shift();

    if (N.isImage(n)) {
      promises.push(fetchImage(n));
    }

    if (n.children) {
      n.children.forEach((childNode) => {
        listToExplore.push(childNode);
      });
    }
  }

  return promises;
};

export const resolveAssets = async (node) => {
  const promises = fetchAssets(node.doc);

  await Promise.all(promises);

  return node;
};
