export const flattenChildren = (arr, props) => {
  const result = [];

  arr.forEach((item) => {
    const { children, ...node } = item;

    result.push({
      props,
      ...node
    });

    if (children) {
      result.push(...flattenChildren(children, node.props));
    }
  });

  return result;
};
