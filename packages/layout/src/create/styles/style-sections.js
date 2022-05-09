import * as R from 'ramda';

export const styleSections = (createStyles) => (node) => {
  const addSectionTitle = (child) => ({
    ...child,
    props: { ...child.props, sectionTitle: node.props.title }
  });
  const transducer = R.compose(
    R.map(addSectionTitle),
    R.map(createStyles)
  );

  return R.evolve({
    children: R.into([], transducer)
  })(node);
};
