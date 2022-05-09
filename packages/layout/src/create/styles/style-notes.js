import * as N from '@pptx-renderer/primitives';

export const styleNotes = () => (node) => {
  const text = node.children
        .filter(N.isTextInstance)
        .map(({ value }) => value)
        .join(' ');

  return {
    ...node,
    text
  };
};
